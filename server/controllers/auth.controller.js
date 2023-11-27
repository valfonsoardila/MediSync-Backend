export const signup = async (req, res) => {
  console.log("Signup route called");
  res.send("signup route");
};

export const signin = async (req, res) => {
  console.log("Signin route called");
  res.send("signin route");
};

export const logout = async (req, res) => {
  console.log("Logout route called");
  res.send("logout route");
};
