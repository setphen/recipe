module.exports = {
  process(src, filename) {
    const pathFromRoot = filename.split('recipe/src/')[1];

    const relative = pathFromRoot
      .split('/')
      .map(() => '../')
      .join('');

    return `
      const {addStyles} = require(\`${relative}jest.cssCache\`);

      addStyles(\`${src}\`);

      module.exports = {};
    `;
  },
};
