const {prompt} = require('inquirer');// destructures the inquirer object and returns the prompt method
const {writeFile} = require('fs');


const questions = [
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your new project?', 
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide a usage example by entering a valid JS code snippet.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license type from the list below.',
        choices: ["Apache License 2.0","GNU General Public License v3.0","MIT License","BSD 2-Clause 'Simplified' License","BSD 3-Clause 'New' or 'Revised' License","Boost Software License 1.0","Creative Commons Zero v1.0 Universal","Eclipse Public License 2.0","GNU Affero General Public License v3.0","GNU General Public License v2.0","GNU Lesser General Public License v2.1","Mozilla Public License 2.0","The Unlicense"],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide example how to run the code. For Example: How to run the script for mobile application.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Who can users contact with questions?',
    },
  ];


function buildFile({title, description, installation, usage, license, contributing, tests, questions}){
    
    let licenseBadge;

    switch(license)
    {
       case 'Apache License 2.0':
       licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
       break;
       
       case 'GNU General Public License v3.0':
       licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
       break;
       
       case 'MIT License':
       licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
       break;
       
       case 'BSD 2-Clause "Simplified" License':
       licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
       break;
       
       case 'BSD 3-Clause "New" or "Revised" License':
       licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
       break;
       
       case 'Boost Software License 1.0':
       licenseBadge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
       break;
       
       case 'Creative Commons Zero v1.0 Universal':
       licenseBadge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
       break;
       
       case 'Eclipse Public License 1.0':
       licenseBadge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
       break;
       
       case 'GNU Affero General Public License v3.0':
       licenseBadge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)";
       break;
       
       case 'GNU General Public License v2.0':
       licenseBadge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
       break;
       
       case 'GNU Lesser General Public License v2.1':
       licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
       break;
       
       case 'Mozilla Public License 2.0':
       licenseBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
       break;
       
       case 'The Unlicense':
       licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
       break;
    }

    let readMeContent = ` ## Title
${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${description}
## Installation
${installation}
## Usage
${usage}
## License
${license}\n
${licenseBadge}
## Contributing
${contributing}
## Tests
${tests}
## Questions
${questions}`

return readMeContent;
}


prompt(questions)
.then((answers) => {
    // Use user feedback for... whatever!!
    console.log("\nSession Details: ");
    console.log(answers);
    
    //add some code here about creating a .readme file in this directory using the users feedback
    writeFile('./results/readMe.md', buildFile(answers), (err) => {
        console.log("here in line 82\n");
        if(err)
        {
            throw err;
        }
        console.log("the file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 






