import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    region: {type: String, required: true},
    experience: {type: String, required: true},
    isAccepted: {type: Boolean, default: false},
})

const Employee = mongoose.models.application || mongoose.model('application', applicationSchema);

export default Employee;