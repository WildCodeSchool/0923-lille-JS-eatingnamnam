// import React, { useState } from "react";
// import { Rating } from "react-simple-star-rating";

function StarBar() {
  const gradesRecipe = 4;

  const fullStars = Array(5).fill("src/assets/star.svg");
  const emptyStars = Array(5).fill("src/assets/emptyStar.svg");

  // const [rating, setRating] = useState(0);

  // const handleRating = (rate) => {
  //   console.log(rate);
  //   setRating(rate);
  // };

  // ///////////////////////////////////////
  // const gradesRecipe = [2, 1, 3, 3];

  // function sumGrades(accumulator, value) {
  //   return accumulator + value;
  // }
  // const mediumGrades = gradesRecipe.reduce(sumGrades) / gradesRecipe.length;

  return (
    <div>
      {fullStars.slice(5 - gradesRecipe).map((fullStar) => {
        return <img src={fullStar} alt="star" />;
      })}

      {emptyStars.slice(gradesRecipe).map((emptyStar) => {
        return <img src={emptyStar} alt="empty star" />;
      })}
    </div>
    // <div className="App">
    //   <Rating onClick={handleRating} ratingValue={rating} allowFraction />
    //   <Rating />
    // </div>
    //    <img src="src/assets/star.svg" alt="star" />
    //   <img src="src/assets/star.svg" alt="star" />
    //    <img src="src/assets/star.svg" alt="star" />
    //    <img src="src/assets/star.svg" alt="star" />
    //    <img src="src/assets/emptyStar.svg" alt="empty star" />
    //   {" "}
    // </div>
    // /////////////////////////////////////////////////////////////////////////
    //     { mediumGrades <= 1 ? <div>
    //       <img src="src/assets/star.svg" alt="star" />
    //       <img src="src/assets/emptyStar.svg" alt="empty star" />
    //       <img src="src/assets/emptyStar.svg" alt="empty star" />
    //       <img src="src/assets/emptyStar.svg" alt="empty star" />
    //       <img src="src/assets/emptyStar.svg" alt="empty star" />
    //     </div> :
    //     mediumGrades <=2 ? <div>
    //     <img src="src/assets/star.svg" alt="star" />
    //     <img src="src/assets/star.svg" alt="star" />
    //     <img src="src/assets/emptyStar.svg" alt="empty star" />
    //     <img src="src/assets/emptyStar.svg" alt="empty star" />
    //     <img src="src/assets/emptyStar.svg" alt="empty star" />
    //   </div> :
    //   mediumGrades <=3 ?
    //   <div>
    //   <img src="src/assets/star.svg" alt="star" />
    //   <img src="src/assets/star.svg" alt="star" />
    //   <img src="src/assets/star.svg" alt="star" />
    //   <img src="src/assets/emptyStar.svg" alt="empty star" />
    //   <img src="src/assets/emptyStar.svg" alt="empty star" />
    // </div> :
    // mediumGrades <= 4 ?   <div>
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // </div> :
    // mediumGrades <= 5 ?   <div>
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // <img src="src/assets/star.svg" alt="star" />
    // </div> :
    // <div>
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // <img src="src/assets/emptyStar.svg" alt="empty star" />
    // </div>
    //   }
  );
}
export default StarBar;
