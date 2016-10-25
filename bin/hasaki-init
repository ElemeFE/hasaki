#!/usr/bin/env node
'use strict';
const program = require('commander');
const Promise = require('bluebird');
const path = require('path');
const inquirer = require('inquirer');
const readFile = Promise.promisify(require('fs').readFile);
const writeFile = Promise.promisify(require('fs').writeFile);
const exists = require('fs').existsSync;
const chalk = require('chalk');

const initialPromptList = require('../config/prompt');

const CWD = process.cwd();

const defaultConfigPath = '../config/hasakirc.json';

const projectRootPath = './';

program
  .option('-y, --yes', 'use default config')
  .on('--help', () => {
    console.log(chalk.cyan.bold('  Examples:'));
    console.log();
    console.log(chalk.cyan.bold('    $ hasaki init  [-y]'));
    console.log();
  })
  .parse(process.argv);

const readConfigFile = () => readFile(path.resolve(__dirname, defaultConfigPath), 'utf8').catch((e) => {
  console.log(chalk.yellow('Error reading file', e));
});

const writeConfigContents = (hasakircPath, contents) => {
  writeFile(hasakircPath, contents).then(() => {
    console.log(chalk.yellow('hasaki inited!'));
  }).catch((e) => {
    console.log(chalk.yellow('Error reading file', e));
  });
};

const writeConfigFile = (contents, dir) => {
  const configDir = dir || path.resolve(CWD, projectRootPath);
  const hasakircPath = path.resolve(configDir, '.hasakirc');

  if (exists(hasakircPath)) {
    inquirer.prompt([{
      type: 'confirm',
      message: '.hasakirc is already existed, would you cover it?',
      name: 'cover'
    }]).then((answers) => {
      if (!answers.cover) process.exit(1);
      else writeConfigContents(hasakircPath, contents);
    });
  } else {
    writeConfigContents(hasakircPath, contents);
  }
};

if (program.yes) {
  readConfigFile().then(contents => writeConfigFile(contents, null, 2));
} else {
  inquirer.prompt(initialPromptList).then((answers) => {
    readConfigFile().then((contents) => {
      let config;
      try {
        config = JSON.stringify(Object.assign(JSON.parse(contents), answers), null, 2);
      } catch (e) {
        console.log(chalk.yellow('init .hasakirc file error: ', e.stack));
      }
      writeConfigFile(config, null, 2);
    });
  });
}

process.on('exit', () => {
  // console.log()
});
