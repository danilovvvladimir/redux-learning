import React from "react";
import Button from "./Button";

import { addCash } from "../state/actionCreators/actionCreators";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const ButtonsContainer = () => {
  const dispatch = useDispatch();

  const { addCash, getCash, resetCash } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div style={{ marginTop: 25 }}>
      <button onClick={() => addCash(1000)}>ADD CASH</button>
      <Button onClick={() => getCash(1000)}>GET CASH</Button>
      <Button
        style={{ display: "block", margin: "15px auto 0 auto" }}
        onClick={() => resetCash()}>
        RESET CASH
      </Button>
    </div>
  );
};

export default ButtonsContainer;
