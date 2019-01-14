const encore = require('@symfony/webpack-encore');

encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!encore.isProduction())
    //.enableVersioning(encore.isProduction())
    .enableSassLoader()
    .enableReactPreset();

module.exports = encore.getWebpackConfig();
