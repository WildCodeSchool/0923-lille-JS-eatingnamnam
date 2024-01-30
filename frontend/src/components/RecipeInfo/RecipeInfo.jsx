import "./RecipeInfo.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import StarBar from "../StarBar/StarBar";
import UploadComponant from "../UploadComponant/UploadComponant";

function RecipeInfo({ recipe, id }) {
  const navigate = useNavigate();
  const nbEuro = [
    {
      id: 1,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/euro.svg`,
    },
    {
      id: 2,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/euro.svg`,
    },
    {
      id: 3,
      src: `${import.meta.env.VITE_BACKEND_URL}/assets/images/euro.svg`,
    },
  ];

  const handleDelete = () => {
    try {
      fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipe.id}/delete`,
        {
          method: "delete",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      console.error(error);
    }
    navigate("/");
  };
  const admin = true;

  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const onSubmit = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/recipe/${recipe.id}/upload`,
        {
          method: "POST",
          body: formData,
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.info("File uploaded successfully:", data);
      } else {
        console.error("Error uploading file:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <section className="RecipeInfo">
      <img
        className="RecipeInfo__header"
        src={`${import.meta.env.VITE_BACKEND_URL}${recipe.picture}`}
        alt="une recette de cuisine"
      />
      <section className="RecipeInfo__info">
        <p className="RecipeInfo_info__p">"nb commentaire(s)"</p>
        <StarBar className="RecipeInfo_info__stars" id={id} />
      </section>
      <div className="RecipeInfo__info__title__container">
        <h1 className="RecipeInfo__info__title">{recipe.title}</h1>
        {admin === true ? (
          <button
            className="RecipeInfo__deleteButton"
            type="submit"
            onClick={handleDelete}
          >
            <img
              className="recipeInfo__deleteIcon"
              src={`${
                import.meta.env.VITE_BACKEND_URL
              }/assets/images/trashIcon.png`}
              alt="A trashbin icon"
            />
          </button>
        ) : (
          ""
        )}{" "}
      </div>

      <UploadComponant recipe={recipe} />
      <div>
        <input type="file" onChange={onFileChange} />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </div>

      <section className="RecipeInfo__details">
        <div className="RecipeInfo__details__difficulty">
          <img
            className="RecipeInfo__details__difficulty__hote"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/toque.svg`}
            alt="toque de cuisinier"
          />
          <p className="RecipeInfo__details__difficulty__text">
            {recipe.difficulty}
          </p>
        </div>
        <img
          className="RecipeInfo__details__union"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/union.svg`}
          alt="séparation"
        />
        <div className="RecipeInfo__details__time">
          <img
            className="RecipeInfo__details__time__clock"
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/time.svg`}
            alt="horloge"
          />
          <p className="RecipeInfo__details__time__text"> {recipe.time} </p>
        </div>
        <img
          className="RecipeInfo__details__union"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/union.svg`}
          alt="séparation"
        />

        <div className="RecipeInfo__details__price">
          {nbEuro.map((euro) => {
            return (
              <img
                key={euro.id}
                className="RecipeInfo__details__price__euro"
                src={euro.src}
                alt="pièce euro"
              />
            );
          })}
        </div>
      </section>
      <h2 className="RecipeInfo__nbShare">{recipe.number_share} personne(s)</h2>
    </section>
  );
}
RecipeInfo.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    number_share: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeInfo;
