const Metalsmith = require('metalsmith');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

function generateRule(source, target) {
  const sourceData = fs.readFileSync(source, 'utf8');
  const targetData = fs.readFileSync(target, 'utf8');
  const sourceObj = JSON.parse(sourceData);
  const targetObj = JSON.parse(targetData);
  const rules = [...targetObj.rules, sourceObj];
  const _targetObj = Object.assign({}, targetObj, {rules});
  const writeContent = JSON.stringify(_targetObj, null, 2);

  fs.writeFile(target, writeContent, (err) => {
    if (err) throw err;
    console.log(chalk.green('√ .hasakirc saved'));
  });
}

module.exports = function generate(destDirName, src, dest, done) {
  const metalsmith = Metalsmith(path.join(src, 'template'));
  const sourceRule = path.resolve(src, 'rule', 'hasakirc.json');
  const targetRule = path.resolve(dest, '.hasakirc');

  metalsmith
    .clean(false)
    .source('.')
    .destination(path.resolve(dest, destDirName))
    .build(function(err) {
      generateRule(sourceRule, targetRule)
      done(err);
    });

  return targetRule;
};
