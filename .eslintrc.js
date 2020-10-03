module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      "indent": [0, 4],//缩进风格
      'space-before-function-paren': 0,
      "spaced-comment": 0,//注释风格要不要有空格什么的
      "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
      "no-sync": 0,//nodejs 禁止同步方法
      "no-ternary": 0,//禁止使用三目运算符
      "no-trailing-spaces": 0,//一行结束后面不要有空格
      "no-multiple-empty-lines": [0, {"max": 2}],//空行最多不能超过2行
      'prefer-const': 0,
      'dot-notation': 0,
      'no-unused-vars': 0,
      'yoda': 0,
      'semi': 0,
      'comma-dangle': 0,
      'no-unneeded-ternary': 0,
      'no-useless-return': 0,
      'vue/max-attributes-per-line': 0,
      'vue/html-self-closing': 0, // 标签自闭和
      'vue/mustache-interpolation-spacing': 0,
      'vue/html-indent': 0, // 标签缩进
      'vue/html-quotes':0, // 样式双引号
      'vue/attributes-order':0, // 样式顺序
      'vue/no-v-html': 0
  }
}
