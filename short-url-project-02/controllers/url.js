const URL = require("../models/url")
const shortid = require('shortid');

const handleGenerateNewShortURL = async (req,res) => {
    const body = req.body;
    if(!body.url){return res.status(400).json({error:"url is required"});
    }
    const shortID = shortid();
    await URL.create({shortId:shortID,redirectURL:body.url,visitHistory:[]
    })

    return res.json({id:shortID})
}

const handleUpdateVisitHistoryAndRedirect = async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },
    {
        $push:{
            visitHistory:{
                timestamp: Date.now(),
            },
        },
    })
    res.redirect(entry.redirectURL)
}

const handleGetAnalytics = async (req,res) =>{
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId}) 
    return res.json({
        totalclick: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}



module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleUpdateVisitHistoryAndRedirect,
}
