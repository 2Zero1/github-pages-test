const { readdir, readFile, writeFile } = require('fs/promises');

const toHtmlDocument = require('./toHtmlDocument');
const transfile = require('./transfile');

const downgradeHeading = require('./downgradeHeading');

const contentsDirectoryPath = './contents';
const outPath = './out';


const toHtmlUl = (items) => `<ul>${items}</ul>`;
const toHtmlLi = (item) => `<li>${item}</li>`;
const toHtmlLink = (item) => `<a href="${item}.html">${item}</a>`;
const markLink = (keyword) => toHtmlLi(toHtmlLink(keyword));


const writeIndexFile = async (keywords) => {
  const links = Array.from(keywords).reduce((acc, cur) => acc + markLink(cur), '');

  writeFile(`${outPath}/index.html`, toHtmlUl(links));
};

const builder = async () => {
  const keywords = new Set();

  const fileNames = await readdir(contentsDirectoryPath);

  for await (const fileName of fileNames) {
    
    const paragraph = await readFile(`${contentsDirectoryPath}/${fileName}`, 'utf8');

    const contents = transfile(downgradeHeading(paragraph));

    const keyword = fileName.split('.')[0];

    const htmlFilePath = `${outPath}/${keyword}.html`;

    keywords.add(keyword);
    console.log(htmlFilePath);
    console.log('뭔데');
    writeFile(htmlFilePath, toHtmlDocument(contents));
    console.log('뭔데2');
  }

  writeIndexFile(keywords);
}



builder();
