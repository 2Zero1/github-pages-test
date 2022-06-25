const regex = /(# )/g;

module.exports = (paragraph) => {
  return paragraph.replace(regex,`## `);
};
