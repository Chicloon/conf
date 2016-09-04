import * as mongoose from "mongoose";
import { Schema }  from "mongoose";

let mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
    author: { type: String, required: true },
    section: {type: String, required: true},
    title: { type: String, required: true},
    content: {type: String, required: true },
    createdBy: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    createdAt: {type: Date},
});

schema.plugin(mongooseUniqueValidator);

let Abstract = mongoose.model('Abstract', schema);

export default Abstract 

