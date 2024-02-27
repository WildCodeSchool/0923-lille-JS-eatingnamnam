const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const recipeControllers = require("./controllers/recipeControllers");
const ustensilControllers = require("./controllers/ustensilControllers");
const tagControllers = require("./controllers/tagControllers");
const userControllers = require("./controllers/userControllers");
const ingredientControllers = require("./controllers/ingredientControllers");
const commentControllers = require("./controllers/commentControllers");
const stepControllers = require("./controllers/stepControllers");
const { hashPassword } = require("./middleware/hashPassword");
const authControllers = require("./controllers/authControllers");
const { uploadService, handleFileUpload } = require("./services/upload");
const { authorize } = require("./middleware/auth");

router.get("/me", authorize, userControllers.readByCookieId);
router.delete("/recipe/:id/delete", recipeControllers.deleteById);
router.get("/recipe", recipeControllers.browse);
router.get("/recipe/:id", recipeControllers.recipeById);
router.get("/recipe/:id/utensils", ustensilControllers.utensilByRecipeId);
router.get("/recipe/:id/comments", commentControllers.commentByRecipeId);
router.get("/recipe/:id/steps", stepControllers.stepByRecipeId);
router.post(
  "/upload",
  uploadService,
  handleFileUpload,
  recipeControllers.uploadPic
);
router.post(
  "/recipe/:id/upload",
  uploadService,
  handleFileUpload,
  recipeControllers.uploadPic
);
router.post("/user/:id/add/recipe", recipeControllers.add);
router.post("/add/steps", stepControllers.add);

router.post("/add/comment", commentControllers.addComments);

router.get("/recipe/tag/:id", recipeControllers.recipeByTag);
router.get(
  "/recipe/:id/ingredients",
  ingredientControllers.ingredientListByRecipId
);
router.get("/recipe/fav/user/:id", recipeControllers.recipeByFav);
router.get("/randomrecipe", recipeControllers.randomRecipe);
router.get("/tag", tagControllers.browseByTag);
router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.readById);
router.get("/recipe/user/:id", recipeControllers.recipeByUserId);
router.post("/adduser", hashPassword, userControllers.register);
router.post("/login", authControllers.login);
router.get("/logout", authControllers.logout);
router.get("/step/:id", stepControllers.stepByRecipeId);
router.get("/grade/:recipeID", commentControllers.rating);
router.get("/ingredients", ingredientControllers.browse);

/* ************************************************************************* */

module.exports = router;
