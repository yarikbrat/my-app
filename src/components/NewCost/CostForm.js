import "./CostForm.css";
import React, { useState } from "react";

const CostForm = (props) => {


  const [showCosts, setShowCosts] = useState(false);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",           относится к нижнему примеру
  //   date: "",
  // })

  const showCostsHandler = () => {
    setShowCosts(!showCosts)
    setName("");
    setAmount("");
    setDate("");
  }

  const nameChangeHandler = (e) => {
    setName(e.target.value);

    // setUserInput({
    //   ...userInput,              можна так
    //   name: e.target.value,
    // })

    // setUserInput((previousState) => {
    //   return {                             или так
    //     ...previousState,
    //     name: e.target.value,

    //   }
    // })
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   amount: e.target.value,
    // })
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);

    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // })
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "" || amount === "" || date === "") {
      return
    }

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    }


    setName("");
    setAmount("");
    setDate("");

    props.onSaveCostData(costData)
    setShowCosts(!showCosts)
  }

  return <form onSubmit={submitHandler}>

    {!showCosts && <button onClick={showCostsHandler}>Добавить расход</button>}

    {showCosts && <div className="new-cost__controls">
      <div className="new-cost__control">
        <label>Название</label>
        <input type="text" value={name} onChange={nameChangeHandler} />
      </div>
      <div className="new-cost__control">
        <label>Сумма</label>
        <input type="number" min="0.1" step="0.1" value={amount} onChange={amountChangeHandler} />
      </div>
      <div className="new-cost__control">
        <label>Дата</label>
        <input type="date" min="2024-05-01" step="2040-05-01" value={date} onChange={dateChangeHandler} />
      </div>
      <div className="new-cost__actions">
        <button type="submit">
          Добавить расход
        </button>
        <button type="reset" onClick={showCostsHandler}>
          Отмена
        </button>
      </div>
    </div>}
  </form>
}

export default CostForm;