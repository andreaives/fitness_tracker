// creating model do schema things
//activity 11 user schema 

//virtual function 

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    excercises: [
      {
        type: {
          type: String,
          required: "You must choose a type."
        },
        name: {
          type: String,
          required: "You must choose a name."
        },
        duration: {
          type: Number,
          required: "You must choose a duration."
        },
        weights: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }, {
  toJSON: {
    virtuals: true
  }
}
)

workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce(function (total, exercise) {
    return total + exercise.duration
  }, 0)
})

const workout = mongoose.model("Workout", workoutSchema)
module.exports = workout
