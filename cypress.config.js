const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
  projectId: 'apcxgn',
  e2e: 
  {
    testIsolation: false,
    experimentalRunAllSpecs: true,
    baseUrl: "https://travel-dev.gjirafa.com/sq"
    
  },
});
