const mongoose = require("mongoose");

const UrlSchema = new mongoose.Schema({
  originalUrl: String,
  shortCode: { type: String, unique: true },
  clicks: { type: Number, default: 0 },
  expiresAt: Date
}, { timestamps: true });

module.exports = mongoose.model("Url", UrlSchema);