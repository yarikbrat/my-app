import CostItem from "./CostItem";
import "./CostList.css"

const Costlist = (props) => {


  if (props.costs.length === 0) {
    return (
      <p className="cost-list__fallback">В этом году расходов нет</p>
    )
  }

  return (
    <ul className="cost-list">
      {props.costs.map(cost => <CostItem
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
        key={cost.id} />)}
    </ul>
  )
};

export default Costlist;