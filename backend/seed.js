const users = require("./src/dataBDD/users.json");
const ingredients = require("./src/dataBDD/ingredients.json");
const ustensils = require("./src/dataBDD/ustensils.json");
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data
    // Insert data into the 'user' table

    for (let i = 0; i < users.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO nam_nam.user(first_name, last_name, pseudo, email, password, birth_date, profile_picture, background_picture, role) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            users[i].first_name,
            users[i].last_name,
            users[i].pseudo,
            users[i].email,
            users[i].password,
            users[i].birth_date,
            users[i].profile_picture,
            users[i].background_picture,
            users[i].role,
          ]
        )
      );
    }

    // Insert data into the 'user' table

    for (let i = 0; i < ingredients.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO nam_nam.ingredient(name, picture) values (?, ?)",
          [ingredients[i].name, ingredients[i].picture]
        )
      );
    }
    for (let i = 0; i < ustensils.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO nam_nam.ustensil(name, picture) values (?, ?)",
          [ustensils[i].name, ustensils[i].picture]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
