module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@stylistic'],
  extends: [],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@stylistic/interface-name-prefix': 'off',
    '@stylistic/explicit-function-return-type': 'off',
    '@stylistic/explicit-module-boundary-types': 'off',
    '@stylistic/no-explicit-any': 'off',
    '@stylistic/max-len': ['error', 120],
  },
};
