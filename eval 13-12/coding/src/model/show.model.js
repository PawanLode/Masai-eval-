const { Schema, model } = require('mongoose');

const showSchema = new Schema({
    timing: { type: String, required: true },
    total_seats:{type:Number, required: true},
    screens: { 
        type: Schema.Types.ObjectId,
        ref: "screen", 
        required: true
    },
     movie: { 
        type: Schema.Types.ObjectId,
        ref: "movie", 
        required: true
   }
}, {
    versionKey:false
});



module.exports = model("show", showSchema);