const express = require("express");
const {handleGenerateNewShortURL,handleGetAnalytics,handleUpdateVisitHistoryAndRedirect} = require('../controllers/url')

const router = express.Router();

router.post("/",handleGenerateNewShortURL)
router.get("/:shortId",handleUpdateVisitHistoryAndRedirect)
router.get("/analytics/:shortId",handleGetAnalytics)


module.exports = router;


