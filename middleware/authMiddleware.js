const jwt = require ('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        
        const authHeader = req.headers.authorization;
        
        if(!authHeader) {
            return res.status(401).json({message: 'Token required', data: null});
        }
        const token = req.headers.authorization.split('')[1];

        const decoded = jwt.verify(
            token,
            process.env.JWTSECRET_KEY
        );

        req.facultyId = decoded.id;

        next();

    } catch (error) {
        
        res.status(404).json({message: 'Invalid token', data: error});

        console.log("error in middleware", error);

    }
} 