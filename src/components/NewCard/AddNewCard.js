import React from "react";
import SectionHeading from "../UI/SectionHeading";
import Wrapper from "../UI/Wrapper";
import NewCardForm from "./NewCardForm";

const AddNewCard = (props) => {
  const addNewCardDetailsHandler = (enteredNewCardDetails) => {
    props.onAddNewCardDetails(enteredNewCardDetails);
  };
  return (
    <Wrapper>
      <SectionHeading className="section">Add</SectionHeading>
      <NewCardForm onAddNewCardDetails={addNewCardDetailsHandler} />
    </Wrapper>
  );
};

export default AddNewCard;
