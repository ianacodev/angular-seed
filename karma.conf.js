// Karma configuration
module.exports = function(config) {
  config.set({
    basePath: './src',
    frameworks: ['jasmine'],
    files: [{ pattern: '**/*.spec.ts', included: true }],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  });
};
