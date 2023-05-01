module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // unused variable, will only warn (yellow), not (red)
    'no-unused-vars': 'warn',
    // because eslint show "props.children is missing in props validation", so turned off
    'react/prop-types': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
