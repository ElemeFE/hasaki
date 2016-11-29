'use strict';
const initialPromptList = [{
  type: 'input',
  message: 'what is your project name?',
  name: 'name',
  default: 'a hasaki project'
}, {
  type: 'list',
  name: 'language',
  message: 'which language do you use?',
  choices: ['react', 'vue', 'angular2'],
  default: 0
}, {
  type: 'input',
  message: 'what is your hasaki template root path?',
  name: 'templateRootPath',
  default: './_template'
}, {
  type: 'input',
  message: 'what is your hasaki placeholder?',
  name: 'placeholder',
  default: '__name'
}];

module.exports = initialPromptList;
