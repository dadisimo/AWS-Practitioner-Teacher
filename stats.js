// =============================================
// Stats & Live Map — Any Practitioner Teacher
// =============================================

const STATS_STORAGE_KEY = 'practitionerAppStats';

// ---- Visit Tracking ----------------------------------------

/**
 * Records one visit for today.  Called once on app init.
 */
function trackVisit() {
    const stats = getStoredStats();
    const today = new Date().toISOString().split('T')[0];   // YYYY-MM-DD
    const month = today.substring(0, 7);                    // YYYY-MM

    if (!stats.visits) stats.visits = {};
    if (!stats.visits[month]) stats.visits[month] = {};
    stats.visits[month][today] = (stats.visits[month][today] || 0) + 1;
    stats.totalSessions = (stats.totalSessions || 0) + 1;
    stats.lastSeen = Date.now();

    try {
        localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stats));
    } catch (e) {
        console.warn('Could not save stats:', e);
    }
}

function getStoredStats() {
    try {
        const saved = localStorage.getItem(STATS_STORAGE_KEY);
        return saved ? JSON.parse(saved) : {};
    } catch (e) {
        return {};
    }
}

// ---- Screen navigation ------------------------------------

function showStats() {
    const activeScreen = document.querySelector('.screen.active');
    state.previousScreen = activeScreen ? activeScreen.id : 'welcome-screen';
    showScreen('stats-screen');
    loadStatsScreen();
}

function closeStats() {
    showScreen(state.previousScreen || 'welcome-screen');
    // Hide progress bar if returning to welcome screen
    if ((state.previousScreen || 'welcome-screen') === 'welcome-screen') {
        document.getElementById('progress-container').classList.remove('visible');
    }
}

// ---- Stats screen rendering --------------------------------

let visitChartInstance = null;

async function loadStatsScreen() {
    const stats = getStoredStats();

    // Monthly sessions count
    const currentMonth = new Date().toISOString().substring(0, 7);
    const monthlyVisits = (stats.visits && stats.visits[currentMonth]) || {};
    const monthlySessions = Object.values(monthlyVisits).reduce((a, b) => a + b, 0);

    document.getElementById('monthly-sessions').textContent = monthlySessions || 0;
    document.getElementById('total-sessions').textContent = stats.totalSessions || 1;

    renderVisitChart(stats);
    await initLiveMap();
}

// ---- Chart -------------------------------------------------

function renderVisitChart(stats) {
    const ctx = document.getElementById('visit-chart');
    if (!ctx) return;

    const allVisits = (stats && stats.visits) || {};
    const labels = [];
    const data = [];

    for (let i = 29; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const dateStr = d.toISOString().split('T')[0];
        const monthStr = dateStr.substring(0, 7);
        labels.push(d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));
        data.push((allVisits[monthStr] && allVisits[monthStr][dateStr]) || 0);
    }

    if (visitChartInstance) {
        visitChartInstance.destroy();
        visitChartInstance = null;
    }

    visitChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Sessions',
                data,
                backgroundColor: 'rgba(79, 70, 229, 0.7)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: (item) => `${item.raw} session${item.raw !== 1 ? 's' : ''}`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1, precision: 0 }
                }
            }
        }
    });
}

// ---- Geolocation -------------------------------------------

async function geolocateUser() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!data.latitude || !data.longitude) throw new Error('No coordinates in response');
        return {
            lat: parseFloat(data.latitude),
            lon: parseFloat(data.longitude),
            city: data.city || 'Unknown',
            region: data.region || '',
            country: data.country_name || 'Unknown'
        };
    } catch (e) {
        console.warn('Geolocation unavailable:', e);
        return null;
    }
}

// ---- Leaflet map -------------------------------------------

let statsMap = null;

async function initLiveMap() {
    const mapContainer = document.getElementById('map-container');
    const mapStatus = document.getElementById('map-status');
    if (!mapContainer) return;

    // Re-use existing map instance on repeated opens
    if (statsMap) {
        setTimeout(() => statsMap.invalidateSize(), 100);
        return;
    }

    setMapStatus('Detecting your location…');

    statsMap = L.map('map-container').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(statsMap);

    const location = await geolocateUser();

    if (location) {
        addMarker(location.lat, location.lon, buildPopup('📍 You are here', location), 'current-user');
        statsMap.setView([location.lat, location.lon], 4);
        setMapStatus(`📍 You're connected from ${location.city}, ${location.country}`);

        // Cache location for Firebase presence
        try {
            const stored = getStoredStats();
            stored.lastLocation = location;
            localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(stored));
        } catch (e) { /* ignore */ }

        await updateConnectedUsers(location);
    } else {
        setMapStatus('📍 Location unavailable — showing world map.');
        showDemoMarkers();
    }

    setTimeout(() => statsMap && statsMap.invalidateSize(), 200);
}

