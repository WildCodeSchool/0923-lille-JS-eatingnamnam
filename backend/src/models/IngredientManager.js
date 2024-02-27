const AbstractManager = require("./AbstractManager");

class IngredientManager extends AbstractManager {
  constructor() {
    super({ table: "ingredient" });
  }

  async create(ingredient) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [ingredient.name]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async ingredientListByRecipId(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ingredient
      INNER JOIN list_ingredients_recip as L on ingredient.id=L.ingredient_id WHERE L.recipe_id=?`,
      [id]
    );

    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async getByName(name) {
    const [rows] = await this.database.query(
      `SELECT id FROM ingredient WHERE name=?`,
      [name]
    );
    return rows[0];
  }
}

module.exports = IngredientManager;
