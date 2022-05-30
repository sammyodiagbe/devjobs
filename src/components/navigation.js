import LightModeIcon from "../assets/moon_light_icon.svg";
import DarkModeIcon from "../assets/moon_icon.svg";
import filterLightIcon from "../assets/filter_light.svg";
import locationIcon from "../assets/location_icon.svg";
import searchIcon from "../assets/search_icon.svg";
import desktopIconSearch from "../assets/desktop/icon-search.svg";
import { useContext } from "react";
import { themeContext } from "../context/themeContext";
import InputWithIcon from "./inputWithIcon";
import CustomCheckbox from "./customCheckbox";

const Navigation = ({ setOpenPopover, page, detailsData }) => {
  const { setTheme } = useContext(themeContext);
  const { imgUrl, company, logoBackground, apply } = detailsData || {};
  return (
    <div className="navigation-wrapper">
      <div className="container">
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
      </div>

      {!page ? (
        <div className="search-container">
          <div className="mobile-search hide-lg">
            <input type="text" placeholder="Filter by title" />
            <button className="form-icon" onClick={() => setOpenPopover(true)}>
              <img src={filterLightIcon} alt="filter" />
            </button>
            <button className="mobile-submit">
              <img src={searchIcon} alt="search icon" />
            </button>
          </div>
          <div className="desktop-ipad-search-container hide-sm">
            <InputWithIcon icon={locationIcon} title="filter by title" />
            <InputWithIcon
              icon={desktopIconSearch}
              title="filter by location"
            />
            <div className="filter-search-button">
              <CustomCheckbox text={"Full time Only"} />
              <button className="btn search-btn">Search</button>
            </div>
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
