const Encore = require('@symfony/webpack-encore');
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest')

Encore
    .setOutputPath('web/')
    .setPublicPath('./')
    .addEntry('app', './assets/js/app.jsx')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    //.enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .copyFiles({ 
        from: './assets/images',
        to: 'images/[path][name].[ext]'
    })
    .addPlugin(new HtmlWebpackPlugin({
        template: 'index.html'
    }))
    .addPlugin(new WebpackPwaManifest({
        name: 'The Progressive Button',
        short_name: 'ThePWB',
        description: 'A quick progressive web app',
        background_color: '#266284',
        crossorigin: null, //can be null, use-credentials or anonymous
        theme_color: '#ff0000',
        display: 'standalone',
        icons: [
          {
            src: 'assets/images/icons/icon.png',
            sizes: [72, 96, 128, 144, 152, 192, 384, 512] // multiple sizes
          }
        ]
      }))
    .addPlugin(new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast 
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true
    }))
    .enableReactPreset();

const config = Encore.getWebpackConfig();
config.watchOptions = { poll: true, ignored: ['node_modules', '*.json'] };
module.exports = config;
