import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const initialCosts = [
  {
    id: "c1",
    date: new Date(2025, 2, 11),
    description: "Холодильник",
    amount: 999.99
  },
  {
    id: "c2",
    date: new Date(2024, 11, 25),
    description: "MacBook",
    amount: 1254.72
  },
  {
    id: "c3",
    date: new Date(2024, 4, 1),
    description: "Джинсы",
    amount: 49.99
  }
];

function App() {

  const [costs, setCosts] = useState(initialCosts);




  const addCostHandler = (newCost) => {
    console.log(newCost);

    setCosts(prevSub => {
      return [newCost, ...prevSub]
    })

  }

  return (
    <div>

      <NewCost onAddCost={addCostHandler} />

      <Costs costs={costs} />
    </div>
  );
}

export default App;
