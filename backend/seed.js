const users = require("./src/dataBDD/users.json");
const ingredients = require("./src/dataBDD/ingredients.json");
const ustensils = require("./src/dataBDD/ustensils.json");
const tags = require("./src/dataBDD/tags.json");
const recipe = require("./src/dataBDD/recipe.json");
const listTagsRecipe = require("./src/dataBDD/listTagsRecipe.json");

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

    // Insert data into the 'ingredient' table

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
    for (let i = 0; i < tags.length; i += 1) {
      queries.push(
        database.query("INSERT INTO nam_nam.tag(name, picture) values (?, ?)", [
          tags[i].name,
          tags[i].picture,
        ])
      );
    }

    // insert data into the 'recipe' table
    for (let i = 0; i < recipe.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO nam_nam.recipe(title, picture, time, date, price, difficulty, number_share, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)",
          [
            recipe[i].title,
            recipe[i].picture,
            recipe[i].time,
            recipe[i].date,
            recipe[i].price,
            recipe[i].difficulty,
            recipe[i].number_share,
            recipe[i].user_id,
          ]
        )
      );
    }
    for (let i = 0; i < listTagsRecipe.length; i += 1) {
      queries.push(
        database.query(
          "INSERT INTO nam_nam.list_tags_recipe(recipe_id, tag_id) values (?,?)",
          [listTagsRecipe[i].recipe_id, listTagsRecipe[i].tag_id]
        )
      );
    }
    // insert data into the 'comment_recipe_user' table

    queries.push(
      database.query(
        `INSERT INTO nam_nam.comment_recipe_user(recipe_id, user_id, grade, comment, date_time) VALUES 
        (1,1,5,'Meilleur recette de ma vie !!!','2024-01-04'),
        (1,2,3,'ca va','2024-01-04'),
        (1,3,3,'imotep','2024-01-04'),
        (1,4,4,'','2024-01-04'),
        (2,1,5,'Super recette, j ai redécouvert ce plat !','2024-01-04'),
        (3,1,4,'Toute la famille à apprécier','2024-01-04'),
        (4,3,3,'imotep','2024-01-04'),
        (5,4,4,'','2024-01-04'),
        (6,3,3,'Tip Top','2024-01-04');
        `
      )
    );

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
