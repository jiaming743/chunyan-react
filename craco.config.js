const CracoAntDesignPlugin = require('./scripts/craco-antd');
const path = require("path")

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, "src"),
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
