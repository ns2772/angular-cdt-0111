const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Reqeusted-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "aosdivj13",
      title: "first server-side post",
      content: "first server contentcontent"
    },
    {
      id: "aosdadvj13",
      title: "second server-side post",
      content: "second server contentcontent"
    }
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts
  });
});

module.exports = app;
