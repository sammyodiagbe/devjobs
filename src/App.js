import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { themeContext } from "./context/themeContext";
import { useState } from "react";
import companyDatas from "./data/data.json";
import Details from "./pages/details";

function App() {
  const [theme, setTheme] = useState("light");
  const data = companyDatas;

  return (
    <Router>
      <themeContext.Provider value={{ theme, setTheme, data }}>
        <div className={theme === "light" ? "app light-app" : "app dark-app"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
