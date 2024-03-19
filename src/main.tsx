// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

async function enableMocking() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mock/browser");

  return worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

enableMocking().then(() => {
  root.render(
    <>
      <App />
    </>,
  );
});
