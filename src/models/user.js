const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        password: {
            type: String,
            default: 0
        },
        phone_number: {
            type: Number,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        admin: {
            type: mongoose.Types.ObjectId,
            ref: "admin"
        },
        role: {
            type: String,
            enum: ["admin", "user"]
        },
        is_active: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const user = mongoose.model("user", userSchema);
module.exports = user;