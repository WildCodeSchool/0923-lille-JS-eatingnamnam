const AbstractManager = require("./AbstractManager");

class CommentManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "item" as configuration
    super({ table: "comment_recipe_user" });
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} AS comment
      INNER JOIN nam_nam.user
      ON comment.user_id = user.id
      WHERE recipe_id = ?`,
      [id]
    );
    // Return the first row of the result, which represents the item
    return rows;
  }

  // create a new comment.
  async create(recipeId, userId, grade, comment) {
    const [newComment] = await this.database.query(
      `INSERT INTO ${this.table} (recipe_id, user_id, grade, comment, date_time) VALUE (?,?,?,?,NOW())`,
      [recipeId, userId, grade, comment]
    );

    return newComment.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    // Return the array of items
    return rows;
  }

  async averageRating(recipeID) {
    const [rows] = await this.database.query(
      `SELECT AVG(${this.table}.grade) as average_grade FROM ${this.table} WHERE recipe_id = ?;`,
      [recipeID]
    );
    return rows[0];
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
module.exports = CommentManager;
