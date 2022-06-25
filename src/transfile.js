const linkPatternRegex = /\[\[(.*?)\]\]/g;

module.exports =  (paragraph) =>  paragraph.match(linkPatternRegex).reduce((acc, pattern) => {
  const keyword = pattern.substring(2, pattern.length - 2);

  const regex = new RegExp(`(\\[\\[${keyword}\\]\\])`);
  
  return acc.replace(regex,`[${keyword}](./${keyword}.html)`);
}, paragraph);