const questions = {
    admin: [
        { question: "What is a subnet mask?", answers: ["A network configuration parameter", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is DHCP?", answers: ["Dynamic Host Configuration Protocol", "Data Handling Control Protocol", "Digital Hypertext Communication Protocol", "Direct Hardware Control Protocol"], correct: 0 },
        { question: "What is DNS?", answers: ["Domain Name System", "Digital Network Service", "Data Network System", "Direct Name Service"], correct: 0 },
        { question: "What is a VLAN?", answers: ["Virtual Local Area Network", "Virtual Link Access Network", "Variable Local Area Network", "Virtual LAN Adapter"], correct: 0 },
        { question: "What is a firewall?", answers: ["A network security system", "A type of virus", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is NAT?", answers: ["Network Address Translation", "Network Access Technology", "Network Allocation Table", "Network Application Tool"], correct: 0 },
        { question: "What is a router?", answers: ["A device that forwards data packets", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is a switch?", answers: ["A device that connects network segments", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is an IP address?", answers: ["A unique identifier for a device on a network", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is a MAC address?", answers: ["A unique identifier assigned to network interfaces", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is a VPN?", answers: ["Virtual Private Network", "Virtual Public Network", "Variable Private Network", "Variable Public Network"], correct: 0 },
        { question: "What is a proxy server?", answers: ["A server that acts as an intermediary", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is a load balancer?", answers: ["A device that distributes network traffic", "A type of malware", "A programming language", "A hardware device"], correct: 0 },
        { question: "What is a DMZ?", answers: ["Demilitarized Zone", "Digital Management Zone", "Data Management Zone", "Direct Management Zone"], correct: 0 },
        { question: "What is a port?", answers: ["A communication endpoint", "A type of malware", "A programming language", "A hardware device"], correct: 0 }
    ],
    fullstack: [
        { question: "What is a closure in JavaScript?", answers: ["A function with preserved data", "A type of loop", "A variable scope", "A function call"], correct: 0 },
        { question: "What is React?", answers: ["A JavaScript library for building user interfaces", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is Node.js?", answers: ["A JavaScript runtime built on Chrome's V8 engine", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is Express.js?", answers: ["A web application framework for Node.js", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is MongoDB?", answers: ["A NoSQL database", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is REST?", answers: ["Representational State Transfer", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is GraphQL?", answers: ["A query language for APIs", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is a promise in JavaScript?", answers: ["An object representing eventual completion", "A type of loop", "A variable scope", "A function call"], correct: 0 },
        { question: "What is async/await?", answers: ["Syntax for handling asynchronous operations", "A type of loop", "A variable scope", "A function call"], correct: 0 },
        { question: "What is a component in React?", answers: ["A reusable piece of UI", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is JSX?", answers: ["JavaScript XML", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is middleware in Express.js?", answers: ["Functions that handle requests", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is a hook in React?", answers: ["Functions that let you use state", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is npm?", answers: ["Node Package Manager", "A type of database", "A programming language", "A server-side framework"], correct: 0 },
        { question: "What is Webpack?", answers: ["A module bundler", "A type of database", "A programming language", "A server-side framework"], correct: 0 }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.onclick = () => selectAnswer(index);
        answersContainer.appendChild(button);
    });
}

function selectAnswer(index) {
    const questionData = questions[currentCategory][currentQuestionIndex];
    if (index === questionData.correct) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `${score} / 15`;
}
