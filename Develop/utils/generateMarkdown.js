// TODO: Create a function that returns a license badge based on which license is passed in
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

// Apache -- https://www.apache.org/licenses/LICENSE-2.0 -- https://img.shields.io/badge/license-Apache--2.0-green
// MIT -- https://mit-license.org/ -- https://img.shields.io/badge/license-MIT-blue
// Mozilla -- https://www.mozilla.org/en-US/MPL/2.0/ -- https://img.shields.io/badge/license-Mozilla%202.0-orange
// 2-Clause BSD -- https://opensource.org/licenses/BSD-2-Clause -- https://img.shields.io/badge/license-2--Clause%20BSD-violet



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licBadge = renderLicenseBadge(data.license);

  return `
  ${licBadge}

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
${data.license}

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

### Author

- Email - ${data.email}
- Github - [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
