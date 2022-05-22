import LightModeIcon from "../assets/moon_light_icon.svg";
import DarkModeIcon from "../assets/moon_icon.svg";
import filterLightIcon from "../assets/filter_light.svg";
import searchIcon from "../assets/search_icon.svg";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";

const Navigation = ({ setOpenPopover, page, detailsData }) => {
  const { setTheme } = useContext(themeContext);
  const { imgUrl, company, logoBackground, apply } = detailsData || {};
  return (
    <div className="navigation-wrapper">
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
      {!page ? (
        <div className="search-container">
          <div className="mobile-search">
            <input type="text" placeholder="Filter by title" />
            <button className="form-icon" onClick={() => setOpenPopover(true)}>
              <img src={filterLightIcon} alt="filter" />
            </button>
            <button className="mobile-submit">
              <img src={searchIcon} alt="search icon" />
            </button>
          </div>
        </div>
      ) : (
        <div className="details-container">
          <div className="company-details">
            <div
              className="company-image"
              style={{ background: logoBackground }}
            >
              <img src={imgUrl} alt="company logo" />
            </div>
            <div className="company-name">
              <h1>{company}</h1>
              <p>{company}.com</p>
            </div>
            <a href={apply} className="btn-link">
              Company site
            </a>
          </div>
          <div className="requirement-details"></div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
