import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating onClick={handleRating} ratingValue={rating} fillColor="#D56C06" />
    </div>
  );
}
export default StarRating;
