// const tables = require("../tables");

// const ingredientId = (req, res, next) => {
//   console.log("count des ingrdient", req.body.ingredientArr.length);
//   const ingredientsIdList = [];

// //   async function ingredientID(ingredientName) {
//     // await tables.ingredient.getByName(ingredientName);
//   }
//   //   async function tototest() {
//   //     for await (const totoId of req.body.ingredientArr) {
//   //       let pouet = tables.ingredient.getByName(totoId.ingredientName);
//   //       console.log("pouet poeut =>", pouet);
//   //       console.log("totoId", totoId);
//   //     }
//   //   }
//   //   tototest();
//   for (let i = 0; i < req.body.ingredientArr.length; i += 1) {
//     const ing = tables.ingredient.getByName(
//       req.body.ingredientArr[i].ingredientName
//     );
//     ingredientsIdList.push(ing);
//     // console.log("ing", ing);
//   }
// //   const AllPromise = Promise.all(ingredientsIdList);
// //   AllPromise.then((values) => console.log("All Promise: ", values));
//   if (ingredientsIdList[0] !== null) {
//     next();
//   } else res.sendStatus(404);
// // };

// module.exports = { ingredientId };
