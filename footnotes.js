/*
LEGEND:
fn = footnote
fnLink = inlined link with footnote UI on print
fnList = footnotes list; order list located at the foot of each article
sup = inlined subscript element with index corresponding to footnote
*/

const { readFile } = require('fs');
const { resolve } = require('path');
const glob = require('glob');
const replace = require('replace-in-file');

// Generate path for rendered output
const cwd = resolve(__dirname, '_site');
// Match fnLinks
const fnLink = /(<span class="print-only-inline" aria-hidden="true">)([a-zA-Z0-9-_\.,!?'"\s]+)(<sup>(\d{1,3})?<\/sup>)(<\/span><a class="no-print" href=")(.*)(">[a-zA-Z0-9-_\.,!?'"\s]+<\/a>)/g;
// Match fnList at the foot of the article
const fnList = /(<div class="footnotes print-only" aria-hidden="true"><ol>)(.*)(<\/ol><\/div>)/g;

// Add index to fnLinks
// reads ever HTML file on rendered output
glob('**/*.html', { cwd }, async (err, files) => {
  if (err) {
    throw err;
  }

  let sup = 1;
  // generates full path for every matched file
  const matchedFiles = files.map(file => resolve(cwd, file));
  // inserts auto incrementing index to fnLink sup
  const replaceOptions = {
    files: matchedFiles,
    from: fnLink,
    to: (match, p1, p2, p3, p4, p5, p6, p7) =>
      [p1, p2, `<sup>${sup++}<\/sup>`, p5, p6, p7].join('')
  };

  try {
    await replace(replaceOptions);
  } catch (error) {
    console.error('Error occurred:', error);
  }
});

// Create fnList
// reads ever HTML file on rendered output
glob('**/*.html', { cwd }, (err, files) => {
  if (err) {
    throw err;
  }

  // generates full path for every matched file
  const matchedFiles = files.map(file => resolve(cwd, file));

  // loop over every matched file
  matchedFiles.forEach(file => {
    // get contents of every matched file
    readFile(file, 'utf-8', async (err, data) => {
      if (err) {
        throw err;
      }

      // match fnLink in content
      const matches = data.match(fnLink);

      // process only if file content returns an fnLink match
      if (matches !== null) {
        // create array of li element URLs from matched fnLinks
        const fn = matches.map(match => match.replace(fnLink, '<li>$6</li>'));
        // inset array of fn to fnList
        const toReplace = {
          files: file,
          from: fnList,
          to: `$1${fn.join('')}$3`
        };

        try {
          await replace(toReplace);
        } catch (error) {
          console.error('Error occurred:', error);
        }
      } else {
        // remove empty fnList
        const toReplace = {
          files: file,
          from: fnList,
          to: ''
        };

        try {
          await replace(toReplace);
        } catch (error) {
          console.error('Error occurred:', error);
        }
      }
    });
  });
});
