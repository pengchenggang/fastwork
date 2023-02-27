const { defineConfig } = require("@vue/cli-service");
const BASE_URL =
  process.env.NODE_ENV === "production" ? "/fastwork/" : "/fastwork/";
module.exports = defineConfig({
  publicPath: BASE_URL,
  transpileDependencies: true,
});
