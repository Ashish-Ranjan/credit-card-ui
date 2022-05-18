import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Credit Card System Section', () => {
  render(<App />);
  const CreditCardHeader = screen.getByText(/Credit Card System/i);
  expect(CreditCardHeader).toBeInTheDocument();
});

test('renders Add New Card Section', async() => {
  render(<App />);
  const addNewCardSectionInputBoxes = await screen.findAllByRole('textbox');
  expect(addNewCardSectionInputBoxes).toHaveLength(3);
});

test('renders Existing Card Section', () => {
  render(<App />);
  const existingCardSectionLoader = screen.getByText(/Loading/i);
  expect(existingCardSectionLoader).toBeInTheDocument();
});

test('renders Existing Card Section', async() => {
  //Atleast One card must be in DataBase
  //API app must be running for this test to pass.
  render(<App />);
  const existingCardSectionAfterFetch = await screen.findByText(/Balance/i);
  expect(existingCardSectionAfterFetch).toBeInTheDocument();
});

