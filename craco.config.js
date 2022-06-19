const CracoAntDesignPlugin = require('./scripts/craco-antd');

module.exports = {
  webpack: {
    alias: {
      '@': '.',
    },
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        modifyLessModuleRule(lessModuleRule) {
          lessModuleRule.use.splice(1, 0, '@teamsupercell/typings-for-css-modules-loader');

          return lessModuleRule;
        },
      },
    },
  ],
};
