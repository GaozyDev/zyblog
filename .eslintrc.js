// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
  },
  env: {
    browser: true,
  },
  extends: ["plugin:vue/essential", "standard"],
  plugins: ["vue"],
  rules: {},
  globals: {
    define: true,
  },
};
