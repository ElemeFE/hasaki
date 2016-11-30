'use strict';
const initialPromptList = [{
  type: 'input',
  message: 'what is your project name?',
  name: 'name',
  default: 'a hasaki project'
}, {
  type: 'list',
  name: 'language',
  message: 'which language (template) do you use?',
  choices: ['no template', 'react (dva)', 'vue', 'angular2'],
  default: 0
}, {
  type: 'input',
  message: 'what is your hasaki template root path?',
  name: 'templateRootPath',
  default: './_template'
}];

module.exports = initialPromptList;
