module.exports = {
  components: "src/shared/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: Object.assign({}, require("./webpack.config"), {}),
  styleguideComponents: {
    Wrapper: __dirname + "/src/styleguide/Wrapper.tsx",
  },
  ignore: ["**/*.connect.tsx"],
  styleguideDir: "docs",
};
