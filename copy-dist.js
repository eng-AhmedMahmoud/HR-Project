const fs = require('fs');
const path = require('path');

// Function to copy directory recursively
function copyDirectory(source, destination) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }

  // Read all items in source directory
  const items = fs.readdirSync(source, { withFileTypes: true });

  // Process each item
  for (const item of items) {
    const srcPath = path.join(source, item.name);
    const destPath = path.join(destination, item.name);

    if (item.isDirectory()) {
      // Recursively copy subdirectories
      copyDirectory(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Define source and destination directories
const sourceDir = path.join(__dirname, 'dist');
const destDir = path.join(__dirname, 'public');

// Perform the copy operation
console.log(`Copying files from ${sourceDir} to ${destDir}...`);
copyDirectory(sourceDir, destDir);
console.log('Files copied successfully!'); 