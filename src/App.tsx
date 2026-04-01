import "./App.css";
import Main from "./view/Main";

function App() {
  const data = {
    symbol: "BTCUSDT",
    priceChange: "-365.63000000",
    priceChangePercent: "-0.538",
    weightedAvgPrice: "67440.55613980",
    openPrice: "67995.04000000",
    highPrice: "68589.49000000",
    lowPrice: "65998.05000000",
    lastPrice: "67629.41000000",
    volume: "22120.60567000",
    quoteVolume: "1491825948.53411040",
    openTime: 1774925880000,
    closeTime: 1775012316705,
    firstId: 6168757381,
    lastId: 6173416588,
    count: 4659208,
  };

  return <Main data={data} />;
}

export default App;
