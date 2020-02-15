const mongoose = require('mongoose');
const { Schema, model } = mongoose; 


dragonSchema = new Schema ({
  name: { type: String },
  location: { type: String },
  coolFactor: { 
    type: Number,
    emun: [1, 2, 3, 4, 5]
  },
  image: { type: String }
});


const Dragon = model('Dragon', dragonSchema);
module.exports = Dragon; 