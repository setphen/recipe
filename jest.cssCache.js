let cache = '';

const addStyles = src => (cache += src);
const getStyles = () => cache;

module.exports = {
  addStyles,
  getStyles,
};
