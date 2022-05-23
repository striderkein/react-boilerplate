module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
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
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "function-declaration",
      },
    ],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [0],
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
