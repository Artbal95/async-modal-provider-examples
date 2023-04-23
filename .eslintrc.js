module.exports = {
  root: true,
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: { alwaysTryTypes: true },
    },
  },
  rules: {
    'arrow-body-style': 1,
    'eol-last': 1,
    'max-len': [
      1,
      {
        tabWidth: 2,
        comments: 180,
        code: 180,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': [1, { allow: ['warn', 'error'] }],
    'no-multiple-empty-lines': 1,
    'no-param-reassign': [2, { props: false }],
    'no-spaced-func': 0,
    'no-unused-vars': 1,
    'object-curly-newline': [
      1,
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'prefer-const': 1,
    'prefer-template': 1,

    // import
    'import/no-named-as-default': 1,
    'import/no-unresolved': 2,
    'import/order': [1, { 'newlines-between': 'always' }],

    // react
    'react/function-component-definition': 0,
    'react/no-array-index-key': 1,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/self-closing-comp': 1,
    'react-hooks/exhaustive-deps': 2,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['prettier'],
      parserOptions: { project: './tsconfig.json' },
      rules: {
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/no-unused-vars': 1,
      },
    },
  ],
};
