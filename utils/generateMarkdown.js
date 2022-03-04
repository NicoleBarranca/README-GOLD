// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
// opensour website -- only options that are available on this site for choices
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license}-${data.color}.svg)](https://opensource.org/licenses/${data.license})
  [![License](https://img.shields.io/badge/License-${data.licenseTwo}-${data.colorTwo}.svg)](https://opensource.org/licenses/${data.licenseTwo})
  [![License](https://img.shields.io/badge/License-${data.licenseThree}-${data.colorThree}.svg)](https://opensource.org/licenses/${data.licenseThree})

  ## Table of Contents
  [description](#description)

  [Installation](#installation)

  [usage](#usage)

  [contribution](#contribution)



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
