module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
  ],
  plugins: [
    'jsdoc',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'func-names': 0,
    'no-unused-vars': 0,
    'jsdoc/require-jsdoc': ['warn', { require: { FunctionExpression: true } }],
  },
};
