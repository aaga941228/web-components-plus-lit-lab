import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import litPlugin from 'eslint-plugin-lit';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  litPlugin.configs['flat/recommended'],
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  {
    ignores: ['node_modules', 'dist']
  },
];