//dependencies and constructor variables
const inquirer = require("inquirer");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const path = require("path");
const fs = require("fs");

const DIST_DIR = path.resolve(__dirname, "dist"); 
const distPath = path.join(DIST_DIR, "index.html");

const render = require("./src/htmlrender"); //template html renderer


const employees = []; 

// Generates which role
employeeType = () => {
    
    return inquirer.prompt([
        
        {
            type: "list",
            message: "What is the Employee's role?",
            name: "role",
            choices: [
                'Engineer',
                'Intern'
            ],
        }
    ]).then(choice => {
        if (choice.role === 'Engineer') {
            addEngineer();
        } else {
            addIntern();
        }
    })
};

//engineer questions
addEngineer = () => {
    return inquirer.prompt([
        
        {
            type: "input",
            message: "What is the Engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Engineer's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Engineer's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Engineer's github user name:",
            name: "github"
        }
    ]).then((engineerResults) => {
        engineerResults.role = "Engineer";
        const { name, id, email, github} = engineerResults;
        const newEngineer = new Engineer(name, id, email, github);
        employees.push(newEngineer);
        addEmployee(); //option to add another employee
    });
};

//intern questions
addIntern = () => {
    return inquirer.prompt([
        
        {
            type: "input",
            message: "What is the Intern's name",
            name: "name"
        },
        {
            type: "input",
            message: "Intern's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Intern's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "What is the Intern's school:",
            name: "school"
        }
    ]).then((internResults) => { 
        internResults.role = "Intern";
        const { name, id, email, school} = internResults;
        const newIntern = new Intern(name, id, email, school);
        employees.push(newIntern); //option to add another employee
        addEmployee();
    });
};

// //option to add another employee
addEmployee = () => {
    return inquirer.prompt([
        
        {
            type: "list",
            message: "Would you like to add another Team Member?",
            name: "add",
            choices: [
                "Yes",
                "No"
            ],
        }
    ]).then(choice => {
        if (choice.add === "Yes") {
            employeeType();
        } else {
            renderHtml();
        };
    });
};


//Manager questions
const init = () => {
   if(!fs.existsSync(DIST_DIR))
   fs.mkdirSync(DIST_DIR); 
   
    return inquirer.prompt([
        //questions about Employee
        {
            type: "input",
            message: "Who is the team's Manager?",
            name: "name"
        },
        {
            type: "input",
            message: "Manager's employee ID:",
            name: "id"
        },
        {
            type: "input",
            message: "Manager's email address:",
            name: "email"
        },
        {
            type: "input",
            message: "Manager's office number:",
            name: "officeNumber"
        },
    ]).then((managerResults) => {
        managerResults.role = "Manager";
        const { name, id, email, officeNumber} = managerResults;
        const newManager = new Manager(name, id, email, officeNumber);
        employees.push(newManager);
        employeeType();
    })
};

renderHtml = () => {
    const buildHTML = render(employees);
    fs.writeFile(distPath, buildHTML, (err) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log("Success! Team Profile created!")
        };
    })
};


init();