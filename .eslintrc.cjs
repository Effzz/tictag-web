module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:prettier/recommended' // Make sure this is always the last element in the array.
    ],
    plugins: ['simple-import-sort', 'unused-imports', 'prettier'],
    rules: {
        quotes: ['error', 'single'],
        'react/react-in-jsx-scope': 'off',
        'no-duplicate-imports': 'error',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/typedef': ['error'],
        'unused-imports/no-unused-imports': ['error'],
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['hrefLeft', 'hrefRight'],
                aspects: ['invalidHref', 'preferButton']
            }
        ]
    }
};
