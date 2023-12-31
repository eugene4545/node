const generator = require("generate-password");

// Generate a random password
const password = generator.generate({
  length: 12, //maximun of 12 characters
  numbers: true,
  symbols: true,
  uppercase: true,
  strict: true,
});

console.log("Generated Password:", password);
