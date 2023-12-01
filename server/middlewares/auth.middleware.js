import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    next();
  } catch (error) {
    console.error("Error:", error);
    res.status(401).json({ error: "Unauthorized" });
  }
};
