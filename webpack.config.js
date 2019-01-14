const Encore = require('@symfony/webpack-encore');
const WorkboxPlugin = require('workbox-webpack-plugin');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.jsx')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    //.enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .addPlugin(new WorkboxPlugin.GenerateSW({
        // these options encourage the ServiceWorkers to get in there fast 
        // and not allow any straggling "old" SWs to hang around
        clientsClaim: true,
        skipWaiting: true
    }))
    .enableReactPreset();

const config = Encore.getWebpackConfig();
module.exports = config;
