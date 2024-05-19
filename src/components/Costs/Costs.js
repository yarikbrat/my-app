
import "./Costs.css"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import Costlist from "./CostList";

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState("2024")

  const yearChangeHandler = (year) => {
    setSelectedYear(year)

  }

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  })



  return (
    <div>
      <Card className="costs">
        {/* {filteredCosts.length === 0 && <p>В этом году расходов нет</p>} */}
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <Costlist costs={filteredCosts} />

      </Card>
    </div>
  )

}
export default Costs;