require("dotenv").config(); // Charge les variables d'environnement

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverModuleFormat: "cjs",
  ignoredRouteFiles: ["**/.*"],
};