import { useState } from "react";
import "./App.css";
import { CounterField } from "./components/CounterField";
import { ControlButtons } from "./components/ControlButtons";
import styled from "styled-components";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  const maxCount = 5;
  const minCount = 0;
  let [count, setCount] = useState<number>(minCount);

  const increaseCountHandler = () =>
    count < 5
      ? setCount((prevCount) => Math.min(prevCount + 1, maxCount))
      : count;
  const resetCountHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <CounterStyled>
        <CounterField count={count} />
        <ProgressBar count={count} maxCount={maxCount} />
        <ControlButtons
          minCount={minCount}
          maxCount={maxCount}
          count={count}
          updateCount={increaseCountHandler}
          resetCount={resetCountHandler}
        />
      </CounterStyled>
    </div>
  );
}

const CounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid #1babdb;
  padding: 10px;
  border-radius: 10px;
`;

export default App;
