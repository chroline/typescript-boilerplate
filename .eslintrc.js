module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: ["airbnb-base", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
};
