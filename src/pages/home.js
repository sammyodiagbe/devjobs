import { useContext } from "react";
import Company from "../components/company";
import Navigation from "../components/navigation";
import { themeContext } from "../context/themeContext";

const Home = () => {
  const { data } = useContext(themeContext);
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
    </>
  );
};

export default Home;
