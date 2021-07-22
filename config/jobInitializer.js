/**
 * Created by Developer
 */

import Utils from "../app/utils";

const path = require("path");
const cronMaster = require("cron-master").getInstance();

/**
 * Initialize Jobs
 */
function initialiseJob(job) {
  job.on("tick-started", function () {
    Utils.lhtLog(
      "initialiseJob",
      "tick-started",
      {},
      "Developer",
      "functional",
      new Date()
    );
  });

  job.on("tick-complete", function (err, res, time) {
    Utils.lhtLog(
      "initialiseJob",
      "tick-complete",
      {},
      "Developer",
      "functional",
      new Date()
    );
  });

  job.on("time-warning", function () {
    Utils.lhtLog(
      "initialiseJob",
      "time-warning",
      {},
      "Developer",
      "functional",
      new Date()
    );
  });

  job.on("overlapping-call", function () {
    Utils.lhtLog(
      "initialiseJob",
      "overlapping-call",
      {},
      "Developer",
      "functional",
      new Date()
    );
  });

  job.on("stopped", function (err, res, time) {
    initialiseJob(job);
  });
}

cronMaster.loadJobs(path.join(__dirname, "../app/jobs"), function (err, jobs) {
  if (err) {
    Utils.lhtLog(
      "loadJobs",
      "error",
      err,
      "Developer",
      "functional",
      new Date()
    );
    throw err;
  } else if (jobs.length === 0) {
    throw new Error("No jobs found!");
  } else {
    jobs.forEach(initialiseJob);
    cronMaster.startJobs();
  }
});
