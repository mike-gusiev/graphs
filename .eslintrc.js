module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser', // Визначаємо парсер ESLint
  extends: [
    'plugin:react/recommended', // Використовуємо правила, рекомендовані @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Використовуємо правила, рекомендовані @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Використовуємо eslint-config-prettier, щоб позбавитись від правил ESLint з
                                   // плагіна @typescript-eslint/eslint-plugin, що може конфліктувати з prettier
    'plugin:prettier/recommended', // Активуємо eslint-plugin-prettier та показуємо помилки prettier у вигляді помилок
                                   // ESLint. Переконайтеся, що це завжди остання конфігурація в масиві extends.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Дозволяємо обробку сучасних фіч ECMAScript
    sourceType: 'module', // Дозволяємо використання імпортів
    ecmaFeatures: {
      jsx: true, // Дозволяємо обробку JSX
      modules: true
    },
  },
  rules: {
    // Тут ми визначаємо правила ESLint. Також можна перевизначати правила наявних конфігів
    // наприклад, "@typescript-eslint/explicit-function-return-type": "off",
    'jsx-wrap-multiline': 0,
    'jsx-no-lambda': 0,
    'jsx-no-multiline-js': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react/prop-types': 0,
    'react/no-children-prop': 0,
    'no-unused-expressions':0
  },
  settings: {
    react: {
      version: 'detect', // Вказуємо eslint-plugin-react автоматично визначати версію React для використання
    },
  },
};
