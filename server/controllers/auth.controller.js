import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
    console.log("New user: ", newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log("Signin route called");
};

export const logout = async (req, res) => {
  console.log("Logout route called");
  res.send("logout route");
};
