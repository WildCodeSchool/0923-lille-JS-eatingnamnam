const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comment_recipe_user" });
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS comment
      INNER JOIN nam_nam.user
      ON comment.user_id = user.id
      WHERE recipe_id = ?`,
      [id]
    );
    return rows;
  }

  async create(recipeId, userId, grade, comment) {
    const [newComment] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, user_id, grade, comment, date_time) VALUE (?,?,?,?,NOW())`,
      [recipeId, userId, grade, comment]
    );
    return newComment.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }

  async averageRating(recipeID) {
    const [rows] = await this.database.query(
      `SELECT AVG(${this.table}.grade) as average_grade FROM ${this.table} WHERE recipe_id = ?;`,
      [recipeID]
    );
    return rows[0];
  }
}
module.exports = CommentManager;
