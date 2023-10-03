import React from "react";
const ExpenseDetail=(props)=> {
  const title = props?.title?.toLocaleString("en-US", { style: "long" });
  const amount = props?.amount?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const location = props?.location?.toLocaleString("en-US", { style: "long" });
  return (
    <div>
      <div>{title}</div>
      <div>{amount}</div>
      <div>{location}</div>
    </div>
  );
}
export default ExpenseDetail;
