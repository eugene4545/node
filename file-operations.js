const fs = require("fs");

// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) {
    console.error("Error creating the file.");
  } else {
    console.log("File 'welcome.txt' created successfully.");
  }
});

// Read and display the content of "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file.");
  } else {
    console.log("Content of 'welcome.txt':", data);
  }
});
