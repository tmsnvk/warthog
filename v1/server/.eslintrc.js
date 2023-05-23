module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      'version': 'detect',
    },
    'import/resolver': {
      typescript: {
      },
      node: {
        extensions: [
          '.js',
          '.ts',
        ],
        moduleDirectory: [
          'node_modules',
          'src/',
        ],
      },
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
    sourceType: 'module',
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    'tsconfig.json',
  ],
  rules: {
    // * possible problems * //
    'array-callback-return': 'error',
    'constructor-super': 'error',
    'for-direction': 'error',
    'getter-return': [
      'error',
      {
        'allowImplicit': true,
      },
    ],
    'no-cond-assign': [
      'error',
      'always',
    ],
    'no-const-assign': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-irregular-whitespace': [
      'error',
      {
        'skipComments': true,
        'skipTemplates': true,
        'skipRegExps': true,
      },
    ],
    'no-promise-executor-return': 'error',
    'no-self-assign': [
      'error',
      {
        'props': true,
      },
    ],
    'no-self-compare': 'error',
    'no-setter-return': 'error',
    'no-template-curly-in-string': 'error',
    'no-unmodified-loop-condition': 'warn',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': 'error',
    'use-isnan': 'error',
    // * suggestions * //
    'accessor-pairs': [
      'warn',
      {
        'getWithoutSet': true,
        'setWithoutGet': true,
        'enforceForClassMembers': false,
      },
    ],
    'camelcase': 'warn',
    'curly': [
      'warn',
      'multi-line',
      'consistent',
    ],
    'default-case': 'warn',
    'default-case-last': 'warn',
    'default-param-last': 'warn',
    'dot-notation': 'warn',
    'eqeqeq': 'warn',
    'func-name-matching': 'warn',
    'func-names': [
      'warn',
      'always',
    ],
    'func-style': [
      'warn',
      'declaration',
      {
        'allowArrowFunctions': true,
      },
    ],
    'guard-for-in': 'warn',
    'multiline-comment-style': [
      'warn',
      'separate-lines',
    ],
    'no-else-return': 'warn',
    'no-eval': 'warn',
    'no-implicit-coercion': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'warn',
    'no-lonely-if': 'warn',
    'no-loop-func': 'warn',
    'no-magic-numbers': 'warn',
    'no-mixed-operators': 'warn',
    'no-nested-ternary': 'warn',
    'no-return-assign': 'warn',
    'no-shadow': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'no-void': 'warn',
    'no-warning-comments': 'warn',
    'prefer-const': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-rest-params': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'require-atomic-updates': 'warn',
    'require-await': 'warn',
    'sort-imports': [
      'warn',
      {
        'ignoreCase': false,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': [
          'multiple',
          'single',
          'all',
          'none',
        ],
        'allowSeparatedGroups': true,
      },
    ],
    'strict': [
      'warn',
      'global',
    ],
    'yoda': 'warn',
    // layout and formatting * //
    'array-bracket-newline': [
      'warn', 'consistent',
    ],
    'array-bracket-spacing': [
      'warn',
      'never',
    ],
    'array-element-newline': [
      'warn', 'consistent',
    ],
    'arrow-parens': 'warn',
    'arrow-spacing': [
      'warn',
      {
        'before': true,
        'after': true,
      },
    ],
    'block-spacing': 'warn',
    'brace-style': ['warn', '1tbs', { 'allowSingleLine': false }],
    'comma-dangle': [
      'warn',
      'always-multiline',
    ],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'dot-location': [
      'warn',
      'object',
    ],
    'eol-last': 'warn',
    'func-call-spacing': [
      'warn',
      'never',
    ],
    'function-call-argument-newline': [
      'warn',
      'never',
    ],
    'function-paren-newline': [
      'warn',
      'never',
    ],
    'indent': [
      'warn',
      2,
    ],
    'jsx-quotes': [
      'warn',
      'prefer-single',
    ],
    'keyword-spacing': 'warn',
    'line-comment-position': [
      'warn',
      {
        'position': 'above',
      },
    ],
    'max-len': [
      'warn',
      {
        'code': 200,
        'ignoreComments': true,
        'ignoreUrls': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      },
    ],
    'multiline-ternary': [
      'warn',
      'never',
    ],
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': 'warn',
    'no-trailing-spaces': 'warn',
    'object-curly-newline': [
      'warn', { 'consistent': true },
    ],
    'object-curly-spacing': [
      'warn',
      'always',
    ],
    'padding-line-between-statements': [
      'warn',
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return',
      },
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var',
        ],
        'next': '*',
      },
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var',
        ],
        'next': [
          'const',
          'let',
          'var',
        ],
      },
      {
        'blankLine': 'always',
        'prev': [
          'case',
          'default',
        ],
        'next': '*',
      },
    ],
    'quotes': [
      'warn',
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true,
      },
    ],
    'semi': 'warn',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'space-in-parens': [
      'warn',
      'never',
    ],
    'space-infix-ops': 'warn',
    'space-unary-ops': 'warn',
    'switch-colon-spacing': 'warn',
    'template-curly-spacing': 'warn',
  },
};