import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { themeContext } from "./context/themeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <themeContext.Provider value={{ theme, setTheme }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </themeContext.Provider>
    </Router>
  );
}

export default App;
