module.exports = {
  components: "src/shared/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: Object.assign({}, require("./webpack.config"), {
  })
};
