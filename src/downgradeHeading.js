const regex = /(# )/g;

module.exports = (paragraph) => paragraph.replace(regex, '## ');
