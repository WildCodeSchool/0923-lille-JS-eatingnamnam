const AbstractManager = require("./AbstractManager");

class FavoriteManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "list_favorites_recipe_user" });
  }

  // The C of CRUD - Create operation

  async create(item) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (title) VALUE (?)`,
      [item.title]
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
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

  async delete(userId, recipeId) {
    const affectedRow = await this.database.query(
      `DELETE FROM ${this.table} WHERE recipe_id =? && user_id =?`,
      [recipeId, userId]
    );
    return affectedRow;
  }
}

module.exports = FavoriteManager;
