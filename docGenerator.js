const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const wkhtmltopdf = require('wkhtmltopdf');

const sourceFile = process.argv[2]; // e.g. databricks.js

async function createDocs() {
  if (!sourceFile) {
    throw Error('No source file provided');
  }

  if (!fs.existsSync(sourceFile)) {
    fs.mkdirSync(sourceFile);
  }

  const source = require('./docs/' + sourceFile);
  console.log('> Source: ', source);
  const title = sourceFile.replace('.js', '');
  console.log('> Creating docs for source file', sourceFile, title);
  for (let i = 0; i < source.length; i++) {
    const section = source[i];
    const sectionTitle = section.title;
    const pages = section.pages;
    const dirName = sourceFile + '/' + lp(i) + '_' + sectionTitle.replace(' ', '_');
    console.log('> Dir name: ', dirName);

    // create directory for section
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
    }
    for (let j = 0; j < pages.length; j++) {
      const page = pages[j];
      const pageTitle = lp(j) + '_' + _.last(page.split('/')).replace('.html', '');
      const output = await generatePdf(page, pageTitle, dirName);
      console.log('> Created page: ', output);
    }
  }
}

async function generatePdf(page, pageTitle, dirName) {
  return new Promise((resolve, reject) => {
    wkhtmltopdf(page, {
      pageSize: 'letter',
      title: pageTitle,
      userStyleSheet: 'https://s3.us-west-2.amazonaws.com/personal-tomgoldenberg/stylesheet.css',
      output: dirName + '/' + pageTitle + '.pdf'
    }, (err, stream) => {
      resolve(pageTitle);
    })
  })
}

function lp(n) {
  const s = n.toString();
  const pad = '00';
  return pad.substring(0, pad.length - s.length) + s;
}

createDocs();
