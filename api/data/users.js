const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin123", 10),
    isAdmin: true,
  },
  {
    name: "Adewale",
    email: "adewale@example.com",
    password: bcrypt.hashSync("adewale123", 10),
    isAdmin: false,
  },
];

module.exports = users;
