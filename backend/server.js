const express = require("express");
const cors = require("cors"); // Import CORS middleware
const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

const app = express();
const port = 3001;

// Enable CORS for all routes
app.use(cors());

app.get("/download-zip", (req, res) => {
  const project = req.query.project;
  const zipFilePath = path.join(__dirname, "download", "folder.zip");
  var folderToZip = "";
  if (project == "1") {
    folderToZip = path.join(__dirname, "pdf-to-word-converter");
  } else if (project == "2") {
    folderToZip = path.join(__dirname, "singlish-to-sinhala-converter");
  } else if (project == "3") {
    folderToZip = path.join(__dirname, "personal-finance-tracker");
  } else {
    folderToZip = "";
  }
  // Ensure the 'download' directory exists
  if (!fs.existsSync(path.dirname(zipFilePath))) {
    fs.mkdirSync(path.dirname(zipFilePath), { recursive: true });
  }

  // Create a write stream for the ZIP file
  const output = fs.createWriteStream(zipFilePath);
  const archive = archiver("zip", {
    zlib: { level: 9 }, // Maximum compression
  });

  // Pipe the archive data to the file
  archive.pipe(output);

  // Add files or folders to the ZIP archive
  archive.directory(folderToZip, false);

  // Finalize the archive (close the archive)
  archive.finalize();

  // Listen for the 'close' event to ensure the ZIP file is ready
  output.on("close", () => {
    console.log(`ZIP file has been created successfully.`);

    // Serve the ZIP file as a download
    res.download(zipFilePath, "folder.zip", (err) => {
      if (err) {
        console.error("Error while downloading:", err);
        res.status(500).send("Error while downloading the ZIP file.");
      }

      // Optionally delete the ZIP file after download
      fs.unlink(zipFilePath, (err) => {
        if (err) console.error("Error while deleting ZIP file:", err);
      });
    });
  });

  // Handle errors during the archiving process
  archive.on("error", (err) => {
    console.error("Error while creating ZIP:", err);
    res.status(500).send("Error while creating ZIP file");
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
