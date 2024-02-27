const AbstractManager = require("./AbstractManager");

class UstensilManager extends AbstractManager {
  constructor() {
    super({ table: "ustensil" });
  }

  async create(ustensil) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [ustensil.name]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id = ?`,
      [id]
    );
    return rows;
  }

  async utensilByRecipeId(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table}
        INNER JOIN list_ustensils_recip AS ustensilList 
        ON ustensil.id = ustensilList.ustensil_id
        WHERE ustensilList.recipe_id=?`,
      [id]
    );

    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = UstensilManager;
