import React, { useState } from "react";
import SectionHeading from "../UI/SectionHeading";
import validateLength from "../../utilities/js/lengthValidation";
import "./NewCardForm.scss";
import ErrorLabel from "../UI/ErrorLabel";
import luhnValidation from "../../utilities/js/luhnValidation";
import allowNumberOnly from "../../utilities/js/allowOnlyNumber";
import Wrapper from "../UI/Wrapper";
import allowTowDecimalNumberOnly from "../../utilities/js/allowOnlyTwoDigitDecimal";

const NewCardForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredCardNumber, setEnteredCardNumber] = useState("");
  const [enteredLimit, setEnteredLimit] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isCardValid, setIsCardValid] = useState(true);
  const [isLimitValid, setIsLimitValid] = useState(true);
  const [error, setError] = useState();

  const nameChangeHandler = (e) => {
    setError(null);
    setIsNameValid(true);
    setEnteredName(e.target.value);
  };

  const cardNumberChangeHandler = (e) => {
    setIsCardValid(true);
    setError(null);
    if (allowNumberOnly(e.target.value)) {
      setEnteredCardNumber(() => e.target.value);
    } else {
      setEnteredCardNumber(() => e.target.value.slice(0, -1));
    }
  };

  const limitChangeHandler = (e) => {
    setError(null);
    setIsLimitValid(true);
    setEnteredLimit(() => allowTowDecimalNumberOnly(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateLength(enteredName)) {
      setIsNameValid(false);
      setError({ title: "Name cannot be empty." });
      return;
    }
    if (validateLength(enteredCardNumber)) {
      setIsCardValid(false);
      setError({ title: "Card Number cannot be empty." });
      return;
    }
    if (!luhnValidation(enteredCardNumber)) {
      setIsCardValid(false);
      setError({ title: "Invalid Card Number." });
      return;
    }
    if (validateLength(enteredLimit)) {
      setError({ title: "Limit cannot be empty." });
      setIsLimitValid(false);
      return;
    }
    const NewCardDetails = {
      name: enteredName,
      cardnumber: enteredCardNumber,
      limit: Number(enteredLimit),
    };
    props.onAddNewCardDetails(NewCardDetails);
    setEnteredName("");
    setEnteredCardNumber("");
    setEnteredLimit("");
  };

  return (
    <Wrapper>
      {error && <ErrorLabel className="error">{error.title}</ErrorLabel>}
      <form onSubmit={submitHandler}>
        <div className="newCard_controls">
          <div className={`newCard_control ${!isNameValid ? "invalid" : ""}`}>
            <SectionHeading className="label">
              <label htmlFor="name">Name</label>
            </SectionHeading>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className={`newCard_control ${!isCardValid ? "invalid" : ""}`}>
            <SectionHeading className="label">
              <label htmlFor="card_number">Card Number</label>
            </SectionHeading>
            <input
              id="card_number"
              type="text"
              value={enteredCardNumber}
              onChange={cardNumberChangeHandler}
            />
          </div>
          <div className={`newCard_control ${!isLimitValid ? "invalid" : ""}`}>
            <SectionHeading className="label">
              <label htmlFor="limit">Limit</label>
            </SectionHeading>
            <input
              id="limit"
              type="text"
              value={enteredLimit}
              onChange={limitChangeHandler}
            />
          </div>
        </div>
        <div className="newCard_actions">
          <button type="submit">Add</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default NewCardForm;
