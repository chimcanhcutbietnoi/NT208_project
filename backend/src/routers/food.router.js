import { Router } from "express";
import { sample_foods,sample_tags } from "../data.js";
import { FoodModel } from "../models/food.model.js";
import handler from 'express-async-handler'
const router = Router(); 

router.get('/', handler( async  (req, res) => {
    const foods = await FoodModel.find({}); 
    res.send(foods);
}));


router.get(
    '/tags',
    handler(async (req, res) => {
      const tags = await FoodModel.aggregate([
        {
          $unwind: '$tags',
        },
        {
          $group: {
            _id: '$tags',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            name: '$_id',
            count: '$count',
          },
        },
      ]).sort({ count: -1 });
  
      const all = {
        name: 'All',
        count: await FoodModel.countDocuments(),
      };
  
      tags.unshift(all);
  
      res.send(tags);
    })
  );

router.get('/search/:searchTerm', 
    handler(async (req, res) => {
    const  { searchTerm } = req.params; 
    const  searchRegex = new RegExp(searchTerm, 'i');
    const  foods = FoodModel.filter( item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ); 
    res.send(foods)
})); 

router.get('/tag/:tag', 
    handler(async (req,res) => {
        const { tag } = req.params; 
        const foods = await FoodModel.find({ tags: { $in: [tag] } });
        res.send(foods);
    })); 

router.get('/:foodID', 
    handler( async  (req,res) => {
        const { foodID } = req.params; 
        const food = await FoodModel.findById(foodID);
        res.send(food); 
    }));


export default router;