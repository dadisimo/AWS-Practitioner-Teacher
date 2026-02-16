// AWS Practitioner Exam Content
const awsData = {
    sections: [
        {
            id: 'cloud-concepts',
            title: 'Cloud Concepts & Architecture',
            icon: '☁️',
            description: 'Learn AWS Cloud fundamentals, benefits, and architectural principles',
            questions: [
                {
                    id: 1,
                    question: 'What is the AWS Well-Architected Framework\'s primary purpose?',
                    options: [
                        'To provide guidance on building secure, high-performing, resilient, and efficient infrastructure',
                        'To automatically configure AWS resources',
                        'To reduce AWS costs only',
                        'To create virtual machines'
                    ],
                    correct: 0,
                    explanation: 'The AWS Well-Architected Framework helps cloud architects build secure, high-performing, resilient, and efficient infrastructure.'
                },
                {
                    id: 2,
                    question: 'Which of the following are pillars of the AWS Well-Architected Framework? (Select all that apply)',
                    options: [
                        'Operational Excellence',
                        'Security',
                        'Reliability',
                        'All of the above'
                    ],
                    correct: 3,
                    explanation: 'The six pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability.'
                },
                {
                    id: 3,
                    question: 'What does "elasticity" mean in cloud computing?',
                    options: [
                        'The ability to stretch physical hardware',
                        'The ability to automatically scale resources up or down based on demand',
                        'The flexibility of AWS pricing',
                        'The durability of data storage'
                    ],
                    correct: 1,
                    explanation: 'Elasticity is the ability to acquire resources as you need them and release them when you no longer need them, scaling automatically with demand.'
                },
                {
                    id: 4,
                    question: 'What is the difference between vertical and horizontal scaling?',
                    options: [
                        'Vertical adds more instances, horizontal adds more power to existing instances',
                        'Vertical adds more power to existing instances, horizontal adds more instances',
                        'There is no difference',
                        'Vertical is for databases only, horizontal is for web servers only'
                    ],
                    correct: 1,
                    explanation: 'Vertical scaling (scale up) means adding more power (CPU, RAM) to existing instances. Horizontal scaling (scale out) means adding more instances.'
                },
                {
                    id: 5,
                    question: 'Which AWS service would you use to distribute incoming application traffic across multiple targets?',
                    options: [
                        'Amazon S3',
                        'AWS Lambda',
                        'Elastic Load Balancer (ELB)',
                        'Amazon RDS'
                    ],
                    correct: 2,
                    explanation: 'Elastic Load Balancer automatically distributes incoming application traffic across multiple targets, such as EC2 instances.'
                },
                {
                    id: 6,
                    question: 'What is the AWS Shared Responsibility Model?',
                    options: [
                        'AWS is responsible for everything',
                        'Customers are responsible for everything',
                        'AWS is responsible for security OF the cloud, customers are responsible for security IN the cloud',
                        'AWS and customers share all responsibilities equally'
                    ],
                    correct: 2,
                    explanation: 'AWS manages security OF the cloud (infrastructure), while customers manage security IN the cloud (data, applications, configurations).'
                },
                {
                    id: 7,
                    question: 'Which of the following is a benefit of cloud computing?',
                    options: [
                        'Trade capital expense for variable expense',
                        'Increased need for data center maintenance',
                        'Increased upfront costs',
                        'Decreased scalability'
                    ],
                    correct: 0,
                    explanation: 'Cloud computing allows you to trade capital expense (upfront costs) for variable expense (pay only for what you use).'
                },
                {
                    id: 8,
                    question: 'What does "high availability" mean in AWS?',
                    options: [
                        'Resources are available only during business hours',
                        'Systems are designed to operate continuously without failure for a long time',
                        'Resources are expensive',
                        'Resources are fast'
                    ],
                    correct: 1,
                    explanation: 'High availability means designing systems to operate continuously without failure for a designated period, often using multiple Availability Zones.'
                },
                {
                    id: 9,
                    question: 'What is an AWS Region?',
                    options: [
                        'A single data center',
                        'A geographic area that contains multiple Availability Zones',
                        'A type of EC2 instance',
                        'A pricing tier'
                    ],
                    correct: 1,
                    explanation: 'An AWS Region is a geographic area that contains multiple physically separated Availability Zones, providing fault tolerance and stability.'
                },
                {
                    id: 10,
                    question: 'What is an AWS Availability Zone?',
                    options: [
                        'A pricing zone',
                        'One or more discrete data centers with redundant power, networking, and connectivity',
                        'A security feature',
                        'A type of storage'
                    ],
                    correct: 1,
                    explanation: 'An Availability Zone consists of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities.'
                },
                {
                    id: 11,
                    question: 'Which deployment model is best for maintaining legacy systems while adopting cloud services?',
                    options: [
                        'Cloud-only deployment',
                        'Hybrid deployment',
                        'On-premises only',
                        'Multi-cloud deployment'
                    ],
                    correct: 1,
                    explanation: 'Hybrid deployment connects on-premises infrastructure with cloud resources, ideal for maintaining legacy systems while adopting cloud services.'
                },
                {
                    id: 12,
                    question: 'What is the principle of "loose coupling" in cloud architecture?',
                    options: [
                        'Components are tightly integrated',
                        'Components are designed to have minimal dependencies on each other',
                        'Components must all be in the same Region',
                        'Components share the same database'
                    ],
                    correct: 1,
                    explanation: 'Loose coupling means designing components with minimal dependencies, so changes or failures in one component don\'t cascade to others.'
                }
            ],
            documentation: `
                <h3>Cloud Concepts & Architecture</h3>
                
                <h4>What is Cloud Computing?</h4>
                <p>Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services on an as-needed basis.</p>

                <h4>Six Advantages of Cloud Computing:</h4>
                <ol>
                    <li><strong>Trade capital expense for variable expense:</strong> Pay only for what you consume instead of investing in data centers upfront</li>
                    <li><strong>Benefit from massive economies of scale:</strong> Lower variable costs due to AWS's scale</li>
                    <li><strong>Stop guessing capacity:</strong> Scale up or down based on actual needs</li>
                    <li><strong>Increase speed and agility:</strong> Reduce time to make resources available from weeks to minutes</li>
                    <li><strong>Stop spending money on data center operations:</strong> Focus on customers rather than infrastructure</li>
                    <li><strong>Go global in minutes:</strong> Deploy applications worldwide quickly</li>
                </ol>

                <h4>Types of Cloud Computing:</h4>
                <ul>
                    <li><strong>Infrastructure as a Service (IaaS):</strong> Basic building blocks - compute, storage, networking (EC2, S3)</li>
                    <li><strong>Platform as a Service (PaaS):</strong> Remove need to manage infrastructure (Elastic Beanstalk, RDS)</li>
                    <li><strong>Software as a Service (SaaS):</strong> Completed product managed by service provider (Gmail, Office 365)</li>
                </ul>

                <h4>Cloud Deployment Models:</h4>
                <ul>
                    <li><strong>Cloud:</strong> Everything runs in the cloud (startups, new applications)</li>
                    <li><strong>Hybrid:</strong> Connects cloud resources with on-premises infrastructure (banks, legacy systems)</li>
                    <li><strong>On-Premises (Private Cloud):</strong> Resources deployed on-premises using virtualization</li>
                </ul>

                <h4>AWS Global Infrastructure:</h4>
                <ul>
                    <li><strong>Regions:</strong> Geographic areas containing multiple Availability Zones (e.g., us-east-1, eu-west-1)</li>
                    <li><strong>Availability Zones (AZs):</strong> One or more discrete data centers with redundant power, networking, and connectivity</li>
                    <li><strong>Edge Locations:</strong> Used by CloudFront for content delivery (caching)</li>
                </ul>

                <h4>AWS Well-Architected Framework - Six Pillars:</h4>
                <ol>
                    <li><strong>Operational Excellence:</strong> Run and monitor systems to deliver business value</li>
                    <li><strong>Security:</strong> Protect information, systems, and assets</li>
                    <li><strong>Reliability:</strong> Recover from failures and meet demand</li>
                    <li><strong>Performance Efficiency:</strong> Use resources efficiently</li>
                    <li><strong>Cost Optimization:</strong> Avoid unnecessary costs</li>
                    <li><strong>Sustainability:</strong> Minimize environmental impact</li>
                </ol>

                <h4>Key Architectural Concepts:</h4>
                <ul>
                    <li><strong>Scalability:</strong> Ability to handle growth (vertical = more power, horizontal = more instances)</li>
                    <li><strong>Elasticity:</strong> Automatically scale resources based on demand</li>
                    <li><strong>High Availability:</strong> Systems operate continuously without failure</li>
                    <li><strong>Fault Tolerance:</strong> System continues to operate despite component failures</li>
                    <li><strong>Loose Coupling:</strong> Components have minimal dependencies on each other</li>
                </ul>

                <h4>AWS Shared Responsibility Model:</h4>
                <p><strong>AWS Responsibility (Security OF the Cloud):</strong></p>
                <ul>
                    <li>Physical infrastructure (data centers, hardware)</li>
                    <li>Network infrastructure</li>
                    <li>Hypervisor and virtualization layer</li>
                </ul>
                <p><strong>Customer Responsibility (Security IN the Cloud):</strong></p>
                <ul>
                    <li>Customer data</li>
                    <li>Platform, applications, Identity & Access Management</li>
                    <li>Operating system, network, and firewall configuration</li>
                    <li>Encryption (data at rest and in transit)</li>
                </ul>
            `,
            followUpQuestions: [
                {
                    question: 'Which pillar of the Well-Architected Framework focuses on minimizing environmental impact?',
                    options: ['Cost Optimization', 'Operational Excellence', 'Sustainability', 'Performance Efficiency'],
                    correct: 2
                },
                {
                    question: 'In the Shared Responsibility Model, who is responsible for encrypting customer data?',
                    options: ['AWS only', 'Customer only', 'Both AWS and Customer', 'Neither'],
                    correct: 1
                },
                {
                    question: 'What is the minimum number of Availability Zones in an AWS Region?',
                    options: ['One', 'Two', 'Three', 'Four'],
                    correct: 1
                },
                {
                    question: 'Which type of scaling adds more instances rather than more power?',
                    options: ['Vertical scaling', 'Horizontal scaling', 'Diagonal scaling', 'Linear scaling'],
                    correct: 1
                },
                {
                    question: 'What advantage of cloud computing refers to reducing time to provision resources?',
                    options: ['Economies of scale', 'Go global in minutes', 'Increase speed and agility', 'Stop guessing capacity'],
                    correct: 2
                }
            ]
        },
        {
            id: 'security-compliance',
            title: 'Security & Compliance',
            icon: '🔒',
            description: 'Master AWS security services, IAM, and compliance frameworks',
            questions: [
                {
                    id: 1,
                    question: 'What is AWS Identity and Access Management (IAM)?',
                    options: [
                        'A database service',
                        'A service that enables you to manage access to AWS services and resources securely',
                        'A monitoring service',
                        'A storage service'
                    ],
                    correct: 1,
                    explanation: 'IAM enables you to manage access to AWS services and resources securely by creating users, groups, roles, and policies.'
                },
                {
                    id: 2,
                    question: 'What is the AWS principle of granting least privilege?',
                    options: [
                        'Give users maximum permissions',
                        'Give users only the permissions they need to perform their job',
                        'Give everyone admin access',
                        'Give no one any permissions'
                    ],
                    correct: 1,
                    explanation: 'Least privilege means granting only the permissions required to perform a task, minimizing security risks.'
                },
                {
                    id: 3,
                    question: 'What is an IAM Role?',
                    options: [
                        'A permanent user account',
                        'An identity with permissions that can be assumed by entities that need them',
                        'A type of database',
                        'A storage bucket'
                    ],
                    correct: 1,
                    explanation: 'An IAM role is an identity with specific permissions that can be temporarily assumed by users, applications, or services.'
                },
                {
                    id: 4,
                    question: 'What is AWS Multi-Factor Authentication (MFA)?',
                    options: [
                        'A way to create multiple users',
                        'An extra layer of protection requiring users to present two or more credentials',
                        'A pricing model',
                        'A region selection feature'
                    ],
                    correct: 1,
                    explanation: 'MFA adds an extra layer of security by requiring users to provide two or more verification factors: something they know (password) and something they have (device).'
                },
                {
                    id: 5,
                    question: 'Which service helps you monitor and log AWS account activity?',
                    options: [
                        'Amazon S3',
                        'AWS CloudTrail',
                        'Amazon EC2',
                        'AWS Lambda'
                    ],
                    correct: 1,
                    explanation: 'AWS CloudTrail logs and monitors API calls and account activity, providing audit trails for governance, compliance, and operational auditing.'
                },
                {
                    id: 6,
                    question: 'What is AWS Shield?',
                    options: [
                        'A VPN service',
                        'A managed DDoS protection service',
                        'A firewall',
                        'An antivirus service'
                    ],
                    correct: 1,
                    explanation: 'AWS Shield is a managed DDoS protection service that safeguards applications running on AWS.'
                },
                {
                    id: 7,
                    question: 'What does AWS WAF (Web Application Firewall) protect against?',
                    options: [
                        'Physical theft',
                        'Common web exploits that could affect application availability',
                        'Hard drive failures',
                        'Network outages'
                    ],
                    correct: 1,
                    explanation: 'AWS WAF helps protect web applications from common web exploits like SQL injection and cross-site scripting.'
                },
                {
                    id: 8,
                    question: 'What is Amazon GuardDuty?',
                    options: [
                        'A storage service',
                        'A threat detection service that monitors for malicious activity',
                        'A database service',
                        'A compute service'
                    ],
                    correct: 1,
                    explanation: 'Amazon GuardDuty is an intelligent threat detection service that continuously monitors for malicious activity and unauthorized behavior.'
                },
                {
                    id: 9,
                    question: 'What is AWS Artifact?',
                    options: [
                        'A deployment tool',
                        'A service providing on-demand access to AWS compliance reports',
                        'A storage service',
                        'A monitoring tool'
                    ],
                    correct: 1,
                    explanation: 'AWS Artifact provides on-demand access to AWS security and compliance documents (compliance reports and agreements).'
                },
                {
                    id: 10,
                    question: 'Which service provides encryption for data at rest in S3?',
                    options: [
                        'AWS IAM',
                        'AWS KMS (Key Management Service)',
                        'AWS CloudTrail',
                        'AWS Config'
                    ],
                    correct: 1,
                    explanation: 'AWS KMS makes it easy to create and manage cryptographic keys for encrypting data, including S3 objects.'
                },
                {
                    id: 11,
                    question: 'What is AWS Security Hub?',
                    options: [
                        'A physical security service',
                        'A centralized security and compliance service that aggregates security findings',
                        'A VPN service',
                        'A firewall service'
                    ],
                    correct: 1,
                    explanation: 'AWS Security Hub provides a comprehensive view of security alerts and compliance status across AWS accounts.'
                },
                {
                    id: 12,
                    question: 'What is the root user in an AWS account?',
                    options: [
                        'A regular user account',
                        'The account owner with complete access to all AWS resources',
                        'A temporary user',
                        'A service account'
                    ],
                    correct: 1,
                    explanation: 'The root user has complete access to all AWS resources and should be protected with MFA and used sparingly.'
                }
            ],
            documentation: `
                <h3>Security & Compliance</h3>
                
                <h4>AWS Identity and Access Management (IAM):</h4>
                <p>IAM enables you to manage access to AWS services and resources securely. You can create and manage AWS users and groups and use permissions to allow and deny their access.</p>

                <h4>IAM Components:</h4>
                <ul>
                    <li><strong>Users:</strong> Individual identities with unique credentials</li>
                    <li><strong>Groups:</strong> Collections of users with shared permissions</li>
                    <li><strong>Roles:</strong> Identities with permissions that can be assumed temporarily</li>
                    <li><strong>Policies:</strong> JSON documents defining permissions (what actions on what resources)</li>
                </ul>

                <h4>IAM Best Practices:</h4>
                <ol>
                    <li><strong>Lock root account:</strong> Enable MFA and don't use for daily tasks</li>
                    <li><strong>Create individual IAM users:</strong> Don't share credentials</li>
                    <li><strong>Use groups:</strong> Assign permissions to groups, not individual users</li>
                    <li><strong>Grant least privilege:</strong> Give minimum permissions needed</li>
                    <li><strong>Enable MFA:</strong> Add extra security layer</li>
                    <li><strong>Use roles for applications:</strong> Instead of embedding credentials</li>
                    <li><strong>Rotate credentials regularly:</strong> Change passwords and access keys</li>
                    <li><strong>Monitor activity:</strong> Use CloudTrail to track IAM actions</li>
                </ol>

                <h4>Multi-Factor Authentication (MFA):</h4>
                <p>MFA requires two or more authentication factors:</p>
                <ul>
                    <li><strong>Something you know:</strong> Password</li>
                    <li><strong>Something you have:</strong> Physical device, mobile app, security key</li>
                    <li><strong>Something you are:</strong> Biometrics (fingerprint, face recognition)</li>
                </ul>

                <h4>Security Services:</h4>
                <ul>
                    <li><strong>AWS CloudTrail:</strong> Logs API calls and account activity for auditing</li>
                    <li><strong>Amazon CloudWatch:</strong> Monitors resources and applications</li>
                    <li><strong>AWS Config:</strong> Tracks resource configurations and changes</li>
                    <li><strong>AWS Trusted Advisor:</strong> Provides best practice recommendations</li>
                    <li><strong>Amazon Inspector:</strong> Automated security assessment service</li>
                    <li><strong>Amazon GuardDuty:</strong> Intelligent threat detection</li>
                    <li><strong>AWS Security Hub:</strong> Centralized security and compliance view</li>
                </ul>

                <h4>Network Security:</h4>
                <ul>
                    <li><strong>Security Groups:</strong> Virtual firewalls for EC2 instances (stateful)</li>
                    <li><strong>Network ACLs:</strong> Firewall for subnets (stateless)</li>
                    <li><strong>AWS WAF:</strong> Web Application Firewall protects against web exploits</li>
                    <li><strong>AWS Shield:</strong> DDoS protection (Standard is free, Advanced costs extra)</li>
                    <li><strong>AWS Firewall Manager:</strong> Centrally manage firewall rules</li>
                </ul>

                <h4>Data Protection:</h4>
                <ul>
                    <li><strong>Encryption at rest:</strong> Protect stored data (AWS KMS, S3 encryption)</li>
                    <li><strong>Encryption in transit:</strong> Protect data moving between systems (SSL/TLS, VPN)</li>
                    <li><strong>AWS KMS:</strong> Create and manage encryption keys</li>
                    <li><strong>CloudHSM:</strong> Hardware security module for key storage</li>
                    <li><strong>AWS Certificate Manager:</strong> Provision and manage SSL/TLS certificates</li>
                </ul>

                <h4>Compliance Programs:</h4>
                <p>AWS complies with many certifications and standards:</p>
                <ul>
                    <li><strong>PCI DSS:</strong> Payment Card Industry Data Security Standard</li>
                    <li><strong>HIPAA:</strong> Health Insurance Portability and Accountability Act</li>
                    <li><strong>SOC 1, 2, 3:</strong> Service Organization Control reports</li>
                    <li><strong>ISO 27001:</strong> Information security management</li>
                    <li><strong>GDPR:</strong> General Data Protection Regulation</li>
                    <li><strong>FedRAMP:</strong> Federal Risk and Authorization Management Program</li>
                </ul>

                <h4>AWS Artifact:</h4>
                <p>Provides on-demand access to AWS compliance reports and agreements:</p>
                <ul>
                    <li>Download AWS security and compliance documents</li>
                    <li>Review and accept agreements (BAA for HIPAA)</li>
                    <li>No charge for accessing reports</li>
                </ul>

                <h4>Security Best Practices:</h4>
                <ol>
                    <li>Implement defense in depth (multiple security layers)</li>
                    <li>Enable logging and monitoring</li>
                    <li>Automate security responses</li>
                    <li>Protect data at rest and in transit</li>
                    <li>Prepare for security events (incident response plan)</li>
                    <li>Use AWS security services and tools</li>
                    <li>Regular security assessments and audits</li>
                </ol>
            `,
            followUpQuestions: [
                {
                    question: 'What are the three components required for MFA?',
                    options: ['Password, username, email', 'Something you know, something you have, something you are', 'User, group, role', 'Region, zone, subnet'],
                    correct: 1
                },
                {
                    question: 'Which service provides on-demand access to AWS compliance reports?',
                    options: ['AWS Config', 'AWS Artifact', 'AWS CloudTrail', 'AWS Inspector'],
                    correct: 1
                },
                {
                    question: 'What is the difference between Security Groups and Network ACLs?',
                    options: ['No difference', 'Security Groups are stateful, Network ACLs are stateless', 'Security Groups are stateless, Network ACLs are stateful', 'Both are the same'],
                    correct: 1
                },
                {
                    question: 'Which service helps create and manage encryption keys?',
                    options: ['AWS IAM', 'AWS KMS', 'AWS Shield', 'AWS WAF'],
                    correct: 1
                },
                {
                    question: 'What should you do with the AWS root account?',
                    options: ['Use it for daily tasks', 'Share it with team members', 'Enable MFA and use sparingly', 'Delete it'],
                    correct: 2
                }
            ]
        },
        {
            id: 'technology-services',
            title: 'Technology & Services',
            icon: '💻',
            description: 'Explore core AWS services including compute, storage, database, and networking',
            questions: [
                {
                    id: 1,
                    question: 'What is Amazon EC2?',
                    options: [
                        'A storage service',
                        'A virtual server in the cloud providing scalable compute capacity',
                        'A database service',
                        'A monitoring service'
                    ],
                    correct: 1,
                    explanation: 'Amazon EC2 (Elastic Compute Cloud) provides scalable virtual servers in the cloud.'
                },
                {
                    id: 2,
                    question: 'What is Amazon S3 used for?',
                    options: [
                        'Running virtual machines',
                        'Object storage with unlimited scalability',
                        'Managing databases',
                        'Load balancing'
                    ],
                    correct: 1,
                    explanation: 'Amazon S3 (Simple Storage Service) is an object storage service offering unlimited scalability, durability, and availability.'
                },
                {
                    id: 3,
                    question: 'What is AWS Lambda?',
                    options: [
                        'A database service',
                        'A serverless compute service that runs code in response to events',
                        'A storage service',
                        'A networking service'
                    ],
                    correct: 1,
                    explanation: 'AWS Lambda lets you run code without provisioning or managing servers. You pay only for compute time consumed.'
                },
                {
                    id: 4,
                    question: 'What is Amazon RDS?',
                    options: [
                        'A file storage service',
                        'A managed relational database service',
                        'A NoSQL database',
                        'A compute service'
                    ],
                    correct: 1,
                    explanation: 'Amazon RDS (Relational Database Service) makes it easy to set up, operate, and scale relational databases in the cloud.'
                },
                {
                    id: 5,
                    question: 'What is Amazon VPC?',
                    options: [
                        'A monitoring service',
                        'A virtual private cloud enabling you to launch AWS resources in a logically isolated network',
                        'A database service',
                        'A storage service'
                    ],
                    correct: 1,
                    explanation: 'Amazon VPC (Virtual Private Cloud) lets you provision a logically isolated section of AWS cloud with complete control over networking.'
                },
                {
                    id: 6,
                    question: 'What is Amazon CloudFront?',
                    options: [
                        'A compute service',
                        'A content delivery network (CDN) that delivers content with low latency',
                        'A database service',
                        'A monitoring service'
                    ],
                    correct: 1,
                    explanation: 'Amazon CloudFront is a fast CDN that securely delivers data, videos, applications, and APIs globally with low latency.'
                },
                {
                    id: 7,
                    question: 'What is Amazon DynamoDB?',
                    options: [
                        'A relational database',
                        'A fully managed NoSQL database service',
                        'A file storage service',
                        'A compute service'
                    ],
                    correct: 1,
                    explanation: 'Amazon DynamoDB is a fast, flexible NoSQL database service providing single-digit millisecond performance at any scale.'
                },
                {
                    id: 8,
                    question: 'What is AWS Elastic Beanstalk?',
                    options: [
                        'A database service',
                        'A PaaS for deploying and scaling web applications without managing infrastructure',
                        'A storage service',
                        'A monitoring service'
                    ],
                    correct: 1,
                    explanation: 'AWS Elastic Beanstalk is a platform service that handles deployment, capacity provisioning, load balancing, and auto-scaling.'
                },
                {
                    id: 9,
                    question: 'What is Amazon Route 53?',
                    options: [
                        'A compute service',
                        'A scalable DNS web service',
                        'A storage service',
                        'A database service'
                    ],
                    correct: 1,
                    explanation: 'Amazon Route 53 is a scalable DNS and domain name registration service that routes users to applications.'
                },
                {
                    id: 10,
                    question: 'What is Amazon SNS?',
                    options: [
                        'A storage service',
                        'A fully managed pub/sub messaging service',
                        'A compute service',
                        'A database service'
                    ],
                    correct: 1,
                    explanation: 'Amazon SNS (Simple Notification Service) is a pub/sub messaging service for coordinating message delivery to subscribers.'
                },
                {
                    id: 11,
                    question: 'What is Amazon ECS?',
                    options: [
                        'A file storage service',
                        'A container orchestration service for running Docker containers',
                        'A database service',
                        'A monitoring service'
                    ],
                    correct: 1,
                    explanation: 'Amazon ECS (Elastic Container Service) is a highly scalable container orchestration service for Docker containers.'
                },
                {
                    id: 12,
                    question: 'What is AWS Auto Scaling?',
                    options: [
                        'A service that automatically adjusts capacity to maintain performance',
                        'A database backup service',
                        'A monitoring service only',
                        'A storage service'
                    ],
                    correct: 0,
                    explanation: 'AWS Auto Scaling monitors applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest cost.'
                }
            ],
            documentation: `
                <h3>Technology & Services</h3>
                
                <h4>Compute Services:</h4>
                <ul>
                    <li><strong>Amazon EC2:</strong> Virtual servers in the cloud
                        <ul>
                            <li>Instance types: General Purpose, Compute Optimized, Memory Optimized, Storage Optimized</li>
                            <li>Pricing: On-Demand, Reserved, Spot, Dedicated Hosts, Savings Plans</li>
                            <li>Use cases: Web applications, databases, development environments</li>
                        </ul>
                    </li>
                    <li><strong>AWS Lambda:</strong> Serverless compute
                        <ul>
                            <li>Run code without managing servers</li>
                            <li>Pay only when code runs (per request and duration)</li>
                            <li>Automatic scaling</li>
                            <li>Use cases: APIs, data processing, automation</li>
                        </ul>
                    </li>
                    <li><strong>AWS Elastic Beanstalk:</strong> PaaS for deploying applications
                        <ul>
                            <li>Upload code and Beanstalk handles deployment</li>
                            <li>Supports Java, .NET, PHP, Node.js, Python, Ruby, Go, Docker</li>
                            <li>Automatically manages capacity, load balancing, scaling, monitoring</li>
                        </ul>
                    </li>
                    <li><strong>Amazon ECS/EKS:</strong> Container orchestration
                        <ul>
                            <li>ECS: AWS container orchestration service</li>
                            <li>EKS: Managed Kubernetes service</li>
                            <li>Run and scale containerized applications</li>
                        </ul>
                    </li>
                </ul>

                <h4>Storage Services:</h4>
                <ul>
                    <li><strong>Amazon S3:</strong> Object storage
                        <ul>
                            <li>Store and retrieve any amount of data</li>
                            <li>99.999999999% (11 nines) durability</li>
                            <li>Storage classes: Standard, Intelligent-Tiering, Glacier, Glacier Deep Archive</li>
                            <li>Use cases: Backups, data lakes, websites, archives</li>
                        </ul>
                    </li>
                    <li><strong>Amazon EBS:</strong> Block storage for EC2
                        <ul>
                            <li>Persistent block storage volumes</li>
                            <li>Types: SSD (gp3, io2) and HDD (st1, sc1)</li>
                            <li>Snapshots for backups</li>
                        </ul>
                    </li>
                    <li><strong>Amazon EFS:</strong> Elastic File System
                        <ul>
                            <li>Shared file storage for EC2</li>
                            <li>Automatically grows and shrinks</li>
                            <li>NFSv4 protocol</li>
                        </ul>
                    </li>
                    <li><strong>AWS Storage Gateway:</strong> Hybrid cloud storage
                        <ul>
                            <li>Connects on-premises with cloud storage</li>
                            <li>File, Volume, and Tape Gateway</li>
                        </ul>
                    </li>
                </ul>

                <h4>Database Services:</h4>
                <ul>
                    <li><strong>Amazon RDS:</strong> Managed relational databases
                        <ul>
                            <li>Supports MySQL, PostgreSQL, Oracle, SQL Server, MariaDB</li>
                            <li>Automated backups, patching, scaling</li>
                            <li>Multi-AZ for high availability</li>
                        </ul>
                    </li>
                    <li><strong>Amazon Aurora:</strong> MySQL and PostgreSQL compatible
                        <ul>
                            <li>5x faster than MySQL, 3x faster than PostgreSQL</li>
                            <li>Automatically scales storage up to 128 TB</li>
                            <li>Up to 15 read replicas</li>
                        </ul>
                    </li>
                    <li><strong>Amazon DynamoDB:</strong> NoSQL database
                        <ul>
                            <li>Key-value and document database</li>
                            <li>Single-digit millisecond performance</li>
                            <li>Fully managed, serverless</li>
                            <li>Auto scaling</li>
                        </ul>
                    </li>
                    <li><strong>Amazon ElastiCache:</strong> In-memory caching
                        <ul>
                            <li>Supports Redis and Memcached</li>
                            <li>Improves application performance</li>
                            <li>Reduces database load</li>
                        </ul>
                    </li>
                    <li><strong>Amazon Redshift:</strong> Data warehouse
                        <ul>
                            <li>Analyze data using SQL</li>
                            <li>Petabyte-scale</li>
                            <li>Fast query performance</li>
                        </ul>
                    </li>
                </ul>

                <h4>Networking Services:</h4>
                <ul>
                    <li><strong>Amazon VPC:</strong> Virtual Private Cloud
                        <ul>
                            <li>Isolated network environment</li>
                            <li>Subnets, route tables, internet gateways</li>
                            <li>Security groups and Network ACLs</li>
                        </ul>
                    </li>
                    <li><strong>Elastic Load Balancing:</strong> Distributes traffic
                        <ul>
                            <li>Application Load Balancer (Layer 7)</li>
                            <li>Network Load Balancer (Layer 4)</li>
                            <li>Gateway Load Balancer</li>
                        </ul>
                    </li>
                    <li><strong>Amazon CloudFront:</strong> Content Delivery Network
                        <ul>
                            <li>Global edge locations</li>
                            <li>Low latency content delivery</li>
                            <li>Integrates with S3, EC2, ELB</li>
                        </ul>
                    </li>
                    <li><strong>Amazon Route 53:</strong> DNS service
                        <ul>
                            <li>Domain registration</li>
                            <li>Health checks and monitoring</li>
                            <li>Routing policies: Simple, Weighted, Geolocation, Failover</li>
                        </ul>
                    </li>
                    <li><strong>AWS Direct Connect:</strong> Dedicated network connection
                        <ul>
                            <li>Private connectivity between AWS and your data center</li>
                            <li>Reduces costs and increases bandwidth</li>
                        </ul>
                    </li>
                </ul>

                <h4>Application Integration:</h4>
                <ul>
                    <li><strong>Amazon SQS:</strong> Message queuing service
                        <ul>
                            <li>Decouple and scale microservices</li>
                            <li>Standard and FIFO queues</li>
                        </ul>
                    </li>
                    <li><strong>Amazon SNS:</strong> Pub/sub messaging
                        <ul>
                            <li>Send messages to multiple subscribers</li>
                            <li>Push notifications to mobile devices</li>
                        </ul>
                    </li>
                    <li><strong>AWS Step Functions:</strong> Orchestrate workflows
                        <ul>
                            <li>Coordinate components of distributed applications</li>
                            <li>Visual workflow designer</li>
                        </ul>
                    </li>
                </ul>

                <h4>Additional Key Services:</h4>
                <ul>
                    <li><strong>AWS CloudFormation:</strong> Infrastructure as Code</li>
                    <li><strong>Amazon CloudWatch:</strong> Monitoring and observability</li>
                    <li><strong>AWS Systems Manager:</strong> Operations management</li>
                    <li><strong>AWS Trusted Advisor:</strong> Best practice recommendations</li>
                </ul>
            `,
            followUpQuestions: [
                {
                    question: 'Which service would you use for serverless compute?',
                    options: ['Amazon EC2', 'AWS Lambda', 'Amazon S3', 'Amazon RDS'],
                    correct: 1
                },
                {
                    question: 'What is the durability of Amazon S3?',
                    options: ['99.9%', '99.99%', '99.999999999%', '100%'],
                    correct: 2
                },
                {
                    question: 'Which database service is best for key-value data with millisecond latency?',
                    options: ['Amazon RDS', 'Amazon Redshift', 'Amazon DynamoDB', 'Amazon Aurora'],
                    correct: 2
                },
                {
                    question: 'What does Amazon CloudFront provide?',
                    options: ['Compute capacity', 'Content delivery network', 'Database storage', 'Virtual network'],
                    correct: 1
                },
                {
                    question: 'Which service helps deploy applications without managing infrastructure?',
                    options: ['Amazon EC2', 'AWS Elastic Beanstalk', 'Amazon S3', 'Amazon VPC'],
                    correct: 1
                }
            ]
        },
        {
            id: 'billing-pricing',
            title: 'Billing & Pricing',
            icon: '💰',
            description: 'Understand AWS pricing models, cost management, and billing tools',
            questions: [
                {
                    id: 1,
                    question: 'What is the AWS Free Tier?',
                    options: [
                        'Free AWS services forever',
                        'Limited free usage of services for 12 months plus always-free services',
                        'A discount program for students only',
                        'Free support from AWS'
                    ],
                    correct: 1,
                    explanation: 'AWS Free Tier includes 12 months of free tier services, always-free services, and short-term free trials for certain services.'
                },
                {
                    id: 2,
                    question: 'What are the three AWS pricing models?',
                    options: [
                        'Hourly, Daily, Monthly',
                        'Pay-as-you-go, Save when you reserve, Pay less by using more',
                        'Free, Standard, Premium',
                        'Basic, Professional, Enterprise'
                    ],
                    correct: 1,
                    explanation: 'AWS uses three pricing models: Pay-as-you-go (on-demand), Save when you reserve (Reserved Instances), and Pay less by using more (volume discounts).'
                },
                {
                    id: 3,
                    question: 'What is AWS Cost Explorer?',
                    options: [
                        'A tool to visualize and manage AWS costs and usage over time',
                        'A service to deploy applications',
                        'A monitoring service',
                        'A security service'
                    ],
                    correct: 0,
                    explanation: 'AWS Cost Explorer helps you visualize, understand, and manage AWS costs and usage over time with custom reports.'
                },
                {
                    id: 4,
                    question: 'What are Reserved Instances?',
                    options: [
                        'Instances that are always running',
                        'A commitment to use EC2 for 1 or 3 years in exchange for significant discounts',
                        'Backup instances',
                        'Free instances'
                    ],
                    correct: 1,
                    explanation: 'Reserved Instances provide up to 75% discount compared to On-Demand pricing in exchange for a 1 or 3-year commitment.'
                },
                {
                    id: 5,
                    question: 'What are Spot Instances?',
                    options: [
                        'Premium instances with guaranteed availability',
                        'Unused EC2 capacity available at up to 90% discount',
                        'Free instances',
                        'Instances for testing only'
                    ],
                    correct: 1,
                    explanation: 'Spot Instances let you take advantage of unused EC2 capacity at discounts up to 90%, but can be interrupted with 2-minute notice.'
                },
                {
                    id: 6,
                    question: 'What is AWS Budgets?',
                    options: [
                        'A financial planning service',
                        'A tool to set custom cost and usage budgets with alerts',
                        'A payment method',
                        'A discount program'
                    ],
                    correct: 1,
                    explanation: 'AWS Budgets allows you to set custom budgets that alert you when costs or usage exceed (or are forecasted to exceed) your budgeted amount.'
                },
                {
                    id: 7,
                    question: 'Which service provides cost optimization recommendations?',
                    options: [
                        'AWS CloudTrail',
                        'AWS Trusted Advisor',
                        'Amazon CloudWatch',
                        'AWS Config'
                    ],
                    correct: 1,
                    explanation: 'AWS Trusted Advisor provides real-time guidance including cost optimization recommendations to help reduce costs.'
                },
                {
                    id: 8,
                    question: 'What is the AWS Pricing Calculator?',
                    options: [
                        'A tool to estimate AWS costs for your use case',
                        'A payment processing tool',
                        'A monitoring service',
                        'A billing report'
                    ],
                    correct: 0,
                    explanation: 'AWS Pricing Calculator helps you estimate costs for AWS services based on your expected usage patterns.'
                },
                {
                    id: 9,
                    question: 'What are AWS Organizations volume discounts?',
                    options: [
                        'Discounts for individuals',
                        'Consolidated billing that can result in volume discounts across accounts',
                        'Discounts for small businesses only',
                        'No volume discounts available'
                    ],
                    correct: 1,
                    explanation: 'AWS Organizations allows consolidated billing, pooling usage across accounts to reach volume discount tiers faster.'
                },
                {
                    id: 10,
                    question: 'What is AWS Cost and Usage Report?',
                    options: [
                        'A summary email',
                        'The most comprehensive set of cost and usage data available',
                        'A monthly invoice',
                        'A cost prediction tool'
                    ],
                    correct: 1,
                    explanation: 'AWS Cost and Usage Report provides the most comprehensive cost and usage data, including detailed line items and custom tags.'
                },
                {
                    id: 11,
                    question: 'What is included in the AWS Free Tier for EC2?',
                    options: [
                        'Unlimited instances',
                        '750 hours per month of t2.micro or t3.micro instances for 12 months',
                        'One year of any instance type',
                        'EC2 is not included in Free Tier'
                    ],
                    correct: 1,
                    explanation: 'AWS Free Tier includes 750 hours per month of Linux or Windows t2.micro (or t3.micro in some regions) instances for 12 months.'
                },
                {
                    id: 12,
                    question: 'How does AWS charge for S3?',
                    options: [
                        'Flat monthly fee',
                        'Based on storage used, requests made, and data transfer',
                        'Only based on storage used',
                        'S3 is always free'
                    ],
                    correct: 1,
                    explanation: 'S3 charges based on: storage amount (GB-month), number of requests (PUT, GET), and data transfer out of S3.'
                }
            ],
            documentation: `
                <h3>Billing & Pricing</h3>
                
                <h4>AWS Pricing Philosophy:</h4>
                <p>AWS pricing is based on three fundamental principles:</p>
                <ol>
                    <li><strong>Pay-as-you-go:</strong> Pay only for what you use, no upfront costs</li>
                    <li><strong>Save when you reserve:</strong> Get discounts by committing to usage</li>
                    <li><strong>Pay less by using more:</strong> Volume-based discounts</li>
                </ol>

                <h4>AWS Free Tier:</h4>
                <p>Three types of free offers:</p>
                <ul>
                    <li><strong>12 Months Free:</strong> Starts from sign-up date
                        <ul>
                            <li>EC2: 750 hours/month of t2.micro or t3.micro</li>
                            <li>S3: 5 GB standard storage</li>
                            <li>RDS: 750 hours/month of db.t2.micro</li>
                            <li>CloudFront: 50 GB data transfer out</li>
                        </ul>
                    </li>
                    <li><strong>Always Free:</strong> Never expires
                        <ul>
                            <li>Lambda: 1 million requests/month</li>
                            <li>DynamoDB: 25 GB storage</li>
                            <li>CloudWatch: 10 custom metrics and alarms</li>
                            <li>SNS: 1 million publishes</li>
                        </ul>
                    </li>
                    <li><strong>Trials:</strong> Short-term free usage
                        <ul>
                            <li>SageMaker: 2 months free</li>
                            <li>Inspector: 90 days free</li>
                            <li>Lightsail: 1 month free</li>
                        </ul>
                    </li>
                </ul>

                <h4>EC2 Pricing Models:</h4>
                <ul>
                    <li><strong>On-Demand:</strong> Pay by the hour or second, no commitment</li>
                    <li><strong>Reserved Instances (RI):</strong> 1 or 3-year commitment, up to 75% discount
                        <ul>
                            <li>Standard RI: Largest discount, can't change instance type</li>
                            <li>Convertible RI: Less discount, can change instance type</li>
                        </ul>
                    </li>
                    <li><strong>Savings Plans:</strong> Flexible pricing, commit to usage ($/hour) for 1 or 3 years</li>
                    <li><strong>Spot Instances:</strong> Up to 90% discount, can be interrupted</li>
                    <li><strong>Dedicated Hosts:</strong> Physical server dedicated to you, for compliance</li>
                    <li><strong>Dedicated Instances:</strong> Instances on hardware dedicated to you</li>
                </ul>

                <h4>Cost Management Tools:</h4>
                <ul>
                    <li><strong>AWS Cost Explorer:</strong>
                        <ul>
                            <li>Visualize and analyze costs</li>
                            <li>View past 12 months and forecast next 12 months</li>
                            <li>Filter by service, region, tag, etc.</li>
                            <li>Identify cost trends and anomalies</li>
                        </ul>
                    </li>
                    <li><strong>AWS Budgets:</strong>
                        <ul>
                            <li>Set custom cost and usage budgets</li>
                            <li>Alerts when exceeding or forecasted to exceed</li>
                            <li>Track Reserved Instance utilization</li>
                            <li>Budget types: Cost, Usage, RI Utilization, RI Coverage</li>
                        </ul>
                    </li>
                    <li><strong>AWS Cost and Usage Report:</strong>
                        <ul>
                            <li>Most comprehensive cost data</li>
                            <li>Hourly, daily, or monthly granularity</li>
                            <li>Delivered to S3</li>
                            <li>Can be analyzed with Athena or QuickSight</li>
                        </ul>
                    </li>
                    <li><strong>AWS Pricing Calculator:</strong>
                        <ul>
                            <li>Estimate costs before provisioning</li>
                            <li>Configure services and view price estimates</li>
                            <li>Save and share estimates</li>
                        </ul>
                    </li>
                </ul>

                <h4>AWS Organizations and Billing:</h4>
                <ul>
                    <li><strong>Consolidated Billing:</strong>
                        <ul>
                            <li>Single bill for multiple accounts</li>
                            <li>Combined usage for volume discounts</li>
                            <li>Free feature of AWS Organizations</li>
                            <li>Easy tracking of charges</li>
                        </ul>
                    </li>
                    <li><strong>Volume Discounts:</strong>
                        <ul>
                            <li>S3: Pay less per GB as usage increases</li>
                            <li>Data Transfer: Tiered pricing</li>
                            <li>Pooled usage across accounts</li>
                        </ul>
                    </li>
                </ul>

                <h4>AWS Support Plans and Pricing:</h4>
                <ul>
                    <li><strong>Basic:</strong> Free
                        <ul>
                            <li>Customer Service, documentation, forums</li>
                            <li>AWS Trusted Advisor (7 core checks)</li>
                            <li>AWS Personal Health Dashboard</li>
                        </ul>
                    </li>
                    <li><strong>Developer:</strong> $29/month or 3% of monthly usage
                        <ul>
                            <li>Business hours email access to Cloud Support Associates</li>
                            <li>12-24 hour response time</li>
                        </ul>
                    </li>
                    <li><strong>Business:</strong> $100/month or 3-10% of monthly usage
                        <ul>
                            <li>24/7 phone, email, and chat support</li>
                            <li>Full Trusted Advisor checks</li>
                            <li>1-hour response for urgent issues</li>
                        </ul>
                    </li>
                    <li><strong>Enterprise:</strong> $15,000/month or 3-10% of monthly usage
                        <ul>
                            <li>Technical Account Manager (TAM)</li>
                            <li>Concierge Support Team</li>
                            <li>15-minute response for critical issues</li>
                            <li>Infrastructure Event Management</li>
                        </ul>
                    </li>
                </ul>

                <h4>Cost Optimization Best Practices:</h4>
                <ol>
                    <li><strong>Right-sizing:</strong> Use appropriate instance types</li>
                    <li><strong>Use Reserved Instances/Savings Plans:</strong> For predictable workloads</li>
                    <li><strong>Use Spot Instances:</strong> For fault-tolerant workloads</li>
                    <li><strong>Monitor and analyze:</strong> Use Cost Explorer and Budgets</li>
                    <li><strong>Set budgets and alerts:</strong> Prevent unexpected costs</li>
                    <li><strong>Delete unused resources:</strong> Stop idle instances, delete unused snapshots</li>
                    <li><strong>Use Auto Scaling:</strong> Scale resources based on demand</li>
                    <li><strong>Choose the right storage class:</strong> S3 Glacier for archives</li>
                    <li><strong>Use AWS Trusted Advisor:</strong> Follow cost optimization recommendations</li>
                    <li><strong>Leverage tags:</strong> Track costs by project, department, etc.</li>
                </ol>

                <h4>AWS Pricing Examples:</h4>
                <ul>
                    <li><strong>Amazon S3:</strong> Storage (per GB/month) + Requests (per 1,000) + Data Transfer Out</li>
                    <li><strong>Amazon EC2:</strong> Instance hours + Data Transfer + EBS Storage</li>
                    <li><strong>Amazon RDS:</strong> Instance hours + Storage + Backup Storage + Data Transfer</li>
                    <li><strong>Lambda:</strong> Requests (per million) + Duration (per GB-second)</li>
                    <li><strong>CloudFront:</strong> Data Transfer Out + HTTP/HTTPS Requests</li>
                </ul>

                <h4>AWS TCO (Total Cost of Ownership) Calculator:</h4>
                <p>Compare costs of running infrastructure on-premises vs AWS:</p>
                <ul>
                    <li>Server costs</li>
                    <li>Storage costs</li>
                    <li>Network costs</li>
                    <li>IT labor costs</li>
                    <li>Facility costs (power, cooling, space)</li>
                </ul>
            `,
            followUpQuestions: [
                {
                    question: 'Which pricing model offers up to 75% discount for a 1 or 3-year commitment?',
                    options: ['On-Demand', 'Reserved Instances', 'Spot Instances', 'Dedicated Hosts'],
                    correct: 1
                },
                {
                    question: 'What tool helps you set cost and usage budgets with alerts?',
                    options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS CloudWatch', 'AWS CloudTrail'],
                    correct: 1
                },
                {
                    question: 'How many free hours of Lambda requests are included in the Always Free tier?',
                    options: ['100,000', '500,000', '1 million', 'Unlimited'],
                    correct: 2
                },
                {
                    question: 'What is the AWS support plan that provides 24/7 phone support?',
                    options: ['Basic', 'Developer', 'Business', 'Free'],
                    correct: 2
                },
                {
                    question: 'Which feature of AWS Organizations helps achieve volume discounts?',
                    options: ['Service Control Policies', 'Consolidated Billing', 'Account creation', 'Organizational Units'],
                    correct: 1
                }
            ]
        },
        {
            id: 'management-governance',
            title: 'Management & Governance',
            icon: '⚙️',
            description: 'Learn about AWS management tools, monitoring, and operational best practices',
            questions: [
                {
                    id: 1,
                    question: 'What is AWS CloudFormation?',
                    options: [
                        'A monitoring service',
                        'Infrastructure as Code service for provisioning resources using templates',
                        'A database service',
                        'A security service'
                    ],
                    correct: 1,
                    explanation: 'AWS CloudFormation allows you to model and provision AWS resources using templates (Infrastructure as Code).'
                },
                {
                    id: 2,
                    question: 'What is Amazon CloudWatch?',
                    options: [
                        'A security service',
                        'A monitoring and observability service for AWS resources and applications',
                        'A storage service',
                        'A database service'
                    ],
                    correct: 1,
                    explanation: 'Amazon CloudWatch monitors AWS resources and applications, collecting and tracking metrics, logs, and events.'
                },
                {
                    id: 3,
                    question: 'What does AWS Systems Manager provide?',
                    options: [
                        'Only monitoring capabilities',
                        'Operational insights and management capabilities for AWS resources',
                        'Only backup services',
                        'Only security features'
                    ],
                    correct: 1,
                    explanation: 'AWS Systems Manager provides operational data, automates tasks, and helps manage EC2 instances and on-premises servers.'
                },
                {
                    id: 4,
                    question: 'What is AWS Config?',
                    options: [
                        'A compute service',
                        'A service that tracks resource configurations and changes over time',
                        'A storage service',
                        'A networking service'
                    ],
                    correct: 1,
                    explanation: 'AWS Config continuously monitors and records AWS resource configurations and allows you to assess compliance.'
                },
                {
                    id: 5,
                    question: 'What is AWS CloudTrail used for?',
                    options: [
                        'Monitoring application performance',
                        'Logging and monitoring API calls and account activity',
                        'Managing databases',
                        'Storing files'
                    ],
                    correct: 1,
                    explanation: 'AWS CloudTrail logs API calls and account activity, providing audit trails for governance, compliance, and operational auditing.'
                },
                {
                    id: 6,
                    question: 'What is AWS Trusted Advisor?',
                    options: [
                        'A database optimization tool',
                        'A service providing real-time guidance on AWS best practices',
                        'A code deployment tool',
                        'A storage service'
                    ],
                    correct: 1,
                    explanation: 'AWS Trusted Advisor provides real-time guidance to help you provision resources following AWS best practices.'
                },
                {
                    id: 7,
                    question: 'What are the five categories of Trusted Advisor checks?',
                    options: [
                        'Security, Storage, Database, Network, Compute',
                        'Cost Optimization, Performance, Security, Fault Tolerance, Service Limits',
                        'Monitoring, Logging, Backup, Recovery, Compliance',
                        'Identity, Access, Network, Application, Data'
                    ],
                    correct: 1,
                    explanation: 'Trusted Advisor checks five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits.'
                },
                {
                    id: 8,
                    question: 'What is AWS Organizations used for?',
                    options: [
                        'Monitoring resources',
                        'Centrally managing and governing multiple AWS accounts',
                        'Deploying applications',
                        'Storing data'
                    ],
                    correct: 1,
                    explanation: 'AWS Organizations helps you centrally manage and govern your environment as you scale AWS resources.'
                },
                {
                    id: 9,
                    question: 'What is AWS Service Catalog?',
                    options: [
                        'A list of all AWS services',
                        'A service to create and manage catalogs of approved IT services',
                        'A pricing tool',
                        'A monitoring service'
                    ],
                    correct: 1,
                    explanation: 'AWS Service Catalog allows organizations to create and manage catalogs of IT services approved for use on AWS.'
                },
                {
                    id: 10,
                    question: 'What is AWS Personal Health Dashboard?',
                    options: [
                        'A fitness tracking app',
                        'A dashboard providing alerts and guidance when AWS events might affect your resources',
                        'A cost monitoring tool',
                        'A security tool'
                    ],
                    correct: 1,
                    explanation: 'AWS Personal Health Dashboard provides alerts and remediation guidance when AWS events might impact your specific resources.'
                },
                {
                    id: 11,
                    question: 'What is AWS Control Tower?',
                    options: [
                        'A monitoring tower',
                        'A service to set up and govern a secure, multi-account AWS environment',
                        'A networking service',
                        'A storage service'
                    ],
                    correct: 1,
                    explanation: 'AWS Control Tower provides the easiest way to set up and govern a secure, multi-account AWS environment based on best practices.'
                },
                {
                    id: 12,
                    question: 'What is Amazon EventBridge?',
                    options: [
                        'A database service',
                        'A serverless event bus for connecting applications using events',
                        'A storage service',
                        'A compute service'
                    ],
                    correct: 1,
                    explanation: 'Amazon EventBridge is a serverless event bus that makes it easy to connect applications using data from your own apps, SaaS, and AWS services.'
                }
            ],
            documentation: `
                <h3>Management & Governance</h3>
                
                <h4>Infrastructure as Code:</h4>
                <ul>
                    <li><strong>AWS CloudFormation:</strong>
                        <ul>
                            <li>Define infrastructure using templates (JSON or YAML)</li>
                            <li>Version control your infrastructure</li>
                            <li>Automate resource provisioning</li>
                            <li>Create stacks from templates</li>
                            <li>Update and delete stacks as a single unit</li>
                            <li>No additional charge (pay for resources created)</li>
                        </ul>
                    </li>
                    <li><strong>AWS CDK (Cloud Development Kit):</strong>
                        <ul>
                            <li>Define infrastructure using programming languages</li>
                            <li>Supports TypeScript, Python, Java, C#</li>
                            <li>Synthesizes to CloudFormation templates</li>
                        </ul>
                    </li>
                </ul>

                <h4>Monitoring and Observability:</h4>
                <ul>
                    <li><strong>Amazon CloudWatch:</strong>
                        <ul>
                            <li><strong>Metrics:</strong> Monitor resource performance (CPU, disk, network)</li>
                            <li><strong>Alarms:</strong> Automatically respond to changes (scale, notifications)</li>
                            <li><strong>Logs:</strong> Centralized log storage and analysis</li>
                            <li><strong>Events:</strong> Respond to state changes (now EventBridge)</li>
                            <li><strong>Dashboards:</strong> Visualize metrics and logs</li>
                            <li><strong>Insights:</strong> Analyze and visualize log data</li>
                        </ul>
                    </li>
                    <li><strong>AWS CloudTrail:</strong>
                        <ul>
                            <li>Records API calls and account activity</li>
                            <li>Who, what, when, where for AWS API calls</li>
                            <li>Stores logs in S3</li>
                            <li>Enables security analysis and compliance auditing</li>
                            <li>Can send to CloudWatch Logs</li>
                        </ul>
                    </li>
                    <li><strong>AWS X-Ray:</strong>
                        <ul>
                            <li>Analyzes and debugs distributed applications</li>
                            <li>Traces requests through your application</li>
                            <li>Identifies performance bottlenecks</li>
                        </ul>
                    </li>
                </ul>

                <h4>Configuration and Compliance:</h4>
                <ul>
                    <li><strong>AWS Config:</strong>
                        <ul>
                            <li>Tracks resource configurations over time</li>
                            <li>Records configuration changes</li>
                            <li>Evaluates compliance with Config Rules</li>
                            <li>View configuration history</li>
                            <li>Send notifications when resources are non-compliant</li>
                        </ul>
                    </li>
                    <li><strong>AWS Systems Manager:</strong>
                        <ul>
                            <li><strong>Session Manager:</strong> Secure shell access without SSH keys</li>
                            <li><strong>Parameter Store:</strong> Store configuration data and secrets</li>
                            <li><strong>Patch Manager:</strong> Automate patching</li>
                            <li><strong>Run Command:</strong> Execute commands remotely</li>
                            <li><strong>State Manager:</strong> Maintain consistent configuration</li>
                            <li><strong>Inventory:</strong> Collect metadata from instances</li>
                        </ul>
                    </li>
                </ul>

                <h4>Best Practice Guidance:</h4>
                <ul>
                    <li><strong>AWS Trusted Advisor:</strong>
                        <ul>
                            <li><strong>Cost Optimization:</strong> Unused resources, idle instances</li>
                            <li><strong>Performance:</strong> High utilization, throughput</li>
                            <li><strong>Security:</strong> Security groups, IAM use, MFA</li>
                            <li><strong>Fault Tolerance:</strong> Backups, multi-AZ, snapshots</li>
                            <li><strong>Service Limits:</strong> Usage approaching limits</li>
                            <li>Basic support: 7 core checks</li>
                            <li>Business/Enterprise support: All checks</li>
                        </ul>
                    </li>
                    <li><strong>AWS Well-Architected Tool:</strong>
                        <ul>
                            <li>Review workloads against best practices</li>
                            <li>Based on Well-Architected Framework</li>
                            <li>Free to use</li>
                            <li>Generates improvement plan</li>
                        </ul>
                    </li>
                </ul>

                <h4>Multi-Account Management:</h4>
                <ul>
                    <li><strong>AWS Organizations:</strong>
                        <ul>
                            <li>Centrally manage multiple AWS accounts</li>
                            <li>Consolidated billing</li>
                            <li>Hierarchical account structure (OUs)</li>
                            <li><strong>Service Control Policies (SCPs):</strong> Central access control</li>
                            <li>Automate account creation</li>
                            <li>Free service</li>
                        </ul>
                    </li>
                    <li><strong>AWS Control Tower:</strong>
                        <ul>
                            <li>Set up multi-account environment with best practices</li>
                            <li>Built on AWS Organizations</li>
                            <li>Guardrails for governance</li>
                            <li>Account Factory for provisioning</li>
                            <li>Dashboard for visibility</li>
                        </ul>
                    </li>
                </ul>

                <h4>Service Management:</h4>
                <ul>
                    <li><strong>AWS Service Catalog:</strong>
                        <ul>
                            <li>Create and manage approved IT service catalogs</li>
                            <li>Centrally manage commonly deployed services</li>
                            <li>Enforce standards and compliance</li>
                            <li>Users can self-service provision</li>
                        </ul>
                    </li>
                    <li><strong>AWS License Manager:</strong>
                        <ul>
                            <li>Manage licenses from vendors (Microsoft, Oracle, SAP)</li>
                            <li>Set licensing rules</li>
                            <li>Track license usage</li>
                        </ul>
                    </li>
                </ul>

                <h4>Automation and Operations:</h4>
                <ul>
                    <li><strong>AWS OpsWorks:</strong>
                        <ul>
                            <li>Configuration management using Chef or Puppet</li>
                            <li>Automate server configuration</li>
                            <li>Deploy applications</li>
                        </ul>
                    </li>
                    <li><strong>Amazon EventBridge:</strong>
                        <ul>
                            <li>Serverless event bus</li>
                            <li>Connect applications using events</li>
                            <li>Event patterns and scheduled events</li>
                            <li>Route events to Lambda, SNS, SQS, etc.</li>
                        </ul>
                    </li>
                </ul>

                <h4>Health and Support:</h4>
                <ul>
                    <li><strong>AWS Personal Health Dashboard:</strong>
                        <ul>
                            <li>Personalized view of AWS service health</li>
                            <li>Alerts when AWS events affect your resources</li>
                            <li>Proactive notifications</li>
                            <li>Remediation guidance</li>
                        </ul>
                    </li>
                    <li><strong>AWS Service Health Dashboard:</strong>
                        <ul>
                            <li>General status of AWS services</li>
                            <li>Public view of service availability</li>
                            <li>Historical information</li>
                        </ul>
                    </li>
                </ul>

                <h4>Tags and Resource Groups:</h4>
                <ul>
                    <li><strong>Tags:</strong>
                        <ul>
                            <li>Key-value pairs for organizing resources</li>
                            <li>Track costs by project, department, environment</li>
                            <li>Enforce tagging policies</li>
                            <li>Automate operations based on tags</li>
                        </ul>
                    </li>
                    <li><strong>Resource Groups:</strong>
                        <ul>
                            <li>Organize resources by tags</li>
                            <li>Manage and automate tasks on multiple resources</li>
                            <li>View and manage grouped resources</li>
                        </ul>
                    </li>
                </ul>

                <h4>Deployment and Change Management:</h4>
                <ul>
                    <li><strong>AWS CodePipeline:</strong> CI/CD service</li>
                    <li><strong>AWS CodeDeploy:</strong> Automated deployments</li>
                    <li><strong>AWS CodeBuild:</strong> Build and test code</li>
                    <li><strong>AWS CodeCommit:</strong> Git repositories</li>
                </ul>

                <h4>Management Best Practices:</h4>
                <ol>
                    <li>Use Infrastructure as Code for consistency</li>
                    <li>Enable comprehensive monitoring and logging</li>
                    <li>Implement automation to reduce manual work</li>
                    <li>Use tags consistently for organization</li>
                    <li>Set up CloudTrail for audit trails</li>
                    <li>Regular reviews with Trusted Advisor</li>
                    <li>Use AWS Organizations for multi-account strategy</li>
                    <li>Implement alerts for critical events</li>
                </ol>
            `,
            followUpQuestions: [
                {
                    question: 'Which service allows you to define infrastructure using templates?',
                    options: ['AWS Lambda', 'AWS CloudFormation', 'Amazon S3', 'Amazon RDS'],
                    correct: 1
                },
                {
                    question: 'What are the five categories of AWS Trusted Advisor checks?',
                    options: ['Security, Compliance, Monitoring, Logging, Backup', 'Cost Optimization, Performance, Security, Fault Tolerance, Service Limits', 'Compute, Storage, Database, Network, Application', 'Identity, Access, Data, Infrastructure, Applications'],
                    correct: 1
                },
                {
                    question: 'Which service logs API calls and account activity?',
                    options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS Config', 'AWS X-Ray'],
                    correct: 1
                },
                {
                    question: 'What does AWS Organizations provide?',
                    options: ['Single account management', 'Centralized multi-account management', 'Monitoring only', 'Storage services'],
                    correct: 1
                },
                {
                    question: 'Which service helps set up a multi-account environment with best practices?',
                    options: ['AWS Organizations', 'AWS Control Tower', 'AWS CloudFormation', 'AWS Config'],
                    correct: 1
                }
            ]
        }
    ]
};
