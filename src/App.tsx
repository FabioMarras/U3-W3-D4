import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Fetch from "./components/Fetch";

import Details from "./components/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App text-none">
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
