const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "advertise",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'advertiseRoot',
      filename: 'remoteEntry.js',
      exposes: {
        './AdvertiseApp': './/src/bootstrap',
      },
        
    }),
  ],
};
