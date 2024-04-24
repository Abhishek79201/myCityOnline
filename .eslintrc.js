const eslintConfig = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    'import/no-unresolved': 'off',
    'prettier/prettier': 'off',
    'no-console': 'warn',
    'linebreak-style': 0,
    'global-require': 0,
    'default-param-last': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-use-before-define': ['error', { variables: false }],
    'import/no-extraneous-dependencies': 'off',
    'eslint-disable-next-line no-await-in-loop': 'off',
    'eslint-disable-next-line no-param-reassign': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['_source', '_id'] }],
    'no-await-in-loop': 0,
    'no-constant-condition': 0,
  },
};

module.exports = eslintConfig;
