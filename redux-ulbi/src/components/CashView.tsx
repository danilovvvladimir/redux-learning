import React, { FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../state/store";

const CashView: FC = () => {
  const cashAmount = useSelector((state: State) => state.bank);
  return <div>Cash: {cashAmount}</div>;
};

export default CashView;
