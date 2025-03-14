module.exports = {
  // babelOptions: {
  //   configFile: './babelrc',
  // },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:cypress/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    jsx: true,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    packageManager: 'yarn',
  },
  plugins: ['react', 'standard', 'prettier', 'cypress'],
  rules: {
    eqeqeq: ['error', 'always'],
    'prefer-const': 2,
    strict: ['error', 'global'],
    'react/prefer-es6-class': 2,
    'react/prop-types': 0,
    'react/no-access-state-in-setstate': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-typos': 2,
    'react/no-this-in-sfc': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unsafe': 2,
    'react/no-unused-prop-types': 0,
    'react/no-unused-state': 2,
    'react/prefer-stateless-function': 2,
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 0,
    'react/require-render-return': 2,
    'react/sort-prop-types': 0,
    'react/void-dom-elements-no-children': 1,
    'react/no-children-prop': [
      0,
      {
        allowFunctions: true,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-key': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': [
      2,
      {
        allowGlobals: true,
      },
    ],
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-default-props': 0,
    'react/sort-comp': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-vars': 2,
    'no-console': 2,
    'no-template-curly-in-string': 2,
    'key-spacing': 0,
    'no-new-wrappers': 2,
    'no-unused-expressions': 0,
    'no-unused-vars': 2,
    'no-case-declarations': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error',
  },
  globals: {
    APPCONFIG: true,
    SURVEYID: true,
    LANGUAGECODE: true,
    CAPTIONS: true,
    SAVED_REPORTID: true,
  },
}

