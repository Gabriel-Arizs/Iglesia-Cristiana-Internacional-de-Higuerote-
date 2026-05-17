import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default tseslint.config(
  // 1. Ignorar carpetas innecesarias
  { ignores: ["dist", "node_modules", "build", "coverage"] },

  {
    // 2. Aplicar a ambos: .ts y .tsx
    files: ["**/*.{ts,tsx}"],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node, // Útil para lógica de servidor o scripts
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }, // Permite JSX incluso si el archivo es .ts (aunque lo ideal es .tsx)
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettierPlugin,
    },
    rules: {
      // Reglas de React Hooks
      ...reactHooks.configs.recommended.rules,

      // Reglas de React Refresh (para Vite)
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      // Reglas de Prettier (formateo)
      "prettier/prettier": "error",

      // Reglas de TS personalizadas
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "react/react-in-jsx-scope": "off", // No necesario en React 17+
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // 3. Importante: Prettier siempre al final para sobrescribir reglas de estilo
  prettierConfig,
);
