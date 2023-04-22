import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { getCash, addCash, resetCash } from "./store/reducers/cashReducer";

function App() {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  return (
    <div className="App">
      cash: {cash}
      <div>
        <button onClick={() => dispatch(addCash(1000))}>+</button>
        <button onClick={() => dispatch(getCash(1000))}>-</button>
        <div>
          <button onClick={() => dispatch(resetCash())}>reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
