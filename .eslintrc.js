module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never"
      }
    ]
  },
  settings: {
    "import/resolver": {
      typescript: {}
    }
  }
};