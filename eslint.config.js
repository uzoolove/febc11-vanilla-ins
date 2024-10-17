import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      'no-var': 'off', // var 키워드 사용 가능
      'prefer-const': 'warn', // 변수가 재할당 되지 않는다면 let 대신 const 사용
      'no-cond-assign': 'warn', // 조건문에서 변수값 할당식 사용
      'no-redeclare': 'warn', // 변수 중복 선언
    },
  },
  {
    ignores: ['.history', 'dist'],
  },
];
