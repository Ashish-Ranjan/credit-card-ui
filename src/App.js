import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import Table from "./components/CardList/Table";
import AddNewCard from "./components/NewCard/AddNewCard";
import Modal from "./components/UI/Modal";
import SectionHeading from "./components/UI/SectionHeading";
import { internalServerError } from "./utilities/js/internalServerError";
const { REACT_APP_API } = process.env;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [cardList, setCardList] = useState([]);

  const closeModelHandler = () => {
    setSubmitError(null);
  };

  const fetchCardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${REACT_APP_API}/getallcards`);
      internalServerError(response);
      const data = await response.json();
      if (data._message) {
        throw data;
      }
      setCardList(data);
      setIsLoading(false);
    } catch (error) {
      setError(error._message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchCardsHandler();
  }, [fetchCardsHandler]);

  const addNewCardDataHandler = async (newCardDetails) => {
    try {
      const response = await fetch(`${REACT_APP_API}/addnewcard`, {
        method: "POST",
        body: JSON.stringify(newCardDetails),
        headers: {
          "Content-Type": "application/json",
        },
      });
      internalServerError(response);
      const data = await response.json();
      if (data._message) {
        throw data;
      }
      setCardList((prevCardDetils) => {
        return [...prevCardDetils, data];
      });
    } catch (error) {
      setSubmitError(error);
    }
  };

  let cardListsTemplate = <p>No cards found.</p>;

  if (cardList.length > 0) {
    cardListsTemplate = <Table cardList={cardList} />;
  }

  if (error) {
    cardListsTemplate = <p>{error}</p>;
  }

  if (isLoading) {
    cardListsTemplate = <p>Loading...</p>;
  }

  return (
    <div className="App">
      {submitError && (
        <Modal
          title={submitError.error}
          desc={submitError._message}
          closeHandler={closeModelHandler}
        />
      )}
      <SectionHeading className="page-heading">
        Credit Card System
      </SectionHeading>
      <AddNewCard onAddNewCardDetails={addNewCardDataHandler} />
      {cardListsTemplate}
    </div>
  );
};

export default App;
