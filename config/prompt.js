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
  choices: [
    {name: 'no template', value: 'none'},
    {name: 'react (dva)', value: 'react'},
    {name: 'vue', value: 'vue'},
    {name: 'angular2', value: 'angular2'}
  ],
  default: 0
}];

module.exports = initialPromptList;
