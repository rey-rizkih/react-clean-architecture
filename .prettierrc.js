/** @type {import('prettier').Config} */

module.exports = {
  plugins: [require("prettier-plugin-tailwindcss")],
  trailingComma: "all",
  tabWidth: 2,
  semi: true,
  doubleQuote: true,
  printWidth: 80,
  bracketSpacing: true,
};
