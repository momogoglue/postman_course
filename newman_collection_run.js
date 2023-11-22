const newman = require("newman");
const cron = require("node-cron");

// Replace 'Your_Collection_File.json' with the path to your collection file
// Replace 'Your_Environment_File.json' with the path to your environment file
// Set the cron schedule expression as per your requirement
const COLLECTION_PATH = "./collection.json";
const ENVIRONMENT_PATH = "./env.json";
const CRON_SCHEDULE = "* * * * *"; // Example: runs every 30 minutes

// Function to run the Newman collection
function runPostmanCollection() {
  newman.run(
    {
      collection: require(COLLECTION_PATH),
      environment: require(ENVIRONMENT_PATH),
      reporters: ["cli", "json", "htmlextra", "html"],
      iterationCount: 1,
      reporter: {
        cli: {
          silent: false,
          showTimestamps: true,
          //noSummary: false,
          //noFailures: false,
          //noAssertions: false,
          //noConsole: false,
          //noBanner: false,
          //noAssertions: true,
          //noSuccessAssertions: true,
        },
        json: {
          export: "./json-reporter/report.json", // Path where the JSON report will be saved
        },
        htmlextra: {
          export: "./htmlextra-reporter/report.html", // Path where the HTML report will be saved
          // template: './template.hbs'
          // logs: true,
          // showOnlyFails: true,
          // noSyntaxHighlighting: true,
          // testPaging: true,
          // browserTitle: "My Newman report",
          // title: "My Newman Report",
          // titleSize: 4,
          // omitHeaders: true,
          // skipHeaders: "Authorization",
          // omitRequestBodies: true,
          // omitResponseBodies: true,
          // hideRequestBody: ["Login"],
          // hideResponseBody: ["Auth Request"],
          // showEnvironmentData: true,
          // skipEnvironmentVars: ["API_KEY"],
          // showGlobalData: true,
          // skipGlobalVars: ["API_TOKEN"],
          // skipSensitiveData: true,
          // showMarkdownLinks: true,
          // showFolderDescription: true,
          // timezone: "Australia/Sydney",
          // skipFolders: "folder name with space,folderWithoutSpace",
          // skipRequests: "request name with space,requestNameWithoutSpace",
          // displayProgressBar: true
        },
        html: {
          export: "./html-reporter/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
          //template: './customTemplate.hbs' optional, this will be picked up relative to the directory that Newman runs in.
        },
      },
    },
    function (err) {
      if (err) {
        throw err;
      }
      console.log("Collection run complete!");
    }
  );
}

// Schedule the Newman run using cron
/**
 * cron.schedule(CRON_SCHEDULE, function() {
    console.log('Running the collection...');
    runPostmanCollection();
});

console.log(`Scheduled collection run with cron schedule: ${CRON_SCHEDULE}`);
*/

//normal run
runPostmanCollection();
