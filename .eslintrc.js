module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'react', 'react-hooks', 'import', 'regex'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/internal-regex': '^@(/components|utils)',
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    'no-console': ['error'],
    'no-alert': ['error'],
    'regex/invalid': [
      'error',
      [
        {
          regex: '.css',
          message: 'use .module.less',
        },
        {
          regex: '^((?!.module).)*.less',
          message: 'use .module.less',
        },
      ],
    ],
  },
};
