const Url = require("../models/Url");
const generateCode = require("../utils/generatecode");

exports.createShortUrl = async (req, res) => {
  const { originalUrl, expiryMinutes } = req.body;

  const shortCode = generateCode();

  const newUrl = await Url.create({
    originalUrl,
    shortCode,
    expiresAt: expiryMinutes
      ? new Date(Date.now() + expiryMinutes * 60000)
      : null
  });

  res.json({
    shortUrl: `http://localhost:5000/${shortCode}`
  });
};

exports.redirectUrl = async (req, res) => {
  const { shortCode } = req.params;

  const url = await Url.findOne({ shortCode });

  if (!url) return res.status(404).send("Not found");

  if (url.expiresAt && url.expiresAt < new Date())
    return res.status(410).send("Link expired");

  url.clicks++;
  await url.save();

  res.redirect(url.originalUrl);
};