function addMarker(lat, lon, popupHtml, markerClass) {
    if (!statsMap) return;
    const icon = L.divIcon({
        className: 'leaflet-user-marker',
        html: `<div class="marker-dot ${markerClass}"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, -10]
    });
    return L.marker([lat, lon], { icon })
        .addTo(statsMap)
        .bindPopup(popupHtml);
}

function buildPopup(heading, loc) {
    return `<strong>${heading}</strong><br>${loc.city}${loc.region ? ', ' + loc.region : ''}<br>${loc.country}`;
}

function setMapStatus(text) {
    const el = document.getElementById('map-status');
    if (el) el.textContent = text;
}

// ---- Firebase real-time presence (optional) ----------------

async function updateConnectedUsers(myLocation) {
    if (typeof FIREBASE_ENABLED === 'undefined' || !FIREBASE_ENABLED ||
        typeof FIREBASE_CONFIG === 'undefined' ||
        FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') {
        showDemoMarkers();
        appendDemoBadge();
        return;
    }

    try {
        const { initializeApp, getApps } = await import(
            'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js'
        );
        const { getDatabase, ref, set, onValue, remove } = await import(
            'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'
        );

        const app = getApps().length ? getApps()[0] : initializeApp(FIREBASE_CONFIG);
        const db = getDatabase(app);

        // Persistent anonymous user ID
        let uid = localStorage.getItem('practitioner_uid');
        if (!uid) {
            uid = 'u_' + Math.random().toString(36).substring(2, 11);
            localStorage.setItem('practitioner_uid', uid);
        }

        const userRef = ref(db, `presence/${uid}`);
        await set(userRef, {
            lat: myLocation.lat,
            lon: myLocation.lon,
            city: myLocation.city,
            country: myLocation.country,
            lastSeen: Date.now()
        });

        // Clean up on page unload
        window.addEventListener('beforeunload', () => { try { remove(userRef); } catch (e) {} });

        // Live listener — redraws all markers on every change
        const presenceRef = ref(db, 'presence');
        onValue(presenceRef, (snapshot) => {
            const users = snapshot.val() || {};
            const now = Date.now();
            const FIVE_MIN = 5 * 60 * 1000;

            // Remove all existing markers
            statsMap.eachLayer((layer) => {
                if (layer instanceof L.Marker) statsMap.removeLayer(layer);
            });

            let count = 0;
            Object.entries(users).forEach(([id, u]) => {
                if (now - u.lastSeen > FIVE_MIN) return;
                const isMe = id === uid;
                const marker = addMarker(
                    u.lat, u.lon,
                    `<strong>${isMe ? '📍 You' : '👤 User'}</strong><br>${u.city}, ${u.country}`,
                    isMe ? 'current-user' : 'other-user'
                );
                if (isMe && marker) marker.openPopup();
                count++;
            });

            setMapStatus(`🟢 ${count} user${count !== 1 ? 's' : ''} connected right now`);
        });

    } catch (e) {
        console.warn('Firebase unavailable:', e);
        showDemoMarkers();
        appendDemoBadge();
    }
}

// ---- Demo mode markers -------------------------------------

const DEMO_LOCATIONS = [
    { lat: 37.7749,  lon: -122.4194, city: 'San Francisco', country: 'US' },
    { lat: 51.5074,  lon: -0.1278,   city: 'London',        country: 'UK' },
    { lat: 35.6762,  lon: 139.6503,  city: 'Tokyo',         country: 'JP' },
    { lat: -33.8688, lon: 151.2093,  city: 'Sydney',        country: 'AU' },
    { lat: 48.8566,  lon: 2.3522,    city: 'Paris',         country: 'FR' },
    { lat: 19.0760,  lon: 72.8777,   city: 'Mumbai',        country: 'IN' }
];

function showDemoMarkers() {
    DEMO_LOCATIONS.forEach(loc => {
        addMarker(loc.lat, loc.lon,
            `<strong>👤 Demo User</strong><br>${loc.city}, ${loc.country}`,
            'demo-user');
    });
}

function appendDemoBadge() {
    const el = document.getElementById('map-status');
    if (!el) return;
    el.innerHTML = el.textContent +
        ' &nbsp;<span class="demo-badge">Demo mode</span>' +
        ' — <a href="firebase-config.js" target="_blank">configure Firebase</a> for live data';
}
