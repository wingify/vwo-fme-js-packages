
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

/** @type {import("eslint").FlatConfig[]} */
export default [
  {
    ignores: [
      'packages/**/dist/**',
      'packages/**/node_modules/**',
      'packages/**/coverage/**',
      'packages/**/build/**',
      'node_modules/**',
    ],
    files: ['packages/**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off'
    },
  }
];
