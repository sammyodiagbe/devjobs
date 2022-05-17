import LightModeIcon from "../assets/moon_light_icon.svg";
import DarkModeIcon from "../assets/moon_icon.svg";
import filterLightIcon from "../assets/filter_light.svg";
import filterDarkIcon from "../assets/filter_dark.svg";
import searchIcon from "../assets/search_icon.svg";
import { useContext, useState } from "react";
import { themeContext } from "../context/themeContext";

const Navigation = () => {
  const { setTheme } = useContext(themeContext);
  const [openFilterContainer, setOpenFilterContainer] = useState(false);
  return (
    <div className="navigation-wrapper">
      <div className="filter-wrapper"></div>

      <nav className="navigation">
        <h1 className="brand">devJobs</h1>
        <div className="toggle-wrapper">
          <img src={LightModeIcon} alt="dark mode toggle icon" />
          <div className="toggle-container">
            <label htmlFor="toggle">
              <input
                type="checkbox"
                id="toggle"
                name="toggle"
                onChange={(e) => {
                  if (e.target.checked) {
                    setTheme("dark");
                  } else {
                    setTheme("light");
                  }
                }}
              />
              <span className="toggle-container"></span>
            </label>
          </div>
          <img src={DarkModeIcon} alt="dark mode toggle icon" />
        </div>
      </nav>
      <div className="search-container">
        <div className="mobile-search">
          <input type="text" placeholder="Filter by title" />
          <button
            className="form-icon"
            onClick={() => setOpenFilterContainer(!openFilterContainer)}
          >
            <img src={filterLightIcon} alt="filter" />
          </button>
          <button className="mobile-submit">
            <img src={searchIcon} alt="search icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
