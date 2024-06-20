const db = require('../database/server').db;
exports.home = (req,res) =>{
    const q = "SELECT name,id FROM login";
    db.query(q,(err,data)=>{
        if(err){
            res.render('home',{message:err});
        }else{
            res.render('home',{message:data});
        }
    });
};