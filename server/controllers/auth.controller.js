import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createToken } from "../libs/jwt.js";
import dotenv from "dotenv";

dotenv.config();

export const signup = async (req, res) => {
  try {
    const newUser = new User(req.body);
    // Hash the password before saving the user model
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;
    // Save the user
    await newUser.save();
    // Generate JWT token
    const token = await createToken({
      id: newUser._id,
    });
    res.cookie("token", token);
    res.json({
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
      createAt: newUser.createdAt,
      updateAt: newUser.updatedAt,
    });
  } catch (error) {
    console.error("Error:", error);
    // Handle different error scenarios
    if (error.name === "ValidationError") {
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ error: "Internal error, please try again" });
    }
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Buscar al usuario en la base de datos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Incorrect email" });
    }
    // Verificar la contraseña
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ error: "Incorrect password" });
    }
    // Crear un token
    const token = await createToken({
      id: user._id,
    });

    // Establecer el token en una cookie y enviar los datos del usuario
    res.cookie("token", token);
    res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      createAt: user.createdAt,
      updateAt: user.updatedAt,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
};
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logout successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
};
// Protected route for the logged in user
export const profile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
      createAt: user.createdAt,
      updateAt: user.updatedAt,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
}