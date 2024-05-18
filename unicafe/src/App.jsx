import { useState } from "react";

const StatisticLine = (props) => {
  if (props.text !== "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    );
  }
  if (props.text === "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>
    );
  }
};

const Statistics = (props) => {
  if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
    return (
      <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>No feedback given</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="all" value={props.total} />
            <StatisticLine text="average" value={props.media} />
            <StatisticLine text="positive" value={props.porcentajePositivo} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;
  const media = (good + bad * -1) / total;
  const porcentajePositivo = (good / total) * 100;

  const goodClick = () => {
    setGood(good + 1);
  };
  const neutraClick = () => {
    setNeutral(neutral + 1);
  };
  const badClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutraClick}>neutral</button>
      <button onClick={badClick}>bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        media={media}
        porcentajePositivo={porcentajePositivo}
      />
    </div>
  );
};

export default App;
