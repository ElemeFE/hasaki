'use strict';
const path = require('path');
const fs = require('fs');
const exists = require('fs').existsSync;
const configFileName = '.hasakirc';

const findConfigFile = (currentPath) => {
  let dir = currentPath;
  while (dir !== '/') {
    const filePath = path.resolve(dir, configFileName);

    if (exists(filePath)) {
      return dir;
    } else {
      dir = path.resolve(dir, '../');
    }
  }
  return '';
};

module.exports = findConfigFile;
