const fs = require('fs');
const merge = require('easy-pdf-merge');

const projectName = process.argv[2];

async function combineFiles() {
  if (!projectName) {
    throw Error('Must provide project name - node combineFiles.js [projectName]');
  }
  let folders = fs.readdirSync('./' + projectName + '/Individual Files/');

  for (let i = 0; i < folders.length; i++) {
    let folder = folders[i];
    let files = fs.readdirSync('./' + projectName + '/Individual Files/' + folder);
    files = files.map(file => './' + projectName + '/Individual Files/' + folder + '/' + file);
    await mergeFiles(files, folder);
  }
}

async function mergeFiles(files, folder) {
  return new Promise((resolve, reject) => {
    merge(files, './' + projectName + '/Combined/' + folder + '.pdf', (err) => {
      resolve();
    })
  })
}

combineFiles();
