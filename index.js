const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Title of the Project?",
    },
    {
      type: "input",
      name: "description",
      message: "What was your Motivation?",
    },
    {
      type: "input",
      name: "why",
      message: "Why did you build this Project?",
    },
    {
      type: "input",
      name: "what",
      message: "What Problem does it Solve?",
    },

    {
      type: "input",
      name: "standout",
      message: "What make this project stand out?",
    },
    {
      type: "input",
      name: "demo",
      message: "add demo image path",
    },
    {
      type: "input",
      name: "github",
      message: "please add the github pages deployment",
    },
    {
      type: "input",
      name: "features",
      message: "PLease List the features this product has if any?",
    },
    {
      type: "input",
      name: "credits",
      message: "PLease List any Collaborators on this Project",
    },
    {
      type: "input",
      name: "reflection",
      message: "What did you learn?",
    },
    {
      type: "input",
      name: "future",
      message: "What will you add to this site in the future developement?",
    },
    {
      type: "checkbox",
      name: "intallation",
      message: "How to Install this project",
      choices: [1, 2, 3, 4, 5],
    },
    {
      type: "checkbox",
      name: "licences",
      message: "List of Licences",
      choices: [1, 2, 3, 4, 5],
    },
    {
      type: "input",
      name: "username",
      message: "What is your git hub username",
    },
  ])
  .then((response) => {
    const readme = `
# ${response.name}

### _${response.description} ${response.why} ${response.what} ${response.learn} ${response.standout}_

![Demo](${response.demo})
    Currently deployed at [GitHub Pages](${response.github})

---

## Features

${response.features}

---

## List Of Collaborators on this Project:
    
${response.credits}

---

## Reflection

${response.reflection}

---

## Future Deployment

${response.future}

---

<div align ="center>
    
<img src='https://img.sheilds.io/github/repo-size/${response.username}/${response.name}'>
<img src='https://img.sheilds.io/github/last-commit/${response.username}/${response.name}'>
<img src='https://img.sheilds.io/github/repo-launguages/${response.username}/${response.name}'>

# Licence:
    
${response.licences}

</div>
`;
    fs.writeFile("README.md", readme, {}, (err) =>
      err ? console.log(err) : console.log("File Created")
    );
  });
