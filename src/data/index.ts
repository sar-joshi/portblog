import IExperience from '../interfaces/IExperience';
import IProject from '../interfaces/IProject';
import ISkill from '../interfaces/ISkill';

export const projects: IProject[] = [
  {
    name: 'To-do: Redux vs Redux Tool Kit + React + Typescript',
    description:
      'A simple react To-Do App using React Tool Kit (RKT) and Typescript.',
    link: 'https://github.com/iamsarthakjoshi/react-redux-toolkit-typescript',
  },
  {
    name: 'Create Charts with Charts JS',
    description:
      'A simple Flask api with React UI no that generates simple charts. Application is dockerized.',
    link: 'https://github.com/iamsarthakjoshi/python-reactjs-chartjs-docker',
  },
  {
    name: 'Celery with RabbitMQ',
    description:
      'This is a simple app that demonstrates the features of Celery and Rabbitmq to manage tasks or jobs that need to be handled asynchronously maintaining the order and priority because they are long-running tasks.',
    link: 'https://github.com/iamsarthakjoshi/python-celery-rabbitmq',
  },
];

export const experience: IExperience[] = [
  {
    name: 'Sherpa Delivery Pty Ltd, Sydney & Melbourne',
    description: 'Full Stack Engineer, May 2025 - October 2025',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Worked on the successful integration of Drive Yello with the Sherpa Delivery platform.',
      'Executed the systematic migration of all active clients, delivery data and configurations, ensuring zero downtime and data integrity.',
      'Built and maintained applications based on Ruby and Ruby on Rails (RoR) framework.',
      'Enhanced end-user experience by providing real-time feedback using Hotwire and Stimulus within RoR.',
      'Took ownership of building AI-driven features such as Document Verification,  Face Recognition and Interview Reviewer, leveraging Google Document AI, Vision AI and AWS Rekognition, and OpenAI’s Models.',
      'Trained and fine-tuned Google Document AI Custom Extractor Processors to achieve high accuracy using pretrained foundation models.',
      'Optimised the usage of AI tools to reduce operational costs and improve cost-effectiveness.',
      'Code reviews, CICD workflow automation, Unit and end-to-end testing.',
      'Worked with cross-functional teams - including designers, product owners and marketing.',
      'GCP to some extent - including GKE, managing sensitive data in Secret Manager, observing logs in Logs Explorer and custom SQL queries with Looker Studio for data analysis.',
    ],
  },
  {
    name: 'Drive Yello Pty Ltd, Sydney & Melbourne',
    description: 'Full Stack Engineer, April 2021 - October 2025',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Built distributed **microservices** across Node.js, PHP and Go, applying secure coding practices and design patterns to ensure system resilience and **ISO 27001 compliance.**',
      'Developed and integrated scalable **event-driven architecture** leveraging PubNub (Pub/Sub), AWS SNS, and SQS to enable asynchronous communication and system decoupling.',
      'Implemented caching and ETL data pipelines to support near real-time courier performance dashboards and earnings insights.',
      'Continuous improvement through Agile collaboration — fostering a culture of shared responsibility, transparency, and technical excellence.',
      'Designed scalable application and infrastructure architecture to support data-intensive operations.',
      'Worked with internal teams such as design, product and marketing, and external **enterprise** clients to facilitate API integrations.',
      '**CI/CD** using **GitHub** Actions, Unit Tests, Performance Testing, Functional Testing and API Testing ',
      'Managed and executed the seamless migration of MongoDB, MySQL, and **Kubernetes** to their stable versions.',
      'Designed and built a scalable logging solution to capture all incoming application requests.',
      'Utilised AWS S3 for cost-effective log storage and integrated AWS Kinesis and Athena to enable powerful, on-demand log querying and analysis.',
    ],
  },
  {
    name: 'Core Intelligence Technologies Pty Ltd, Sydney',
    description: 'Lead Full Stack Developer, December 2019 - March 2021',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Developed API-driven microservices with security in mind.',
      'Architected and developed web applications from scratch using Python and Flask.',
      'Implemented a distributed task queue using Celery and RabbitMQ to manage asynchronous operations, significantly improving application performance and user experience.',
      'Guiding junior developers - training them to work remotely and idependently.',
      'Hand-on experience with React.JS and Redux state management.',
      'Contributed to code reviews to maintain code quality and ensure best practices.',
    ],
    achivements: [],
  },
  {
    name: 'Verscend Technologies, Kathmandu',
    description: 'Software Engineer, September 2016 - October 2018',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Developed and maintained Java applications, from building new features to testing and fixing bugs.',
      'Contributed to code reviews to maintain code quality and ensure best practices.',
      'Created an automated reporting system using Java that sent regular reports to different departments, saving them manual effort.Worked on integrating data from different sources into the main applications using an ETL tool (Oracle Data Integrator).',
      'Developed and maintained Java applications for the U.S. healthcare industry, handling the full development lifecycle from new feature creation to bug fixing, while ensuring all work was compliant with HIPAA standards.',
      'Worked effectively in an Agile/Scrum team with members in both Nepal and the US, using version control tools like Subversion/Git to collaborate on code.',
    ],
    achivements: [],
  },
  {
    name: 'nKudos Pvt Ltd, Kathmandu',
    description: 'Associate ASP.NET Developer (part-time), July 2016 - September 2016',
    link: 'https://www.linkedin.com/in/joshisarthak/',
    responsibilities: [
      'Worked on existing C# ASP.NET MVC web applications, implementing new features and fixing bugs.',
      'Developed and maintained controllers, views, and Razor-based components, ensuring clean separation of concerns under the MVC pattern.',
      'Designed and optimized SQL queries, joins, and stored procedures in Microsoft SQL Server to support backend operations.',
      'Performed code reviews, debugging, and regression testing to maintain application quality and reliability.',
      'Maintained and refactored legacy code to improve readability and performance.',
      'Documented technical changes and assisted in improving existing workflows for maintainability.',
      'Collaborated with the product team, senior developers and QA team.',
    ],
    achivements: [],
  },
];

