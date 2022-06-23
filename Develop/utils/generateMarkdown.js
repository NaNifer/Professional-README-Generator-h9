// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
- [Installation](#installation)
- [Usage](#usage)
  - [License](#license) 
  - [Tests]](#tests)
  - [Contributions](#contributions)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Questions](#questions) 
  - [Author](#author) What is your Github user name?
  What is your email address?

## Overview

### The challenge 
${data.challenge}

### User Story 
${data.userStory}

## Installation 
${data.installation}

## Usage

### Liscense 
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

- Email - ( ${data.email} )
- Github - ( ${data.github} )
`;
}

module.exports = generateMarkdown;
