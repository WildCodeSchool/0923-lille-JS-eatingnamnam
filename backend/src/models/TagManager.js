const AbstractManager = require("./AbstractManager");

class TagManager extends AbstractManager {
  constructor() {
    super({ table: "tag" });
  }

  async create(tag) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name) VALUES (?)`,
      [tag.name]
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

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async readAllTags() {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE picture IS NOT NULL`
    );
    return rows;
  }
}

module.exports = TagManager;
