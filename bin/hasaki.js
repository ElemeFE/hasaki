#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .version(require('../package').version)
  .usage('<command> [options]')
  .command('init', 'generate a new hasaki project')
  .command('create', 'generate new pages used given rules')
  .on('--help', () => {
    console.log(chalk.cyan.bold('  Examples:'));
    console.log('');
    console.log(chalk.cyan.bold('    $ hasaki init [-y]'));
    console.log(chalk.cyan.bold('    $ hasaki create <page-name> <rules> -p [project-path]'));
    console.log(chalk.cyan.bold('    $ hasaki --help'));
    console.log('');
  })
  .parse(process.argv);
