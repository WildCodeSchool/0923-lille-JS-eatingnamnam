const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    /*       Call the constructor of the parent class (AbstractManager)
      and pass the table name "item" as configuration */
    super({ table: "recipe" });
  }

  async recipeByFav(id) {
    const [rows] = await this.database.query(
      ` SELECT * FROM ${this.table}
       INNER JOIN nam_nam.list_favorites_recipe_user AS fav
       ON recipe.id = fav.recipe_id
       WHERE fav.user_id = ?`,
      [id]
    );

    return rows;
  }

  async recipeById(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} where recipe.id = ?`,
      [id]
    );

    return rows[0];
  }

  async randomRecipe() {
    const [count] = await this.database.query(`
       SELECT COUNT(id) as result FROM ${this.table}`);

    const random = Math.floor(Math.random() * count[0].result + 1);

    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}
        WHERE recipe.id = ?`,
      [random]
    );

    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    return rows;
  }

  async recipeByTag(id) {
    const [rows] = await this.database.query(
      `SELECT recipe.* FROM recipe
       INNER JOIN list_tags_recipe AS tags_id
       ON recipe.id=tags_id.recipe_id
       WHERE tags_id.tag_id = ?`,
      [id]
    );

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
}

module.exports = RecipeManager;
