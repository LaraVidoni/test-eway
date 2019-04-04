import React from "react";
import messages from "./messages";
import "./styles.css";

function Price(props) {
  return (
    <span>
      {props.lang === "en" ? "$" + props.amount : props.amount + "$"}{" "}
    </span>
  );
}

function BudgetCalculator(props) {
  let resources = messages[props.language];
  return (
    <div className="budget-calculator">
      <div>
        {props.isWeeklyBudget && resources.weekly || resources.budget} :{" "}
        <Price amount={props.budgetAmount} lang={props.language} />
        {resources.available}: <Price amount={props.availableAmount} lang={props.language} />
        {props.periodEnd &&
          props.periodStart &&
          resources.timePeriod + " : " + props.periodStart + " - " + props.periodEnd}
      </div>
    </div>
  );
}

export default BudgetCalculator;