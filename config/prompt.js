'use strict';
const initialPromptList = [{
  type: 'input',
  message: 'what is your project name?',
  name: 'name',
  default: 'a hasaki project'
}, {
  type: 'input',
  message: 'what is your hasaki template root path?',
  name: 'templateRootPath',
  default: './_template'
}, {
  type: 'input',
  message: 'what is your hasaki placeholder?',
  name: 'placeholder',
  default: ''
}];

module.exports = initialPromptList;
