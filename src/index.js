//Turns Javascript into HTML
import ReactDOM from "react-dom";
//Go to ./App.js, get an export called App
import App from "./App.js";

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
