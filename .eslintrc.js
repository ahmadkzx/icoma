module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["react", "import", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "prettier/prettier": ["error"],
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    ecmaVersion: 9,
    sourceType: "module",
  },
}