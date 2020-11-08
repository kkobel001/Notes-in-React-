module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  env: {
    jest: true,
  },
  globals: {
    document: true,
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 1,
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js'] },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '../storybook/**',
          '../src/components/**',
        ],
      },
    ],
  },

  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
