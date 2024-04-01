module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin',
    'eslint-plugin-promise',
    'import',
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    '@compiled',
    '@atlaskit/design-system',
    '@atlaskit/eslint-plugin-design-system',
    'unused-imports',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@atlaskit/design-system/ensure-design-token-usage': [
          'warn',
          {
            shouldEnforceFallbacks: true,
          },
        ],
        '@atlaskit/design-system/no-deprecated-design-token-usage': 'warn',
        '@atlaskit/design-system/consistent-css-prop-usage': 'off',
        '@atlaskit/design-system/no-nested-styles': 'off',
      },
    },
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@atlaskit/design-system/recommended',
    'plugin:@atlaskit/eslint-plugin-design-system/recommended',
  ],
  rules: {
    'import/no-duplicates': 'error',
    'react/jsx-no-literals': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'prettier/prettier': 'warn',
    'react/jsx-no-bind': ['warn', { allowArrowFunctions: true, allowFunctions: true }],
    'react/no-unstable-nested-components': 'warn',
    'react/no-unused-prop-types': ['warn', { skipShapeProps: true }],
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-key': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@atlaskit/design-system/ensure-design-token-usage': 'error',
    '@atlaskit/design-system/consistent-css-prop-usage': 'error',
    '@atlaskit/design-system/icon-label': 'error',
    '@atlaskit/design-system/no-banned-imports': 'error',
    '@atlaskit/design-system/no-deprecated-apis': 'error',
    '@atlaskit/design-system/no-deprecated-design-token-usage': 'error',
    '@atlaskit/design-system/no-deprecated-imports': 'error',
    '@atlaskit/design-system/no-nested-styles': 'error',
    '@atlaskit/design-system/no-unsafe-design-token-usage': 'error',
    '@atlaskit/design-system/use-primitives': 'error',
    '@atlaskit/design-system/use-visually-hidden': 'error',
    'no-console': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        name: 'node_modules',
        message: 'Should not import from node_modules',
      },
    ],
    'promise/prefer-await-to-then': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'off',
      {
        argsIgnorePattern: '^_',
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
  },
};
