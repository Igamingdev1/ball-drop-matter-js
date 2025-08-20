// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path")
const WorkboxPlugin = require("workbox-webpack-plugin")

const isProduction = process.env.NODE_ENV == "production"

const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: "babel-loader",
            },
            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = "production"
        config.plugins.push(
            new WorkboxPlugin.GenerateSW({
                // these options encourage the ServiceWorkers to get in there fast
                // and not allow any straggling "old" SWs to hang around
                clientsClaim: true,
                skipWaiting: true,
            }),
        )
    } else {
        config.mode = "development"
    }
    return config
}
