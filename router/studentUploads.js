const express = require('express');
const router = express.Router();
const multer = require('multer');
const Papa = require('papaparse');
const fs = require('fs');
const Data = require('../modal/Data');
const cors = require('cors');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

function parseCSVStream(readableStream) {
  return new Promise((resolve, reject) => {
    const results = [];
    const parser = Papa.parse(Papa.NODE_STREAM_INPUT, { header: true });
    parser.on('data', (data) => {
      results.push(data);
    });
    parser.on('end', () => {
      resolve(results);
    });
    parser.on('error', (error) => {
      reject(error);
    });
    readableStream.pipe(parser);
  });
}

router.post('/', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const batch = req.body.batch;
    console.log("enter backend");
    if (!file || !batch) {
      return res.status(400).json({ message: 'Please select a batch and upload a file.' });
    }
    
    const readableStream = fs.createReadStream(`./uploads/${file.filename}`);
    const results = await parseCSVStream(readableStream);
    console.log(results);

    const students = results.map((row) => ({
      name: row.name,
      rollno: row.rollno,
      batch: parseInt(batch),
      departement: row.department,
      alumni: row.alumni === 'true',
      mobile: row.mobile,
      password: row.password,
    }));

    await Data.insertMany(students);
    res.status(200).json({ message: 'Students uploaded successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to upload students.' });
  }
});

module.exports = router;
