const Webinar = require("../modal/Webinar");
const fs = require("fs");
const path = require("path");


exports.createWebinar = async (req, res) => {
  try {
    const { rollno, webinarname, time, description,link } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";
    
    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required!" });
    }

    const newWebinar = new Webinar({
      rollno,
      webinarname,
      time,
      description,
      image: imagePath,
      link
    });
    await newWebinar.save();

    res.status(201).json({ message: "Webinar created successfully", webinar: newWebinar });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.getWebinars = async (req, res) => {
  try {
    const { rollno } = req.user; 

    const webinars = await Webinar.find({ rollno });
    res.status(200).json(webinars);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.listWebinars = async (req, res) => {
  try {
    const { rollno } = req.params;

    if (!rollno) {
      return res.status(400).json({ error: "Roll number is required!" });
    }

    const webinars = await Webinar.find({ rollno: rollno });
    res.status(200).json(webinars);
  } catch (error) {
    console.error("Error fetching webinars:", error);
    res.status(500).json({ error: "Server error" });
  }
};


exports.updateWebinar = async (req, res) => {
  try {
    const { rollno, webinarname, time, description ,link} = req.body;
    const existingWebinar = await Webinar.findById(req.params.id);

    if (!existingWebinar) {
      return res.status(404).json({ error: "Webinar not found" });
    }

    let imagePath = existingWebinar.image;
    if (req.file) {
      imagePath = `/uploads/${req.file.filename}`;
      if (existingWebinar.image) {
        fs.unlinkSync(path.join(__dirname, "..", existingWebinar.image));
      }
    }

    const updatedWebinar = await Webinar.findByIdAndUpdate(
      req.params.id,
      { rollno, webinarname, time, description, image: imagePath ,link},
      { new: true }
    );

    res.status(200).json({ message: "Webinar updated successfully", webinar: updatedWebinar });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error.message });
  }
};


exports.deleteWebinar = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWebinar = await Webinar.findByIdAndDelete(id);

    if (!deletedWebinar) {
      return res.status(404).json({ message: "Webinar not found" });
    }

    res.json({ message: "Webinar deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting webinar" });
  }
};
