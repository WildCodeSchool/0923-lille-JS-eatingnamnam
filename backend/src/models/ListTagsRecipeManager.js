/* const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "list_tags_recipe" });
  }

  async recipeByTag(id) {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE tag_id = ?`,
      [id]
    );
    // Return the array of items
    return rows;
  }
}

module.exports = RecipeManager;
 */
