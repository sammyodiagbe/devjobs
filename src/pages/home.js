import { useContext, useState } from "react";
import Company from "../components/company";
import Navigation from "../components/navigation";
import iconLocation from "../assets/mobile/icon-location.svg";
import { themeContext } from "../context/themeContext";
import CustomCheckbox from "../components/customCheckbox";

const Home = () => {
  const { data } = useContext(themeContext);
  const [location, setLocation] = useState("");
  const renderJobs = data.map((job) => {
    // load the image
    return <Company key={job.id} data={job} />;
  });
  return (
    <>
      <Navigation />

      <main className="main">
        <div className="jobs-container">{renderJobs}</div>
      </main>

      <div className="popover-wrapper">
        <div className="filter-wrapper">
          <div className="filter-head">
            <img src={iconLocation} alt="location icon" />
            <input
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="filter by location"
            />
          </div>
          <div className="filter-body">
            <div className="filter-body-head">
              <CustomCheckbox />
            </div>
            <button className="btn search-btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
