const mongoose = require('mongoose');

const conn = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://user:fry2BLzWx1Uzul4E@cluster0.14slv.mongodb.net/")
            .then(() => {
                console.log("connected");
            });
        // Optionally, handle success if `res` is provided
        if (res) {
            res.status(200).json({
                message: "connected"
            });
        }
    } catch (error) {
        if (res) {
            res.status(400).json({
                message: "not connected"
            });
        } else {
            console.error('Failed to connect:', error);
        }
    }
};


conn();

