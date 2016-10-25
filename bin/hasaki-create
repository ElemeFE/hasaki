#!/usr/bin/env node
'use strict';
const program = require('commander');
const path = require('path');
const chalk = require('chalk');
const Hasaki = require('hasaki-core');
const exists = require('fs').existsSync;

const findConfigFile = require('../lib/find-config-file');

const CWD = process.cwd();

const projectPath = findConfigFile(CWD) || './';

let pageName;
let rules = [];

program
  .usage('<page-name> <rules>')
  .action((pn, rs) => {
    pageName = pn;
    rules = rs;
  })
  .on('--help', () => {
    console.log(chalk.cyan.bold('  Examples:'));
    console.log();
    console.log(chalk.cyan.bold('    $ hasaki create Home rule1,rule2'));
    console.log();
  })
  .parse(process.argv);

const initHelp = () => {
  console.log(chalk.cyan.bold('  Please init your project:'));
  console.log();
  console.log(chalk.cyan.bold('    $ hasaki init [-y]'));
  console.log();
};

const createPages = () => {
  const rcPath = path.resolve(CWD, projectPath, '.hasakirc');
  if (!exists(rcPath)) {
    initHelp();
  } else {
    const hasaki = new Hasaki(pageName, path.resolve(CWD, projectPath), rcPath);
    hasaki.executeRule(rules.split(','));
  }
};

if (!pageName || !rules.length) {
  program.help();
  process.exit(1);
}

createPages();
