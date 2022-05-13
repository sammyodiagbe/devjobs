import LightModeIcon from "../assets/moon_light_icon.svg";
import DarkModeIcon from "../assets/moon_icon.svg";
import filterLightIcon from "../assets/filter_light.svg";
import filterDarkIcon from "../assets/filter_dark.svg";
import searchIcon from "../assets/search_icon.svg";

const Home = () => {
  return (
    <>
      <div className="navigation-wrapper">
        <nav className="navigation">
          <h1 className="brand">devJobs</h1>
          <div className="toggle-wrapper">
            <img src={LightModeIcon} alt="dark mode toggle icon" />
            <div className="toggle-container">
              <input type="checkbox" />
            </div>
            <img src={DarkModeIcon} alt="dark mode toggle icon" />
          </div>
        </nav>
        <div className="search-container">
          <div className="mobile-search">
            <input type="text" placeholder="Filter by title" />
            <button className="form-icon">
              <img src={filterLightIcon} alt="filter" />
            </button>
            <button className="mobile-submit">
              <img src={searchIcon} alt="search icon" />
            </button>
          </div>
        </div>
      </div>

      <main className="main"></main>
    </>
  );
};

export default Home;