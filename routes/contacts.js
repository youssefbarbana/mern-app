const express = require("express");
const contact = require("../module/contact");

const router=express.Router()

//post
router.post('/',async(req,res)=>{
    try {
        const newcontact=new contact({...req.body})
        

        const result=await newcontact.save()
        res.send({result})
    } catch (error) {
        res.status(400).send({message:'can not add contact'})
    }
})
//get
router.get('/',async(req,res)=>{
    try {
        const result=await contact.find()
        const response=result
        res.send({response})
    } catch (error) {
        res.status(400).send({message:'can not find contacts'})

    }
})
//get by id
router.get('/:id',async(req,res)=>{
    try {
        const result=await contact.findOne({_id:req.params.id})
        res.send({response:result})
    } catch (error) {
        res.status(400).send({message:`can not find ${_id} contacts`})

    }
})
//delete
router.delete('/:id',async(req,res)=>{
    try {
        const result=await contact.findOneAndDelete({_id:req.params.id})
        result.n?res.send({message:'contact is already deleted'}):res.send({message:'contact deleted'})


      
    } catch (error) {
        res.status(400).send({message:`can not delete this contact`})

    }
})
//update
router.put('/:id',async(req,res)=>{
    try {
        const result=await contact.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
        res.send({message:'contact updated'})
    } catch (error) {
        res.status(400).send({message:`can not update this contact`})

    }
})
module.exports=router