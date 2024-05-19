import CostForm from "./CostForm";
import Card from "../UI/Card";
import "./NewCost.css";
import React, { useState } from "react";

const NewCost = (props) => {



  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData)

  }

  return (
    <Card className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </Card>
  )
};
export default NewCost;