export const skills: ISkill[] = [
  {
    name: 'Backend & Technologies',
    description:
      'RESTful APIs, Microservices, Unit/E2E Testing, CICD, Git, GitHub Actions, WebSockets, Message Queue, ELT, SSH',
    link: '',
  },
  {
    name: 'Languages',
    description: 'JS, Ruby, PHP, Familiar with - Go, Python, Typescript, Java, C#',
    link: '',
  },
  {
    name: 'Frontend',
    description:
      'React.js, Context API, Hooks, Redux, Familiar with -  Next.js, Tailwind CSS, SASS',
    link: '',
  },
  {
    name: 'Frameworks',
    description: 'Express, Node.js, RoR, Familiar with - Flask, FastAPI, Nest.js',
    link: '',
  },
  {
    name: 'Databases',
    description: 'MongoDB, MySQL, Postgres, Redis, MSSQL, SQLite',
    link: '',
  },
  {
    name: 'AI',
    description: 'LLMs, Google Document and Vision AI, AWS Rekognition, OpenAI Models, LangChain, LangSmith, PortKey',
    link: '',
  },
  {
    name: 'Infra & Cloud',
    description: 'Docker, Kubernetes, AWS (EKS, CloudFormation, Lambda, EC2, RDS, Redis, S3, SNS, Kinesis, Athena, Load Balancer), Familar with - GCP, Azure',
    link: '',
  },
];

export const aboutMe: string =
  'I enjoy building software that’s reliable, scalable, and enhanced by AI — solving real-world problems through thoughtful engineering and collaboration. I thrive in teams that share ideas openly, move fast, and care deeply about quality. With a strong focus on reliability and security, I approach every initiative as an opportunity to learn, innovate, and create lasting impact.';
export const fullName: string = 'Sarthak Joshi';
export const userExcerpt: string =
  'Full Stack Engineer';
