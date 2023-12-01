export const validateSchema = (schema) => (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      return res
        .status(400)
        .json({ message: error.errors.map((error) => error.message) });
    }
  };

// Path: backend/server/middlewares/verifyToken.middleware.js
// Compare this snippet from backend/server/controllers/auth.controller.js:
