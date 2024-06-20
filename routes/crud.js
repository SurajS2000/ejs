const { render } = require('ejs');

const db = require('../database/server').db;
exports.create = (req,res) =>{
    if(req.method == "POST"){
        const q = "INSERT INTO login(name, password) VALUES(?,?)";
        const value = [req.body.name,req.body.password];
        db.query(q,value,(err,data)=>{
            if(err){
                res.render('notification',{message:"failed"});
            }else{
                res.render('notification',{message:"success"});
            }
        })
    }else{
        res.render("add.ejs");
    }
};
exports.update = (req,res) =>{
       if(req.method == "POST"){
        const q ="UPDATE login SET `password`= ? WHERE id = ?"
        const value = [req.body.newpassword,req.query.id];
        db.query(q,value,(err,data)=>{
            if(err){
                res.render('notification',{message:"failed"});
            }else{
                res.render('notification',{message:"success"});
            };
        });
       }else{
        res.render("update.ejs",{id:req.query.id});
       }
}
exports.delete = (req,res) =>{
        const q = " DELETE FROM login WHERE id=? ";
        const value = [req.query.id];
        db.query(q,value,(err,data)=>{
            if(err){
                res.render('notification',{message:"failed"});
            }else{
                res.render('notification',{message:"success"});
            };
        });
}
