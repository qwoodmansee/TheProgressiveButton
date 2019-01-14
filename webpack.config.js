const encore = require('@symfony/webpack-encore');

encore
    .setOutputPath('web/TheProgressiveButton/')
    .setPublicPath('/TheProgressiveButton/')
    .addEntry('app', './assets/js/app.js')
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!encore.isProduction())
    .enableVersioning(encore.isProduction())
    .enableSassLoader()
    .enableReactPreset();

console.log(encore.getWebpackConfig());
module.exports = encore.getWebpackConfig();
