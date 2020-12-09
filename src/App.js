/** @format */

import React from "react";
import Header from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import "./App.css";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { AddTransaction } from "./components/AddTransaction";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </React.Fragment>
  );
};

export default App;
