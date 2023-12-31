const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const recipeControllers = require("./controllers/recipeControllers");
const ustensilControllers = require("./controllers/ustensilControllers");
const tagControllers = require("./controllers/tagControllers");
const userControllers = require("./controllers/userControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const commentControllers = require("./controllers/commentControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);
router.get("/recipe", recipeControllers.browse);
router.get("/randomrecipe", recipeControllers.randomRecipe);
router.get("/ustensil", ustensilControllers.browse);
router.get("/tag", tagControllers.browseByTag);
router.get("/tag/:id", recipeControllers.recipeByTag);
router.get("/user", userControllers.browse);
router.get("/ingredient", ingredientControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);
router.get("/grade/:recipeID", commentControllers.rating);
// Route to add a new item
router.post("/items", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
