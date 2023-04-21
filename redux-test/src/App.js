import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

function App() {
  const cash = useSelector((state) => state.cash);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(act);

  return <div className="App">cash: {cash}</div>;
}

export default App;
