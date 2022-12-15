var express= require('express')
var router= express.Router();
const os = require("os")
/* GET home page. */
router.get('/', function(req, res, next) {
    try{
        const systeminfo={
            hostname:os.hostname(),
            type : os.type(),
            plateform:os.platform(),
        }
        if(!systeminfo){
           throw new error("system info not found");
        }
        
            res.status(200).json(systeminfo);
        
    }
    catch(e){
        res.status(500).json({message:e.message});
    }
        
        
});


module.exports = router;