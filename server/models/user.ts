import * as mongoose from "mongoose";
import { Schema }  from "mongoose";

let mongooseUniqueValidator = require('mongoose-unique-validator');

let schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},

});

schema.plugin(mongooseUniqueValidator);

let User = mongoose.model('User', schema);

export = User;