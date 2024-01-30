/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PropTypes, { shape } from "prop-types";
import "./AddSteps.scss";

/**
 *
 * @returns add steps to the add recipe page
 */

function AddSteps({ stepsArr, setStepsArr, setDescription }) {
  const [numberStep, setNumberStep] = useState(1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful },
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful);
    reset();
  }, [isSubmitSuccessful, reset]);

  const onSubmitStep = (data, event) => {
    event.preventDefault();
    setNumberStep(numberStep + 1);
    setDescription(data.stepDescription);
    const stepObj = { id: numberStep, desc: data.stepDescription };
    setStepsArr([...stepsArr, stepObj]);
  };

  return (
    <section className="step">
      <h2 className="step__title">Préparation</h2>
      <ul className="step__liste">
        {stepsArr.map((step) => (
          <li key={step.id} className="step__liste__texte">
            <span>
              Étape {step.id}:<br />
            </span>
            {step.desc}
          </li>
        ))}
      </ul>
      <h3 className="step__titleNumber">Étape {numberStep}: </h3>
      <form className="step__form" onSubmit={handleSubmit(onSubmitStep)}>
        <textarea
          className="step__form__addTexte"
          name="step description"
          rows="3"
          defaultValue=""
          placeholder="Décrivez l'étape"
          {...register("stepDescription")}
        />

        <input
          type="submit"
          value="Ajouter une étape"
          className="step__form__button"
        />
      </form>
    </section>
  );
}
AddSteps.propTypes = {
  setDescription: PropTypes.func.isRequired,
  setStepsArr: PropTypes.func.isRequired,
  stepsArr: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AddSteps;
