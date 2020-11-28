const router = require("express").Router()
const { Workout } = require("../models")
const db = require("../models")


//find
router.get("/api/workouts/range", function (req, res){
 db.Workout.find().limit(7)
 .then((data)=>{
  res.json(data)
 }).catch((err)=> {
 res.json(err)
})
})

//find
router.get("/api/workouts", function (req, res){
 db.Workout.find().then(function (data){
  res.json(data)
 }).catch(function(err){
  res.json(err)
 })
})

//create 
router.post("/api/workouts", (req,res) => {
 db.Workout.create(req.body).then((data)=> {
  res.json(data)
 }).catch((err)=>{
  res.status(500).json(err)
 })
})

//update
router.put("/api/workouts/:id", ({ body, params }, res) => {
Workout.findByIdAndUpdate(
 params.id,
 { $push: { exerercise: body}},
 { new: true, runValidators: true }
).then(data => {
 res.json(data)
}).catch(err => {
 res.json(err)
})
})
 

//delete
router.delete("api/workouts", ({body}, res) => {
 Workout.findByIdAndDelete(body.id)
 .then(() => {
  res.json(true)
}).catch(err => {
  res.json(err)
})
});

module.exports = (router)