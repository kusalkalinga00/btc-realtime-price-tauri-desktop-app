import "./App.css";
import Main from "./view/Main";
import { useQuery } from "@tanstack/react-query";
import { IDate } from "./types";
import { useEffect, useRef } from "react";
import { TrayIcon } from "@tauri-apps/api/tray";
import { truncateToTwoDecimalPlaces } from "./utils";

function App() {
  const tray = useRef<TrayIcon | null>(null);

  const { data, isLoading, isError } = useQuery<IDate>({
    queryKey: ["ticker", "BTCUSDT"],
    queryFn: async () => {
      const res = await fetch(
        "https://data-api.binance.vision/api/v3/ticker?symbol=BTCUSDT",
      );
      return res.json();
    },
    refetchInterval: 2000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (data) {
      (async () => {
        if (!tray.current) {
          tray.current = await TrayIcon.getById("main");
        }
        const title = `${truncateToTwoDecimalPlaces(data.lastPrice)} ${data.symbol}`;
        await tray.current?.setTitle(title);
      })();
    }
  }, [data]);

  if (isLoading || !data) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return <Main data={data} />;
}

export default App;
