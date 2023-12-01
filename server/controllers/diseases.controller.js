import Diseases from "../models/diseases.model.js";

// Create and Save a new Disease
export const createDisease = async (req, res) => {
  try {
    const newDiseases = new Diseases(req.body);
    await newDiseases.save();
    res.status(201).json(newDiseases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
};
export const getDiseases = async (req, res) => {
  try {
    const diseases = await Diseases.find();
    res.status(200).json(diseases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
}
export const getDiseaseById = async (req, res) => {
  try {
    const disease = await Diseases.findById(req.params.id);
    if (!disease) {
      return res.status(404).json({ error: "Disease not found" });
    }
    res.status(200).json(disease);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
}
export const updateDiseaseById = async (req, res) => {
   try{
    const disease = await Diseases.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!disease) {
      return res.status(404).json({ error: "Disease not found" });
    }
    res.status(200).json(disease);
   }
    catch(error){
      console.error(error);
      res.status(500).json({ error: "Internal error, please try again" });
    }
}
export const deleteDiseaseById = async (req, res) => {
  try{
    const disease = await Diseases.findByIdAndDelete(req.params.id);
    if (!disease) {
      return res.status(404).json({ error: "Disease not found" });
    }
    res.status(200).json({ message: "Disease deleted successfully" });
  }
  catch(error){
    console.error(error);
    res.status(500).json({ error: "Internal error, please try again" });
  }
}