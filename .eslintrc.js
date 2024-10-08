module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'import/no-webpack-loader-syntax': 'off',
    'quotes': 'off', // 引号类型 `` "" ''
    'quote-props': 'off' , // 对象字面量中的属性名是否强制双引号
    'dot-notation': 'off',
    'no-useless-escape': 'off',
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 'off',
    'operator-linebreak': 'off',
    'prefer-const': 'off',
    'one-var': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-spacing': 0,
    'no-mixed-spaces-and-tabs': 0,
    'padded-blocks': 0,
    'no-multiple-empty-lines': 0,
    'no-tabs': 0,
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    // 'indent': ['off', 2],
    // 'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    'spaced-comment': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': 'off',
    // 'vue/no-parsing-error': [
    //   2, {
    //     'x-invalid-end-tag': false
    //   }],
    'no-undef': 'off'
  }
}
