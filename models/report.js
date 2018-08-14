const MongoClient = require("mongoose");

const reportSchema = MongoClient.Schema({
    _id: MongoClient.Schema.Types.ObjectId,
    username: String,
    userID: String,
    reason: String,
    channel: String,
    rUsername: String,
    rID: String,
    time: String
});

module.exports = MongoClient.model("Report", reportSchema);