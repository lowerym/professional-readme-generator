// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license)`
    )
  }
  return ""
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

      Copyright @ ${license}. All Rights Reserved.

      Licensed Under the ${license} License.`
    )
  }
  return ""
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installations](#installations)

  * [Usage](#usage)

  * [Contributors](#contributors)

  * [Test](#tests)

  * [Questions](#questions)

  ${renderLicenseLink(data.license)}

  ## Installations

  To install dependencies, run the following commands:

  \`\`\`
  ${data.dependencies}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributors

  ${data.contributors}

  ## Tests

  To run tests of this application, run the following commands:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any additional questions, please contact me at either of the following:

  - Github: [${data.github}](https://github.com/${data.github}/)
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
