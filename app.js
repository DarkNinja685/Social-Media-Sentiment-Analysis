const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 4000;
const userRoutes = require("../backend/src/routes/UserRoutes");
app.use(userRoutes);

const roleRoutes = require("./src/routes/RoleRoutes");
app.use(roleRoutes);

const socialMediaAccountRoutes = require("./src/routes/SocialMediaAccountRoutes");
app.use("/account", socialMediaAccountRoutes);

const postRoutes = require("./src/routes/PostRoute");
app.use("/post", postRoutes);

const SentimentAnalysisRoutes = require("./src/routes/SentimentAnalysisRoute");
app.use("/sentimentAnalysis", SentimentAnalysisRoutes);

const reportRouter = require("./src/routes/ReportRouter");
app.use("/report", reportRouter);

const keyWordRouter = require("./src/routes/KeyWordRoute");
app.use("keyword", keyWordRouter);

mongoose.connect("mongodb://127.0.0.1:27017/25_node_internship").then(() => {
  console.log("database connected....");
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
