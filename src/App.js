import "./styles.css";
import WithOutUseCallback from "./WithOutUseCallback";
import WithUseCallback from "./WithUseCallback";

export default function App() {
  return (
    <div className="App">
      <h1>useCallback in React</h1>
      <WithOutUseCallback />
      <WithUseCallback />
    </div>
  );
}
