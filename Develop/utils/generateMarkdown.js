// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Table of contents

*[Description](#Description)

*[Installation](#Installation)

*[Contribute](#Contribute)

*[Testing](#Testing)

*[Credits](#Credits)

*[Contact](#Contact)

*[License](#License)


## Description
${data.description}

## Installation 
${data.install}

## Contribute
${data.contribute}

## Testing
${data.test}

## Credits
### Collaborators on this project
${data.credits}

## Contact
Questions about this project should be sent to ${data.email}

## License
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}




By ${data.GitHub} on github
`;
}
// exporting the generateMarkdown function to be used in the main script
module.exports = generateMarkdown;