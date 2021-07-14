import Project from "../models/project.js";

export const getProjects = async (req, res) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.json(project);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Project.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Project deleted");
    }
    throw new Error("Project not found");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
