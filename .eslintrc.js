module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  // extends: [
  //   "plugin:vue/essential",
  //   "@vue/standard"
  // ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  // parserOptions: {
  //   parser: "babel-eslint"
  // },
  // rules: {
  //   "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
  //   "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  // },
  rules: {
    "comma-spacing": 0,
    "no-mixed-spaces-and-tabs": 0,
    "padded-blocks": 0,
    "no-multiple-empty-lines": 0,
    "no-tabs": 0,
    "comma-dangle": "off",
    "no-unused-vars": "off",
    indent: ["off", 2],
    "no-trailing-spaces": ["error", { skipBlankLines: true }],
    "spaced-comment": ["error", "always"],
    "object-curly-spacing": ["error", "always"],
    // allow async-await
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-parsing-error": [
      2,
      {
        "x-invalid-end-tag": false,
      },
    ],
    "no-undef": "off",
  },
};
