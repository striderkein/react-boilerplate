module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        'root': ['./src'],
      },
    },
  },
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function"
      },
    ],
    'arrow-body-style': ['error', 'always'],
    'react/prop-types': 'off',
  },
};
