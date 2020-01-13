module.exports = (req, res, next) => {
    try{
        // console.log(req.body);
        // return res.send(req.body);
        req.body = JSON.parse(framework.core.functions.decryption(req.body.data));
    }catch(err){
        return res.status(500).send("Error occured While Decryption request.");
    }
    next();
}