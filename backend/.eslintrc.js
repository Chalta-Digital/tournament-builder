module.exports = {
    'env': {
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'no-console': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'no-multi-spaces': [
            'error',
            {'ignoreEOLComments': true}
        ],
        'curly': [
            'error',
            'multi-or-nest'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};  