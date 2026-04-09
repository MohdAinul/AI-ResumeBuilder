import Resume from "../models/Resume.js";

//controller for creating a new resume
// POST: /api/resumes/create
export const createResume = async (req, res) => {
  try {
    const userId = req.userId;

    const { title } = req.body;

    const newResume = await Resume.create({ userId, title });

    return res
      .status(201)
      .json({ message: "Resume create successfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//controller for deleting a resume
// POST: /api/resumes/delete
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });

    return res.status(201).json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
