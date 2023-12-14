const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a User name"]
        },
        email: {
            type: String,
            required: true,
            unique: true

        },
        phone: {
            type: Number,
            required: true,
        },
        gender: {
            type: String,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const User = mongoose.model('User', userSchema);

module.exports = User;
