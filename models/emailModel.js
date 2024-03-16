import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "email is required"],
        lowercase: true,
        trim: true,
        unique: true
    }
})

const Email = mongoose.models.emails || mongoose.model('emails',EmailSchema);

export default Email;