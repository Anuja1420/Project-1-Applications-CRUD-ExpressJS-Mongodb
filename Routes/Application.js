const express = require('express');
const mongoose = require ('mongoose');
const router = express.Router();

//Application Schema
const applicationSchema = new mongoose.Schema({
    name : String,
    description : String,
    release_date : Date,
    version : Number,
    ratings : Number,
    genre : String,
    category : {type : String , enum:['games', 'beauty', 'fashion', 'women', 'health']}
});
const Applications = mongoose.model('Application' , applicationSchema);

//CRUD Operation

//Post data
router.post('/', async (req,res)=>{
    try{
        const application = new Applications(req.body);
        await application.save();
        res.send("Application Data Added Successfully");
    }catch(error){
        res.status(500).send(error);
    }
})

//Get all data
router.get('/', async (req,res)=>{
    try{
        const applications = await Applications.find();
        res.send(applications);
    }catch(error){
        res.status(500),send(error);
    }

})

//Get Data by Id
router.get('/id/:id', async(req,res)=>{
    try{
    const application = await Applications.findById(req.params.id);
    if(!application){
        return res.status(404).send('Application data not forund for this Id');
    }
    res.send(application);
    }catch(error){
        res.status(500).send(error);
    }
})

//Update Data by Id
router.put('/id/:id', async(req,res)=>{
    try{
        const application = await Applications.findByIdAndUpdate(req.params.id , req.body, {new : true});
        if(!application){
            return res.status(404).send('Application data not found for this Id');
        }
        res.send('Application Data Updated Successfully');
        //res.send(application);    
    }catch(error){
        res.status(500).send(error);
    }
})

//Dalete Data By Id
router.delete('/id/:id', async(req,res)=>{
    try{
        const application = await Applications.findByIdAndDelete(req.params.id);
        if(!application){
            return res.status(404).send('Application Data Not Found');
        }
        res.send('Application data deleted successfully');
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;
