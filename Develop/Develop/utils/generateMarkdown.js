// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';
  
  switch (license) {
    case 'MIT':
      return '![MIT License](https://img.shields.io/badge/license-MIT-green)';
    case 'GPL-3.0':
      return '![GPL-3.0 License](https://img.shields.io/badge/license-GPL%203.0-blue)';
    case 'Apache-2.0':
      return '![Apache-2.0 License](https://img.shields.io/badge/license-Apache%202.0-blue)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { if (!license) return '';
  
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL-3.0':
      return '[GPL-3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache-2.0':
      return '[Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   if (!license) return '';
  
  return `## License
This project is licensed under the ${license} License. See the [${license} License](https://opensource.org/licenses/${license}) for details.`;
}

// TODO: Create a function to generate markdown for README
export function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
    `;
}

export default generateMarkdown;
