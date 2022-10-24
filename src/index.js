import { createRoot } from "react-dom/client";
//import DOM from "ReactDOM";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
