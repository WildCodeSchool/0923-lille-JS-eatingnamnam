const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "recipe" });
  }

  async create(
    title,
    picture,
    time,
    date,
    price,
    difficulty,
    userId,
    stepsArr
  ) {
    try {
      const [resultRecipe] = await this.database.query(
        `INSERT INTO ${this.table} (title, picture, time, date, price, difficulty, number_share, user_id) VALUE (?,?,?,?,?,?,?,?)`,
        [
          title,
          "/assets/recette/defaultPictureRecipe.png",
          time,
          "2024-02-01",
          price,
          difficulty,
          4,
          userId,
        ]
      );

      const recipeId = resultRecipe.insertId;
      for (let i = 0; i < stepsArr.length; i += 1) {
        this.database.query(
          `INSERT INTO nam_nam.step ( number_step, description, recipe_id) VALUE (?,?,?);`,
          [stepsArr[i].id, stepsArr[i].desc, recipeId]
        );
      }

      // Return the ID of the newly inserted item
      return resultRecipe.insertId;
    } catch (error) {
      return error;
    }
  }

  async recipeByFav(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      ` SELECT * FROM ${this.table}
      INNER JOIN nam_nam.list_favorites_recipe_user AS fav
      ON recipe.id = fav.recipe_id
      WHERE fav.user_id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows;
  }

  async recipeById(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where recipe.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async randomRecipe() {
    // check the length of the database and store the length in a variable count
    const [count] = await this.database.query(`
      SELECT COUNT(id) as result FROM ${this.table}`);

    // randomize a number in range of the database length
    const random = Math.floor(Math.random() * count[0].result + 1);

    // Execute the SQL request to display the recipe with the random number generated
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}
       WHERE recipe.id = ?`,
      [random]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of items
    return rows;
  }

  async recipeByTag(id) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT recipe.* FROM recipe
      INNER JOIN list_tags_recipe AS tags_id
      ON recipe.id=tags_id.recipe_id
      WHERE tags_id.tag_id = ?`,
      [id]
    );
    // Return the array of items
    return rows;
  }

  async delete(id) {
    try {
      await this.database.query("START TRANSACTION");
      const [rows] = await this.database.query(
        `DELETE FROM nam_nam.step WHERE recipe_id = ?`,
        [id]
      );
      await this.database.query(
        `DELETE FROM nam_nam.list_ustensils_recip WHERE recipe_id = ?`,
        [id]
      );
      await this.database.query(
        `DELETE FROM nam_nam.comment_recipe_user WHERE recipe_id = ?`,
        [id]
      );
      await this.database.query(
        `DELETE FROM nam_nam.list_tags_recipe WHERE recipe_id = ?`,
        [id]
      );
      await this.database.query(
        `DELETE FROM nam_nam.list_ingredients_recip WHERE recipe_id = ?`,
        [id]
      );
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
      await this.database.query("COMMIT");
      return rows[0];
    } catch (error) {
      await this.database.query("ROLLBACK");
      console.error(error);
      return error;
    }
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = RecipeManager;
