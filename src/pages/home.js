import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Company from "../components/company";
import Navigation from "../components/navigation";
import iconLocation from "../assets/mobile/icon-location.svg";
import { themeContext } from "../context/themeContext";
import CustomCheckbox from "../components/customCheckbox";

const Home = () => {
  const { data } = useContext(themeContext);
  const [location, setLocation] = useState("");
  const [popover, setOpenPopover] = useState(false);
  const modalRef = useCallback((node) => {
    // console.log(modalRef);
    if (node !== null) {
      window.addEventListener("click", (event) => {
        if (event.target === node) {
          setOpenPopover(false);
        }
      });
    }
  }, []);

  const renderJobs = data.map((job) => {
    // load the image
    return <Company key={job.id} data={job} />;
  });

  useEffect(() => {
    console.log(modalRef);
    // window.addEventListener("click", (event) => {
    //   if (event.target == modalRef.current) {
    //     setOpenPopover(false);
    //   }
    // });
  }, []);
  return (
    <>
      <Navigation setOpenPopover={setOpenPopover} />

      <main className="main">
        <div className="jobs-container">{renderJobs}</div>
      </main>

      {popover && (
        <div className="popover-wrapper" ref={modalRef}>
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
      )}
    </>
  );
};

export default Home;
