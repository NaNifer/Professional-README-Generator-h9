# Professional README Generator

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The Professional README Generator creates a command-line application that dynamically generates a professional README.md file from a user's input using the Inquirer package.

### User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

### Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

### Screenshot

![](./screenshot.jpg)



### Links

- GitHub: [Professional README Generator repository](https://github.com/NaNifer/Professional-README-Generator-h9)

## My process

### Built with

- Javascript
- NodeJS
- Inquirer
- FS

### What I learned

NodeJS was a new tool for me to use, so the learning curve was a bit of a challenge, especially when I didn't know how to code at all less than 2 months ago!  I learned that the version of which json package that I was working with, did indeed matter. 

During working on this project, I updated my code and wound up updating my json package to a newer version. This in turn, caused the node modules to be changed as well, and previously working code, was broken. It took me a while to figure out, and thanks to classmates and the TAs I got it fixed. Key take away, dont' update your json packages and dependencies mid project-- ha!

### Continued development

I just atarted using switch statements, and sometimes the easier solution was just to write a if statement instead. I need to continue to practice both techniques, so I gain a deeper understanding about the syntax, as well as be able to better determine what would be best in a given scenerio.

### Useful resources

- [Sheilds.IO](https://shields.io/) - A very easy to use plug and play badge/sheild generator.

## Author

- GitHub - [NaNifer](https://github.com/NaNifer)
- Portfolio - [Nifer Kilakila](https://nanifer.github.io/Nifer-Kilakila-Portfolio-h2/)


## Acknowledgments

Thank you to all the TA's in my bootcamp class who spent a lot of time helping me grasp the concepts behind NodeJS!