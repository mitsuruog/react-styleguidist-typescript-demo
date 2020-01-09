const glob = require("glob");
const path = require("path");
const fs   = require("fs");

module.exports = {
  components: () => {
    return glob.sync("src/shared/components/**/*.{ts,tsx}").filter(file => {
      // Take only connect component if exists, ignore others.
      if (file.match(/connect.tsx$/)) {
        return true
      } else {
        const pathObject = path.parse(file);
        pathObject.ext = `.connect${pathObject.ext}`
        const { root, dir, ext, name } = pathObject;
        return !fs.existsSync(path.format({ root, dir, ext, name }));
      }
    });
  },
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    savePropValueAsString: true,
  }).parse,
  webpackConfig: Object.assign({}, require("./webpack.config"), {}),
  styleguideComponents: {
    Wrapper: __dirname + "/src/styleguide/Wrapper.tsx",
  },
  styleguideDir: "docs",
};
