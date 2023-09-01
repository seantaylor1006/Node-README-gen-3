
// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function generateBadge(license){
    return `![License](https://img.shields.io/badge/License:-${license}-purple.svg)`
  }
  //found from looking up how to develop markdown licenses and edited to be flexible with other licenses via the inquirer prompt
  
function renderLicenseBadge(license) {
    if (license) {
      generateBadge(license)
    } else {
      return "";
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
function generateLink(license) {
    return `(https://opensource.org/license/${license}/)`
}
  
function renderLicenseLink(license) {
    if (license) {
      generateLink(license)
    } else {
      return "";
  }
}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      return `## License
      ${renderLicenseBadge(data.license)},${renderLicenseLink(data.license)}`
    } else {
      return ""
    }
  }
  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    
  ## Description
  
  ${data.description}
  ## Table of Contents
  [Installation](##installation)
  [Usage](##usage)
  [License](##license)
  [Contributions](##contributions)
  [Tests](##Tests)
  [Questions](##Questions)
  
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ##License
  ${renderLicenseSection()}
  ## Contributions
  ${data.contributions}
  ## Tests
  ${data.tests}
  ## Questions
  Reach out to me at;
  (${data.github})
  (mailto:${data.email})
  `;
  }
  console.log(generateMarkdown);
  module.exports = generateMarkdown;