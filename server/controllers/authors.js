const Author = require("../models/author");

module.exports = {
    all : (req,res)=>{
        Author.find()
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    add : (req,res)=>{
        Author.create(req.body)
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    about : (req,res)=>{
        Author.find({_id:req.params.id})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    update : (req,res)=>{
        Author.updateOne({_id:req.params.id}, req.body, {runValidators:true})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    delete : (req,res)=>{
        Author.remove({_id:req.params.id})
            .then(data=>res.json({info:data, msg:'success'}))
            .catch(err=>res.json({info:err, msg:'failure'}))
    },
    add_quote: (req,res)=>{
        Author.updateOne({_id:req.params.id},{$push:{quote:req.body}}, {runValidators:true})
        .then(data=>res.json({info:data, msg:'success'}))
        .catch(err=>res.json({info:err, msg:'failure'}))    
    },
    vote_up: (req,res)=>{
        Author.findOne({_id:req.params.id})
        .then(data=>{
            x=data.quote
            // res.json(x)
            for( let q of x){
                if (q._id==req.params.q_id){
                    // res.json(q)
                    q.vote+=1
                }
            }
            data.save()
            // +=1;
            // data.save();
            // res.json(data)
        })

        .then(data=>res.json({info:data, msg:'success'}))
        .catch(err=>res.json({info:err, msg:'failure'})) 
    },
    vote_down: (req,res)=>{
        Author.findOne({_id:req.params.id})
        .then(data=>{
            x=data.quote
            // res.json(x)
            for( let q of x){
                if (q._id==req.params.q_id){
                    // res.json(q)
                    q.vote-=1
                }
            }
            data.save()
            // +=1;
            // data.save();
            // res.json(data)
        })

        .then(data=>res.json({info:data, msg:'success'}))
        .catch(err=>res.json({info:err, msg:'failure'})) 
    },
    delete_quote: (req,res)=> {
        Author.updateOne({_id:req.params.id},{$pull:{quote:{_id:req.params.q_id}}})
        .then(data=>res.json({info:data, msg:'success'}))
        .catch(err=>res.json({info:err, msg:'failure'})) 
    }

}