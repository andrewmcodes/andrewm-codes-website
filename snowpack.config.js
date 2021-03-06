// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/#configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    _bridgetown: { url: "/", static: true, resolve: false },
    assets: "/",
  },
  plugins: [
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-run-script",
      {
        name: "bridgetown",
        cmd: "bin/bridgetown build",
        watch: "$1 --watch --quiet",
      },
    ],
    "@snowpack/plugin-postcss",
    [
      "snowpack-plugin-minify-html",
      {
        htmlMinifierOptions: {
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true,
          sortAttributes: true,
        },
      },
    ],
  ],
  packageOptions: {
    NODE_ENV: true,
    source: "remote",
  },
  buildOptions: {
    clean: true,
    out: "build",
  },
  devOptions: {
    open: "none",
    hmrDelay: 1100,
  },
  optimize: {
    bundle: false,
    manifest: true,
    minify: true,
    target: "es2020",
  },
}
