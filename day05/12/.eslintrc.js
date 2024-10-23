module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended'
    ],
    parser: 'babel-eslint',
    env: {
      browser: true,
      es6: true,
      node: true
    },
    rules: {
      'prettier/prettier': 'error'
    }
  };
  