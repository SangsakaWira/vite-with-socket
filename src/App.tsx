import SocketEventListener from "./SocketEvent";
// import { LineChart } from "./LineChart";
import "./App.css";

function App() {

  return (
    <div className="App">
      {/* <LineChart data_tampilan={[]} labels={[]} /> */}
      <SocketEventListener />
    </div>
  );
}

export default App;
