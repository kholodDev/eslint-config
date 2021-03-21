const { rules } = require('../common')
const disabledRules = require('./disabled-common-rules')

module.exports = {
    ...rules,
    ...disabledRules,

    /* eslint-disable quote-props */
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
}
