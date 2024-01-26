// const tables = require("../tables");

// const add = async (req, res, next) => {
//   // Extract the item data from the request body
//   // console.log("njqskn", req.params.id, req.body);
//   const { title, date, picture, stepsArr, ingredientArr } = req.body;
//   const { time, price, difficulty, diet, type, season } = req.body.info;
//   const user_id = req.params.id;
//   try {
//     // console.log("body ingredient", req.body.ingredientArr[0].ingredientName);
//     for (let i = 0; i < req.body.ingredientArr.length; i += 1) {
//       const ingredientID = tables.ingredient.getByName(
//         req.body.ingredientArr.ingredientName
//       );
//       // console.log("reult boucle ingredient", ingredientID);
//     }

//     if (ingredientID !== null) {
//       // Insert the item into the database
//       const insertId = await tables.recipe.create(
//         title,
//         picture,
//         time,
//         date,
//         price,
//         difficulty,
//         user_id,
//         stepsArr,
//         ingredientArr,
//         diet,
//         type,
//         season
//       );
//       return insertId;
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const browse = async (req, res, next) => {
//   try {
//     // Fetch all items from the database
//     const recipe = await tables.recipe.readAll();

//     // Respond with the items in JSON format
//     res.json(recipe);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const recipeByFav = async (req, res, next) => {
//   try {
//     // Fetch a specific item from the database based on the provided ID
//     const recipe = await tables.recipe.recipeByFav(req.params.id);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (recipe == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(recipe);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const recipeById = async (req, res, next) => {
//   try {
//     // Fetch a specific item from the database based on the provided ID
//     const recipe = await tables.recipe.recipeById(req.params.id);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (recipe == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(recipe);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const deleteById = async (req, res, next) => {
//   try {
//     // Fetch a specific item from the database based on the provided ID
//     const recipe = await tables.recipe.delete(req.params.id);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (recipe == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(recipe);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const randomRecipe = async (req, res, next) => {
//   try {
//     // Fetch all items from the database
//     const recipe = await tables.recipe.randomRecipe();

//     // Respond with the items in JSON format
//     res.json(recipe);
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// const recipeByTag = async (req, res, next) => {
//   try {
//     // Fetch a specific item from the database based on the provided ID
//     const recipes = await tables.recipe.recipeByTag(req.params.id);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (recipes == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(recipes);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

// module.exports = {
//   add,
//   browse,
//   deleteById,
//   randomRecipe,
//   recipeByFav,
//   recipeById,
//   recipeByTag,
// };
