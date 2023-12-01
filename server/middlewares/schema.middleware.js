export const validateSchema = (schema) => {
    return (req, res, next) => {
        const {error} = schema.validate(req.body);
        if (error) {
            return res.status(400).json({message: error.message});
        }
        next();
    };
};

// Path: backend/server/middlewares/verifyToken.middleware.js
// Compare this snippet from backend/server/controllers/auth.controller.js:
