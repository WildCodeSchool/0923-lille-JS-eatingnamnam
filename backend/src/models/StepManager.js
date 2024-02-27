const AbstractManager = require("./AbstractManager");

class StepManager extends AbstractManager {
  constructor() {
    super({ table: "step" });
  }

  async create(step) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (number_step, description, recipe_id) VALUE (?, ?, ?)`,
      [step.numberStep, step.description, 1]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE recipe_id = ?`,
      [id]
    );
    return rows;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = StepManager;
