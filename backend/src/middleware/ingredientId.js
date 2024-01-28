const tables = require("../tables");

const ingredientId = (req, res, next) => {
  console.warn("count des ingrdient", req.body.ingredientArr.length);
  const ingredientsIdList = [];

  async function ingredientID(ingredientName) {
    await tables.ingredient.getByName(ingredientName);
  }
  async function tototest() {
    for await (const totoId of req.body.ingredientArr) {
      const pouet = tables.ingredient.getByName(totoId.ingredientName);
      console.warn("pouet poeut =>", pouet);
      console.warn("totoId", totoId);
      console.warn(ingredientID);
    }
  }
  tototest();
  for (let i = 0; i < req.body.ingredientArr.length; i += 1) {
    const ing = tables.ingredient.getByName(
      req.body.ingredientArr[i].ingredientName
    );
    ingredientsIdList.push(ing);
    console.warn("ing", ing);
  }
  const AllPromise = Promise.all(ingredientsIdList);
  AllPromise.then((values) => console.warn("All Promise: ", values));
  if (ingredientsIdList[0] !== null) {
    next();
  } else res.sendStatus(404);
};

module.exports = { ingredientId };
