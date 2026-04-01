import { getPrecentageColor, truncateToTwoDecimalPlaces } from "../utils";

interface MainProps {
  data: {
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    lastPrice: string;
  };
}

const Main = ({ data }: MainProps) => {
  return (
    <main
      style={{
        paddingInline: 5,
      }}
    >
      <h1
        style={{
          fontWeight: 300,
          fontSize: 22,
        }}
      >
        {data.symbol}
      </h1>
      <h2
        style={{
          fontWeight: 400,
          fontSize: 30,
          color: "#a2a3ff",
        }}
      >
        $ {truncateToTwoDecimalPlaces(data.lastPrice)}
      </h2>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              color: getPrecentageColor(data.priceChange),
            }}
          >
            {truncateToTwoDecimalPlaces(data.priceChange)} USD (
            {truncateToTwoDecimalPlaces(data.priceChangePercent)}%)
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;
