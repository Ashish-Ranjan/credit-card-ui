import React, { useState, useEffect } from "react";
import "./App.scss";
import Table from "./components/CardList/Table";
import AddNewCard from "./components/NewCard/AddNewCard";
import SectionHeading from "./components/UI/SectionHeading";
const DUMMY_CARD_DETAILS = [
  {
    id: "e1",
    name: "Client 1",
    cardnumber: 4659854435625484,
    balance: 100,
    limit: 5000,
  },
  {
    id: "e2",
    name: "Client 2",
    cardnumber: 288395539423124,
    balance: 100,
    limit: 5000,
  },
  {
    id: "e3",
    name: "Client 3",
    cardnumber: 28836639423124,
    balance: 100,
    limit: 5000,
  },
];
const App = () => {
  useEffect(() => {
    console.log("get all Cards from DB...");
  }, []);
  const [cardList, setCardList] = useState(DUMMY_CARD_DETAILS);
  const addNewCardDataHandler = (newCardDetails) => {
    setCardList((prevCardDetils) => {
      return [newCardDetails, ...prevCardDetils];
    });
  };

  let cardLists = <p>No cards found!</p>;
  if (cardList.length > 0) {
    cardLists = <Table cardList={cardList} />;
  }

  return (
    <div className="App">
      <SectionHeading className="page-heading">
        Credit Card System
      </SectionHeading>
      <AddNewCard onAddNewCardDetails={addNewCardDataHandler} />
      {cardLists}
    </div>
  );
};

export default App;
