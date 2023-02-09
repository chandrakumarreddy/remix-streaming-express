/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget:
    process.env.NODE_ENV === "development" ? undefined : "vercel",
  server: process.env.NODE_ENV === "development" ? undefined : "./main.js",
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
