const User = require('../model/modelUser'); // Ensure correct import

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Create a new User instance
        const newUser = new User({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        // Save to MongoDB
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
