// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/license-Apache--2.0-green)](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'MIT':
      return '[![License](https://img.shields.io/badge/license-MIT-blue)](https://mit-license.org/)';
    case 'Mozilla 2.0':
      return '[![License](https://img.shields.io/badge/license-Mozilla%202.0-orange)](https://www.mozilla.org/en-US/MPL/2.0/)';
    case '2-Clause BSD':
      return '[![License](https://img.shields.io/badge/license-2--Clause%20BSD-violet)](https://opensource.org/licenses/BSD-2-Clause)';
    default:
      return '';
  }
}

// Function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)';
    case 'MIT':
      return '[MIT License](https://mit-license.org/)';
    case 'Mozilla 2.0':
      return '[Mozilla 2.0 License](https://www.mozilla.org/en-US/MPL/2.0/)';
    case '2-Clause BSD':
      return '[2-Clause BSD License](https://opensource.org/licenses/BSD-2-Clause)';
    default:
      return '';
  }
};

// Function that returns the license section of README
function renderLicenseSection(license) {
  console.log(license);
  if (license !== 'No license') {
    return `More details about the license used can be found here: ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
};

// Function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSect = renderLicenseSection(data.license);

  return `
  ${licenseBadge}

  # ${data.title}

  ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
  - [License](#license) 
  - [Tests](#tests)
  - [Contributions](#contributions)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Questions](#questions) 
  - [Author](#author)


## Overview

### The challenge 
${data.challenge}

### User Story 
${data.userStory}

## Installation 
${data.installation}

## Usage

### License 
${licenseSect}

### Tests 
${data.tests}

### Contributions 
${data.contributions}

## My process 
${data.myProcess}

### What I learned 
${data.whatIlearned}

### Continued development 
${data.continuedDevel}

## Questions
Got a question? You can reach out to me via the contact info below!

### Author

- Email - ${data.email}
- Github - [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
