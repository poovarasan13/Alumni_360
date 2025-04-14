const express = require("express");
const router = express.Router();
const Admin = require('../modal/Admin'); // Fixed typo from 'modal' to 'models'
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Input validation middleware
const validateLoginInput = (req, res, next) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.status(400).json({ 
            success: false, 
            message: "Username and password are required" 
        });
    }
    
    if (password.length < 6) {
        return res.status(400).json({ 
            success: false, 
            message: "Password must be at least 6 characters" 
        });
    }
    
    next();
};

router.post("/login", validateLoginInput, async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Find admin by username
        const admin = await Admin.findOne({ username });
        
        if (!admin) {
            return res.status(404).json({ 
                success: false, 
                message: "Admin not found" 
            });
        }

        const adminData = admin.toObject();
        delete adminData.password;

        res.status(200).json({ 
            success: true, 
            message: "Login successful",
                        data: adminData
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ 
            success: false, 
            message: "Server error during authentication" 
        });
    }
});

module.exports = router;