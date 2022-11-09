import {Schema, model} from 'mongoose';

const AccessModel = Schema({
    email: {type: String,  required: true},
    domain: {type: String, required: true},
    accessToken: {type: String, required: true}
});

export default model('Token', AccessModel);