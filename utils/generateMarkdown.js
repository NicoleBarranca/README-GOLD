// Function to generate README content
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://opensource.org/licenses/${data.license})
 
  ## Table of Contents
  [Description](#description)

  [Installation](#installation)
  
  [Usage](#usage)
  
  [Built With](#built-with)
  
  [License](#license)
  
  [Tests](#tests)
  
  [Contribution](#contribution)
  
  [Questions](#questions)

  ## Username
  ${data.username}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}


  ## Built With
  ${data.builtWith}

  ## License
  ${data.license}

  ## Tests
${data.tests}

  ## Contribution
  ${data.contribution}

  ## Questions
 You can see more of my work here: ${data.profile}. 

If you have any questions about this repo, please feel free to contact me here: ${data.email}
 
`;
}

module.exports = generateMarkdown;
