const jwt = require("jsonwebtoken");

const authenticateStudent = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized. Token missing." });
    }
    const token = authHeader.split(" ")[1];
     try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
            if (decoded.role !== "student") {
                return res.status(403).json({ message: "Forbidden. Not an student." });
            }
    
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(403).json({ message: "Invalid or expired token." });
        }
}
module.exports = authenticateStudent;