# React Front End test

## Aim

Using React create an interface where a user can type a company name which returns a filtered list of results, in groups of 10.

![A wireframe of the Company search component](https://github.com/Mergermarket-Careers/react-frontend-test/blob/master/search-wireframe.jpg)

## Acceptance criteria

- Create an input box where a user can enter the name of a company
- After the input of the 3rd character, render a filtered list of results which match the characters in the user input (there is an example json file with a sample set of results for you to work with)
- When the user removes the text from the search box, no results will be displayed
- When there are 2 characters or less, no results will be displayed
- Create a clear button which, when clicked, will clear the user input
- The rendered list will display results and associated metadata, as per wireframe
- If there are more than 10 matching items, render a “show more” button – when this button is clicked, the next 10 items should be revealed

## What we're looking for

- Clean, maintainable, code backed by tests (using a library of your choice)
- A README file describing how to run the code and tests
- Git commits at regular intervals, demonstrating iterative development
- Pragmatism - i.e. no over-engineering

## Please note

- The aim of this exercise is to test your React knowledge, therefore we do not expect you to use libraries for component functionality, i.e. react-autosuggest or react.autocomplete.
- We expect you to be able to demo your work, so please ensure that your code can be rendered in a browser.
