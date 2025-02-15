{
  "env": {
    "es6": true,
    "jest": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["import"],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".json"]
      }
    }
  },
  "extends": ["plugin:vue/strongly-recommended"],
  "rules": {
    "accessor-pairs": 0,
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "complexity": [
      1,
      {
        "max": 6
      }
    ],
    "consistent-return": 2,
    "curly": [2, "multi-line"],
    "default-case": [
      2,
      {
        "commentPattern": "^no default$"
      }
    ],
    "dot-notation": [
      1,
      {
        "allowKeywords": true
      }
    ],
    "dot-location": [2, "property"],
    "eqeqeq": [2],
    "guard-for-in": 2,
    "no-alert": 1,
    "no-case-declarations": 2,
    "no-div-regex": 0,
    "no-else-return": 2,
    "no-empty-function": [
      2,
      {
        "allow": ["arrowFunctions", "functions", "methods"]
      }
    ],
    "no-empty-pattern": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": 0,
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 0,
    "no-iterator": 2,
    "no-extra-label": 2,
    "no-labels": [
      2,
      {
        "allowLoop": false,
        "allowSwitch": false
      }
    ],
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [
      2,
      {
        "ignore": [0, 1, -1]
      }
    ],
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 0,
    "no-unused-expressions": 2,
    "no-unused-labels": 2,
    "no-useless-call": 0,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 0,
    "no-warning-comments": [
      1,
      {
        "terms": ["todo", "fixme", "xxx"],
        "location": "start"
      }
    ],
    "no-with": 2,
    "radix": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "yoda": 2,
    "comma-dangle": [2, "always-multiline"],
    "no-cond-assign": [2, "always"],
    "no-console": 1,
    "no-debugger": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 0,
    "no-extra-parens": [
      0,
      "all",
      {
        "conditionalAssign": true,
        "nestedBinaryExpressions": false,
        "returnAssign": false
      }
    ],
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 0,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": 0,
    "arrow-spacing": [
      2,
      {
        "before": true,
        "after": true
      }
    ],
    "constructor-super": 0,
    "generator-star-spacing": [
      2,
      {
        "before": true,
        "after": false
      }
    ],
    "no-class-assign": 2,
    "no-confusing-arrow": [
      2,
      {
        "allowParens": true
      }
    ],
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-duplicate-imports": 2,
    "no-new-symbol": 2,
    "no-restricted-imports": 0,
    "no-this-before-super": 0,
    "no-useless-computed-key": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "object-shorthand": [
      2,
      "always",
      {
        "ignoreConstructors": false,
        "avoidQuotes": true
      }
    ],
    "prefer-arrow-callback": [
      2,
      {
        "allowNamedFunctions": false,
        "allowUnboundThis": true
      }
    ],
    "prefer-const": [
      2,
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": true
      }
    ],
    "prefer-reflect": 0,
    "no-caller": 2,
    "prefer-rest-params": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "require-yield": 2,
    "sort-imports": 0,
    "template-curly-spacing": 2,
    "yield-star-spacing": [2, "before"],
    "import/no-unresolved": [0],
    "import/named": 0,
    "import/default": 0,
    "import/namespace": 0,
    "import/export": 2,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-deprecated": 0,
    "import/no-extraneous-dependencies": [
      0,
      {
        "devDependencies": false,
        "optionalDependencies": false
      }
    ],
    "import/no-mutable-exports": 2,
    "import/no-commonjs": 0,
    "import/no-amd": 2,
    "import/no-nodejs-modules": 0,
    "import/imports-first": [2, "absolute-first"],
    "import/no-duplicates": 2,
    "import/no-namespace": 0,
    "import/extensions": [0, "never"],
    "import/order": [
      0,
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }
    ],
    "import/newline-after-import": 2,
    "import/prefer-default-export": 2,
    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "always"],
    "brace-style": [
      2,
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "camelcase": [
      2,
      {
        "properties": "always"
      }
    ],
    "comma-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self"],
    "eol-last": 2,
    "func-names": 0,
    "func-style": [2, "declaration"],
    "id-blacklist": 0,
    "id-length": 0,
    "id-match": 0,
    "indent": [2, 2],
    "key-spacing": [
      2,
      {
        "beforeColon": false,
        "afterColon": true
      }
    ],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {
          "return": {
            "after": true
          },
          "throw": {
            "after": true
          },
          "case": {
            "after": true
          }
        }
      }
    ],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": 0,
    "max-depth": [2, 4],
    "max-len": [
      2,
      120,
      {
        "ignorePattern": "^\\s.+class=\""
      }
    ],
    "max-nested-callbacks": [2, 4],
    "max-params": [1, 4],
    "max-statements": [1, 10],
    "max-statements-per-line": [
      2,
      {
        "max": 1
      }
    ],
    "new-cap": [
      2,
      {
        "newIsCap": true
      }
    ],
    "new-parens": 2,
    "newline-after-var": 0,
    "newline-before-return": 2,
    "newline-per-chained-call": [
      2,
      {
        "ignoreChainWithDepth": 3
      }
    ],
    "no-array-constructor": 2,
    "no-bitwise": 1,
    "no-continue": 0,
    "no-inline-comments": 0,
    "no-lonely-if": 0,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [
      2,
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-plusplus": 0,
    "no-restricted-syntax": [
      2,
      "DebuggerStatement",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement"
    ],
    "no-spaced-func": 2,
    "no-ternary": 0,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": [1],
    "no-unneeded-ternary": [
      2,
      {
        "defaultAssignment": false
      }
    ],
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "always"],
    "object-property-newline": [
      0,
      {
        "allowMultiplePropertiesPerLine": true
      }
    ],
    "one-var": [2, "never"],
    "one-var-declaration-per-line": [2, "always"],
    "operator-assignment": 2,
    "operator-linebreak": [2, "after"],
    "padded-blocks": [2, "never"],
    "quote-props": [
      2,
      "as-needed",
      {
        "keywords": false,
        "unnecessary": false,
        "numbers": false
      }
    ],
    "quotes": [
      2,
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-jsdoc": 0,
    "semi": [2, "always"],
    "semi-spacing": [
      2,
      {
        "before": false,
        "after": true
      }
    ],
    "sort-vars": 0,
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        "anonymous": "always",
        "named": "never"
      }
    ],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-unary-ops": 0,
    "spaced-comment": [2],
    "wrap-regex": 0,
    "init-declarations": 0,
    "no-catch-shadow": 2,
    "no-delete-var": 0,
    "no-label-var": 2,
    "no-restricted-globals": 0,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-unused-vars": [
      2,
      {
        "vars": "local",
        "args": "after-used"
      }
    ],
    "no-use-before-define": 2,
    "vue/max-len": [
      "error",
      {
        "code": 120,
        "ignoreHTMLAttributeValues": true
      }
    ],
    "vue/component-definition-name-casing": 0
  },
  "overrides": [
    {
      "files": ["**/*.js"],
      "excludedFiles": "app/**/*.js",
      "env": {
        "node": true
      }
    }
  ]
}
