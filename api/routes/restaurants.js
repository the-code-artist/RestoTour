const express=require("express")
const router=express.Router()
const Restaurant=require("../model/restaurant")
//display restaurant by id
router.get("/:id",async (req,res)=>{
    const data=await Restaurant.findById(req.params.id)
    if(data)
    { 
        return res.status(200).send(data)
    }
    return res.status(400).json({message:"invalid id"})
})
//display all restaurants
router.get("/",async (req,res)=>{
    let data=await Restaurant.find()
    let page=Number(req.query.page); 
    let limitValue=10;
    const start=(page-1)*limitValue;
    const end=(page)*limitValue;
    data=data.slice(start,end)
    if(data)
    {
        return res.status(200).send(data)
    }
    return res.status(400).json({message:"invalid id"})
})

module.exports=router;