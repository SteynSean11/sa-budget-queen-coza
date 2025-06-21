module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', // This must be the last item to override other configs
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // Rules to disable for a modern React+TS codebase
    'react/react-in-jsx-scope': 'off', // Not needed with the new JSX transform
    'react/prop-types': 'off', // Not needed when using TypeScript for props
    '@typescript-eslint/explicit-function-return-type': 'off',
    'import/no-unresolved': 'off', // This is handled by the TypeScript compiler
  },
};