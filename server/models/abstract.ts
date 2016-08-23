import * as mongoose from "mongoose";
import { Schema }  from "mongoose";

let mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
    title: { type: String, required: true},
    content: {type: String, required: true },
    user: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date}
    // email: {type: String, required: true, unique: true},

});

schema.plugin(mongooseUniqueValidator);

let Abstract = mongoose.model('Abstract', schema);

export default Abstract 

