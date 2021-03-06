module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'react-app',
    'eslint:recommended'
  ],
  plugins: [
    'react',
    'jsx-a11y'
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'default-case': 'warn',
    'no-extra-label': 'warn',
    'no-floating-decimal': 'warn',
    'no-new-wrappers': 'warn',
    'no-array-constructor': 'warn',
    'no-new-object': 'warn',
    'no-param-reassign': 'warn',
    'no-return-assign': 'warn',
    'no-sequences': 'warn',
    'no-useless-concat': 'warn',
    'no-shadow': 'warn',
    'block-spacing': 'warn',
    'indent': ['warn', 2, { SwitchCase: 1 }],
    'lines-around-comment': ['warn', { beforeLineComment: true }],
    'no-multi-assign': 'warn',
    'quotes': ['warn', "single"],
    'semi': ['warn', "always"],
    'switch-colon-spacing': ['warn', { before: false, after: true }],
    'spaced-comment': ['warn', 'always'],
    'no-duplicate-imports': 'warn',
    'no-var': 'warn',
    'linebreak-style': ['warn', 'unix']
  }
}