const router = require("express").Router()
const db = require("../models")

router.get("/api/workouts/range", function (req, res){
 db.Workout.find().limit(7)
 .then((data)=>{
  res.json(data)
 }).catch((err)=> {
 res.json(err)
})
})

router.get("/api/workouts", function (req, res){
 db.Workout.find().then(function (data){
  res.json(data)
 }).catch(function(err){
  res.json(err)
 })
})

router.post("/api/workouts", (req,res) => {
 db.Workout.create(req.body).then((data)=> {
  res.json(data)
 }).catch((err)=>{
  res.status(500).json(err)
 })
})
