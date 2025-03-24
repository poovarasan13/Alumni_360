const Internship = require("../modal/Internship");

// Create Internship
exports.createInternship = async (req, res) => {
  try {
    const { rollno,name, description, company, duration } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newInternship = new Internship({ rollno,name, description, company, duration, image });
    await newInternship.save();

    res.status(201).json({ internship: newInternship });
  } catch (error) {
    res.status(500).json({ error: "Failed to create internship" });
  }
};

// List All Internships
exports.listInternships = async (req, res) => {
  const { rollno } = req.params;
  try {
    const internships = await Internship.find({rollno});
    res.json(internships);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch internships" });
  }
};

// Update Internship
exports.updateInternship = async (req, res) => {
  try {
    const { name, description, company, duration } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ error: "Internship not found" });
    }

    internship.name = name;
    internship.description = description;
    internship.company = company;
    internship.duration = duration;
    if (image) {
      internship.image = image;
    }

    await internship.save();
    res.json({ internship });
  } catch (error) {
    res.status(500).json({ error: "Failed to update internship" });
  }
};

// Delete Internship
exports.deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    res.json({ message: "Internship deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete internship" });
  }
};
