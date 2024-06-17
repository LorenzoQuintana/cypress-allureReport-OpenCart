const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'OpenCart allure report',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    baseUrl: 'http://opencart.abstracta.us',
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: 'cypress/e2e/features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    stepDefinitions: 'cypress/e2e/step_definitions/**/*.js',
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      allureCypress(on, {
        resultsDir: './allure-results'
      });

      return config;
    },
  },
});

