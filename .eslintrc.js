module.exports = {
  root: true,
  // Unable to resolve path to module 'antd-mobile' import/no-unresolved
  settings: {
    'import/resolver': {
      webpack: {
        config: 'node_modules/@vue/cli-service/webpack.config.js'
      }
    }
  },
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'max-len': ['error', { 'code': 200 }],
    // 必须使用单引号
    'quotes': ['error', 'single'],
    // 仅在必要的时候使用分号，以 [, (, /, +, - 开头的行
    'semi': ['error', 'never'],
    // 不能使用alert
    'no-alert': 'error',
    // 块之前的空格
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    // 方法定义相关的空格
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always' }],
    // 引入文件忽略后缀名
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      vue: 'never'
    }],
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }]
  },
};
