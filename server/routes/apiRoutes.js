const express = require("express");
const krogerRoutes = require("./krogerRoutes");

const router = express.Router();

router.use("/kroger", krogerRoutes);

module.exports = router;
