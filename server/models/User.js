import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        required: true,
        default: false
    },
},{
    timestamps: true,
})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.hash(this.password, salt);
});
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

const User = mongoose.model('User', userSchema);

export default User;