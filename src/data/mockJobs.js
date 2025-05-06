
export const mockJobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    match: 85,
    examPattern: 'MCQ Test (React, JS - 10 bits), 1 Coding Challenge (Easy - Array Manipulation), HR Interview',
    detailedExam: {
      mcqs: { count: 10, topics: ['React Fundamentals', 'JavaScript ES6+', 'CSS Flexbox/Grid'] },
      coding: { count: 1, difficulty: 'Easy', topic: 'Array Manipulation (e.g., find duplicates, sort specific ways)'},
      interview: 'Standard HR behavioral questions and project discussion.'
    },
    test: {
      durationMinutes: 30,
      questions: [
        { id: 'q1fe', text: 'What is JSX?', options: [{id: 'opt1', text: 'JavaScript XML'}, {id: 'opt2', text: 'JavaScript Extension'}, {id: 'opt3', text: 'JSON Syntax'}], correctAnswer: 'opt1' },
        { id: 'q2fe', text: 'Which hook is used for state management in functional components?', options: [{id: 'opt1', text: 'useEffect'}, {id: 'opt2', text: 'useState'}, {id: 'opt3', text: 'useContext'}], correctAnswer: 'opt2' },
        { id: 'q3fe', text: 'How do you pass data from parent to child component?', options: [{id: 'opt1', text: 'State'}, {id: 'opt2', text: 'Context API'}, {id: 'opt3', text: 'Props'}], correctAnswer: 'opt3' },
        { id: 'q4fe', text: 'What does `Array.prototype.map()` return?', options: [{id: 'opt1', text: 'A new array'}, {id: 'opt2', text: 'The original array, modified'}, {id: 'opt3', text: 'Nothing'}], correctAnswer: 'opt1' },
        { id: 'q5fe', text: 'Which CSS property is used for flexbox layout?', options: [{id: 'opt1', text: 'grid'}, {id: 'opt2', text: 'flex'}, {id: 'opt3', text: 'position'}], correctAnswer: 'opt2' },
        { id: 'q6fe', text: 'What is `===` operator in JavaScript?', options: [{id: 'opt1', text: 'Loose equality'}, {id: 'opt2', text: 'Strict equality (value and type)'}, {id: 'opt3', text: 'Assignment'}], correctAnswer: 'opt2' },
        { id: 'q7fe', text: 'What is the virtual DOM?', options: [{id: 'opt1', text: 'A direct representation of the actual DOM'}, {id: 'opt2', text: 'A lightweight copy of the DOM in memory'}, {id: 'opt3', text: 'A server-side DOM'}], correctAnswer: 'opt2' },
        { id: 'q8fe', text: 'How can you prevent default behavior of an event?', options: [{id: 'opt1', text: 'event.stop()'}, {id: 'opt2', text: 'event.preventDefault()'}, {id: 'opt3', text: 'event.cancel()'}], correctAnswer: 'opt2' },
        { id: 'q9fe', text: 'What is a closure in JavaScript?', options: [{id: 'opt1', text: 'A function having access to its own scope'}, {id: 'opt2', text: 'A function having access to the parent scope, even after the parent function has closed'}, {id: 'opt3', text: 'A way to close a program'}], correctAnswer: 'opt2' },
        { id: 'q10fe', text: 'Which of these is NOT a JavaScript data type?', options: [{id: 'opt1', text: 'Number'}, {id: 'opt2', text: 'Character'}, {id: 'opt3', text: 'Boolean'}], correctAnswer: 'opt2' },
      ],
      codingQuestion: {
        title: 'Find the Maximum Value in an Array',
        description: 'Write a JavaScript function that takes an array of numbers as input and returns the maximum value in that array. If the array is empty, return null.',
      }
    }
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'Creative Minds Agency',
    match: 70,
    examPattern: 'Portfolio Review, 1 Design Task (10 key screens), Presentation, Manager Interview',
    detailedExam: {
      portfolio: 'Review of 3-5 key projects, focusing on process and impact.',
      designTask: { count: 1, scope: '10 key screens for a mobile app concept', tools: 'Figma/Adobe XD preferred'},
      presentation: 'Present design task solution and one portfolio piece.',
      interview: 'Discussion on design philosophy and team collaboration.'
    },
    test: {
      durationMinutes: 20,
      questions: [
        { id: 'q1ux', text: 'What is User Persona?', options: [{id: 'opt1', text: 'A real user'}, {id: 'opt2', text: 'A fictional character representing a target user group'}, {id: 'opt3', text: 'A user testing script'}], correctAnswer: 'opt2' },
        { id: 'q2ux', text: 'What is the main goal of A/B testing?', options: [{id: 'opt1', text: 'To test all features at once'}, {id: 'opt2', text: 'To compare two versions of a design to see which performs better'}, {id: 'opt3', text: 'To gather user feedback on a single design'}], correctAnswer: 'opt2' },
        { id: 'q3ux', text: 'Which of these is a common UI design tool?', options: [{id: 'opt1', text: 'Photoshop'}, {id: 'opt2', text: 'Figma'}, {id: 'opt3', text: 'Illustrator'}], correctAnswer: 'opt2' },
        { id: 'q4ux', text: 'What does "heuristic evaluation" involve?', options: [{id: 'opt1', text: 'Testing with real users'}, {id: 'opt2', text: 'Experts judging a design against usability principles'}, {id: 'opt3', text: 'Analyzing website traffic'}], correctAnswer: 'opt2' },
        { id: 'q5ux', text: 'What is information architecture?', options: [{id: 'opt1', text: 'The visual design of a website'}, {id: 'opt2', text: 'The structural design of shared information environments'}, {id: 'opt3', text: 'The backend database structure'}], correctAnswer: 'opt2' },
        { id: 'q6ux', text: 'What is a wireframe?', options: [{id: 'opt1', text: 'A high-fidelity visual mockup'}, {id: 'opt2', text: 'A basic visual guide for structure and layout'}, {id: 'opt3', text: 'A user flow diagram'}], correctAnswer: 'opt2' },
        { id: 'q7ux', text: 'Accessibility in UX design primarily focuses on:', options: [{id: 'opt1', text: 'Making designs visually appealing'}, {id: 'opt2', text: 'Ensuring designs can be used by people with disabilities'}, {id: 'opt3', text: 'Optimizing for search engines'}], correctAnswer: 'opt2' },
        { id: 'q8ux', text: 'What is "User Journey Mapping"?', options: [{id: 'opt1', text: 'A map of the office layout'}, {id: 'opt2', text: 'Visualizing the user\'s experience and interactions with a product'}, {id: 'opt3', text: 'A list of user requirements'}], correctAnswer: 'opt2' },
        { id: 'q9ux', text: 'Which color is often associated with trust and dependability?', options: [{id: 'opt1', text: 'Red'}, {id: 'opt2', text: 'Yellow'}, {id: 'opt3', text: 'Blue'}], correctAnswer: 'opt3' },
        { id: 'q10ux', text: 'What is "Gestalt Principles" in design?', options: [{id: 'opt1', text: 'Principles of typography'}, {id: 'opt2', text: 'Principles of how humans perceive visual elements'}, {id: 'opt3', text: 'Principles of color theory'}], correctAnswer: 'opt2' },
      ],
      codingQuestion: {
        title: 'Critique a UI Element',
        description: 'Choose a common UI element (e.g., a login button, a search bar) from a popular app or website. Briefly describe its purpose, list 2-3 things it does well, and suggest 1-2 areas for improvement. Explain your reasoning.',
      }
    }
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'Data Insights Co.',
    match: 92,
    examPattern: 'SQL Test (10 bits), Python Test (Pandas - 10 bits), 1 Case Study, Technical Interview',
    detailedExam: {
      sql: { count: 10, topics: ['Joins', 'Window Functions', 'Aggregations'] },
      python: { count: 10, topics: ['Pandas DataFrame manipulation', 'Numpy basics'] },
      caseStudy: { count: 1, type: 'Business problem requiring data interpretation and solution proposal' },
      interview: 'Deep dive into SQL/Python skills and statistical concepts.'
    },
    test: {
        durationMinutes: 45,
        questions: [
            { id: 'q1da', text: 'Which SQL keyword is used to retrieve data from a database?', options: [{id: 'opt1', text: 'GET'}, {id: 'opt2', text: 'SELECT'}, {id: 'opt3', text: 'RETRIEVE'}], correctAnswer: 'opt2' },
            { id: 'q2da', text: 'What is the primary use of the Pandas library in Python?', options: [{id: 'opt1', text: 'Web development'}, {id: 'opt2', text: 'Data manipulation and analysis'}, {id: 'opt3', text: 'Machine learning model creation'}], correctAnswer: 'opt2' },
            { id: 'q3da', text: 'Which SQL clause is used to filter results?', options: [{id: 'opt1', text: 'FILTER BY'}, {id: 'opt2', text: 'CONDITION'}, {id: 'opt3', text: 'WHERE'}], correctAnswer: 'opt3' },
            { id: 'q4da', text: 'In Pandas, what is a DataFrame?', options: [{id: 'opt1', text: 'A one-dimensional array'}, {id: 'opt2', text: 'A two-dimensional labeled data structure with columns of potentially different types'}, {id: 'opt3', text: 'A Python function for data cleaning'}], correctAnswer: 'opt2' },
            { id: 'q5da', text: 'What does SQL stand for?', options: [{id: 'opt1', text: 'Structured Query Language'}, {id: 'opt2', text: 'Simple Query Language'}, {id: 'opt3', text: 'Standard Question Language'}], correctAnswer: 'opt1' },
            { id: 'q6da', text: 'Which type of JOIN returns all rows when there is a match in EITHER the left or right table?', options: [{id: 'opt1', text: 'INNER JOIN'}, {id: 'opt2', text: 'LEFT JOIN'}, {id: 'opt3', text: 'FULL OUTER JOIN'}], correctAnswer: 'opt3' },
            { id: 'q7da', text: 'What function in Pandas is used to read a CSV file?', options: [{id: 'opt1', text: 'pd.open_csv()'}, {id: 'opt2', text: 'pd.read_csv()'}, {id: 'opt3', text: 'pd.load_csv()'}], correctAnswer: 'opt2' },
            { id: 'q8da', text: 'Which SQL aggregate function returns the number of rows?', options: [{id: 'opt1', text: 'SUM()'}, {id: 'opt2', text: 'COUNT()'}, {id: 'opt3', text: 'AVG()'}], correctAnswer: 'opt2' },
            { id: 'q9da', text: 'What is data normalization?', options: [{id: 'opt1', text: 'Making all data values numeric'}, {id: 'opt2', text: 'Organizing data in a database to reduce redundancy and improve data integrity'}, {id: 'opt3', text: 'Visualizing data in a normal distribution curve'}], correctAnswer: 'opt2' },
            { id: 'q10da', text: 'In Python, how do you select a single column "Age" from a Pandas DataFrame named `df`?', options: [{id: 'opt1', text: 'df.column("Age")'}, {id: 'opt2', text: 'df["Age"]'}, {id: 'opt3', text: 'df.get("Age")'}], correctAnswer: 'opt2' },
        ],
        codingQuestion: {
            title: 'Calculate Average Age (SQL)',
            description: 'Given a table named `Users` with columns `UserID` (integer) and `Age` (integer), write an SQL query to calculate the average age of all users in the table.',
        }
    }
  },
  {
    id: 4,
    title: 'Backend Developer (Node.js)',
    company: 'Innovatech Ltd.',
    match: 78,
    examPattern: 'MCQ Test (Node.js, Express - 10 bits), 1 Coding Challenge (Medium - API development), System Design Interview',
    detailedExam: {
      mcqs: { count: 10, topics: ['Node.js event loop', 'Express middleware', 'Async patterns'] },
      coding: { count: 1, difficulty: 'Medium', topic: 'Develop a REST API endpoint with DB interaction (mocked)'},
      interview: 'Discussion on system design principles (scalability, reliability) and past backend projects.'
    },
    test: {
        durationMinutes: 40,
        questions: [
            { id: 'q1be', text: 'What is Node.js?', options: [{id: 'opt1', text: 'A frontend JavaScript framework'}, {id: 'opt2', text: 'A JavaScript runtime built on Chrome\'s V8 engine'}, {id: 'opt3', text: 'A database management system'}], correctAnswer: 'opt2' },
            { id: 'q2be', text: 'What is Express.js?', options: [{id: 'opt1', text: 'A Node.js templating engine'}, {id: 'opt2', text: 'A minimal and flexible Node.js web application framework'}, {id: 'opt3', text: 'A JavaScript testing library'}], correctAnswer: 'opt2' },
            { id: 'q3be', text: 'What is the purpose of `npm`?', options: [{id: 'opt1', text: 'Node Project Manager'}, {id: 'opt2', text: 'Node Package Manager'}, {id: 'opt3', text: 'New Project Maker'}], correctAnswer: 'opt2' },
            { id: 'q4be', text: 'What is middleware in Express?', options: [{id: 'opt1', text: 'Functions that have access to the request object (req), the response object (res), and the next middleware function'}, {id: 'opt2', text: 'A database connector'}, {id: 'opt3', text: 'A type of error'}], correctAnswer: 'opt1' },
            { id: 'q5be', text: 'How does Node.js handle asynchronous operations?', options: [{id: 'opt1', text: 'Using multi-threading'}, {id: 'opt2', text: 'Using an event loop and callback functions/promises/async-await'}, {id: 'opt3', text: 'By blocking execution until the operation completes'}], correctAnswer: 'opt2' },
            { id: 'q6be', text: 'What is REST?', options: [{id: 'opt1', text: 'A programming language'}, {id: 'opt2', text: 'An architectural style for distributed hypermedia systems'}, {id: 'opt3', text: 'A database query language'}], correctAnswer: 'opt2' },
            { id: 'q7be', text: 'Which HTTP method is typically used for creating a new resource?', options: [{id: 'opt1', text: 'GET'}, {id: 'opt2', text: 'PUT'}, {id: 'opt3', text: 'POST'}], correctAnswer: 'opt3' },
            { id: 'q8be', text: 'What is the `package.json` file used for?', options: [{id: 'opt1', text: 'Storing application code'}, {id: 'opt2', text: 'Defining project properties, dependencies, and scripts'}, {id: 'opt3', text: 'Configuring the web server'}], correctAnswer: 'opt2' },
            { id: 'q9be', text: 'What is an API endpoint?', options: [{id: 'opt1', text: 'The start of an API request'}, {id: 'opt2', text: 'A specific URL where an API can be accessed to perform an operation'}, {id: 'opt3', text: 'The API documentation'}], correctAnswer: 'opt2' },
            { id: 'q10be', text: 'What is `module.exports` in Node.js?', options: [{id: 'opt1', text: 'A way to import modules'}, {id: 'opt2', text: 'An object that is exposed by a module and can be imported by other modules'}, {id: 'opt3', text: 'A command to run a module'}], correctAnswer: 'opt2' },
        ],
        codingQuestion: {
            title: 'Simple Express GET Route',
            description: 'Write a simple Express.js GET route that responds with "Hello, World!" when accessed at the path `/greeting`. Assume Express is already required and an app instance is created.',
        }
    }
  },
  {
    id: 5,
    title: 'Cloud Engineer (AWS)',
    company: 'SkyHigh Cloud Services',
    match: 88,
    examPattern: 'AWS Services MCQ (10 bits), 1 Practical Scenario (IaC with CloudFormation/Terraform), Behavioral Interview',
    detailedExam: {
      mcqs: { count: 10, topics: ['EC2, S3, IAM', 'VPC Networking', 'Lambda'] },
      practical: { count: 1, type: 'Infrastructure as Code task (e.g., deploy a simple web app infrastructure)'},
      interview: 'Focus on AWS best practices, security, and problem-solving scenarios.'
    },
    test: {
        durationMinutes: 35,
        questions: [
            { id: 'q1ce', text: 'What is AWS EC2?', options: [{id: 'opt1', text: 'A storage service'}, {id: 'opt2', text: 'A service that provides resizable compute capacity in the cloud'}, {id: 'opt3', text: 'A database service'}], correctAnswer: 'opt2' },
            { id: 'q2ce', text: 'What is AWS S3 primarily used for?', options: [{id: 'opt1', text: 'Running applications'}, {id: 'opt2', text: 'Object storage'}, {id: 'opt3', text: 'Virtual networking'}], correctAnswer: 'opt2' },
            { id: 'q3ce', text: 'Which AWS service is used for managing user access and permissions?', options: [{id: 'opt1', text: 'AWS Config'}, {id: 'opt2', text: 'AWS IAM (Identity and Access Management)'}, {id: 'opt3', text: 'AWS Shield'}], correctAnswer: 'opt2' },
            { id: 'q4ce', text: 'What is a VPC in AWS?', options: [{id: 'opt1', text: 'Virtual Private Cloud - a logically isolated section of the AWS Cloud'}, {id: 'opt2', text: 'Virtual Public Content'}, {id: 'opt3', text: 'Volatile Processing Center'}], correctAnswer: 'opt1' },
            { id: 'q5ce', text: 'What is AWS Lambda?', options: [{id: 'opt1', text: 'A container orchestration service'}, {id: 'opt2', text: 'A serverless compute service that runs your code in response to events'}, {id: 'opt3', text: 'A relational database service'}], correctAnswer: 'opt2' },
            { id: 'q6ce', text: 'What is "Infrastructure as Code" (IaC)?', options: [{id: 'opt1', text: 'Writing code for applications'}, {id: 'opt2', text: 'Managing and provisioning infrastructure through code instead of manual processes'}, {id: 'opt3', text: 'A type of cloud monitoring tool'}], correctAnswer: 'opt2' },
            { id: 'q7ce', text: 'Which AWS service is a managed relational database service?', options: [{id: 'opt1', text: 'Amazon DynamoDB'}, {id: 'opt2', text: 'Amazon RDS (Relational Database Service)'}, {id: 'opt3', text: 'Amazon Redshift'}], correctAnswer: 'opt2' },
            { id: 'q8ce', text: 'What is an AWS Region?', options: [{id: 'opt1', text: 'A single data center'}, {id: 'opt2', text: 'A geographical area where AWS clusters data centers'}, {id: 'opt3', text: 'A specific service endpoint'}], correctAnswer: 'opt2' },
            { id: 'q9ce', text: 'What is an Availability Zone (AZ) in AWS?', options: [{id: 'opt1', text: 'The same as an AWS Region'}, {id: 'opt2', text: 'One or more discrete data centers with redundant power, networking, and connectivity within an AWS Region'}, {id: 'opt3', text: 'A billing zone'}], correctAnswer: 'opt2' },
            { id: 'q10ce', text: 'Which AWS service helps in distributing incoming application traffic across multiple targets, such as EC2 instances?', options: [{id: 'opt1', text: 'AWS Direct Connect'}, {id: 'opt2', text: 'Amazon Route 53'}, {id: 'opt3', text: 'Elastic Load Balancing (ELB)'}], correctAnswer: 'opt3' },
        ],
        codingQuestion: {
            title: 'S3 Bucket Policy (Conceptual)',
            description: 'Describe a scenario where you would use an S3 bucket policy. What are the key components of an S3 bucket policy? (No actual JSON needed, just describe the purpose and components like Principal, Action, Resource, Effect).',
        }
    }
  },
  {
    id: 6,
    title: 'Software QA Engineer',
    company: 'QualityFirst Software',
    match: 65,
    examPattern: 'Testing Concepts MCQ (10 bits), 1 Test Case Writing Exercise, Automation Scripting (Basic), Final Interview',
    detailedExam: {
        mcqs: { count: 10, topics: ['Test types', 'Bug life cycle', 'Agile testing'] },
        testCase: { count: 1, scope: 'Write test cases for a given feature description' },
        automation: 'Basic scripting task (e.g., simple UI interaction with Selenium/Cypress).',
        interview: 'Discussion on testing strategies and defect reporting.',
    },
    test: {
        durationMinutes: 25,
        questions: [
            { id: 'q1qa', text: 'What is Black Box Testing?', options: [{id: 'opt1', text: 'Testing based on internal code structure'}, {id: 'opt2', text: 'Testing without knowledge of the internal workings of the application'}, {id: 'opt3', text: 'Testing performed by developers'}], correctAnswer: 'opt2' },
            { id: 'q2qa', text: 'What is the primary goal of Regression Testing?', options: [{id: 'opt1', text: 'To test new features'}, {id: 'opt2', text: 'To ensure that new code changes have not adversely affected existing features'}, {id: 'opt3', text: 'To test performance under load'}], correctAnswer: 'opt2' },
            { id: 'q3qa', text: 'Which of these is a phase in the Bug Life Cycle?', options: [{id: 'opt1', text: 'Development'}, {id: 'opt2', text: 'Open'}, {id: 'opt3', text: 'Deployment'}], correctAnswer: 'opt2' },
            { id: 'q4qa', text: 'What is "Acceptance Testing"?', options: [{id: 'opt1', text: 'Testing done by developers'}, {id: 'opt2', text: 'Formal testing conducted to determine whether a system satisfies its acceptance criteria'}, {id: 'opt3', text: 'Informal testing during development'}], correctAnswer: 'opt2' },
            { id: 'q5qa', text: 'What is a Test Case?', options: [{id: 'opt1', text: 'A summary of test results'}, {id: 'opt2', text: 'A set of conditions or variables under which a tester will determine whether a system satisfies requirements or works correctly'}, {id: 'opt3', text: 'A bug report'}], correctAnswer: 'opt2' },
            { id: 'q6qa', text: 'What is "Non-Functional Testing"?', options: [{id: 'opt1', text: 'Testing features of the software'}, {id: 'opt2', text: 'Testing aspects like performance, usability, reliability, etc.'}, {id: 'opt3', text: 'Testing that does not work'}], correctAnswer: 'opt2' },
            { id: 'q7qa', text: 'Which tool is commonly used for test automation of web applications?', options: [{id: 'opt1', text: 'JIRA'}, {id: 'opt2', text: 'Selenium'}, {id: 'opt3', text: 'Postman'}], correctAnswer: 'opt2' },
            { id: 'q8qa', text: 'What is "Smoke Testing"?', options: [{id: 'opt1', text: 'Comprehensive testing of all features'}, {id: 'opt2', text: 'A preliminary test to reveal simple failures severe enough to reject a prospective software release'}, {id: 'opt3', text: 'Testing performed in a smoky environment'}], correctAnswer: 'opt2' },
            { id: 'q9qa', text: 'What is Agile methodology in testing?', options: [{id: 'opt1', text: 'Testing only at the end of the project'}, {id: 'opt2', text: 'A testing practice that follows the principles of agile software development'}, {id: 'opt3', text: 'No testing is performed'}], correctAnswer: 'opt2' },
            { id: 'q10qa', text: 'What is a "Severity" of a bug?', options: [{id: 'opt1', text: 'The urgency to fix the bug'}, {id: 'opt2', text: 'The impact of the bug on the application'}, {id: 'opt3', text: 'The number of times the bug occurs'}], correctAnswer: 'opt2' },
        ],
        codingQuestion: {
            title: 'Write Test Cases for a Login Page',
            description: 'Consider a simple login page with a username field, a password field, and a "Login" button. List at least 5 positive and 3 negative test cases for this login functionality. Be specific.',
        }
    }
  }
];
  