module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: ['@typescript-eslint/parser', "espree"],
  parserOptions: {
    ecmaVersion: 2020, // Підтримка сучасного JavaScript
    sourceType: "module",
    project: ["./tsconfig.json", "./netlify/functions/tsconfig.functions.json"],
    ecmaFeatures: {
      jsx: true, // Якщо у вас є JSX
    },
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  plugins: ['react-refresh'],
  rules: {
    "@typescript-eslint/no-var-requires": "off", // Вимкнути TypeScript-правила для JS-файлів
  },
}
