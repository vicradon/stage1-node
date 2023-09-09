const express = require("express");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/api", (req, res) => {
  const slack_name = req.query.slack_name;
  const current_day = "Saturday";
  const track = req.query.track;
  const utcTime = new Date(Date.now()).toISOString().split(".")[0] + "Z";
  const github_file_url =
    "https://github.com/bintus-ux/stage-one-general-source/blob/main/index.js";
  const github_repo_url =
    "https://github.com/bintus-ux/stage-one-general-source";
  const status_code = 200;

  const info = {
    slack_name: slack_name,
    current_day: current_day,
    utc_time: utcTime,
    track: track,
    github_file_url: github_file_url,
    github_repo_url: github_repo_url,
    status_code: status_code,
  };

  res.json(info);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
