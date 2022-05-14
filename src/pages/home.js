import { useContext } from "react";
import Navigation from "../components/navigation";
import { themeContext } from "../context/themeContext";

const Home = () => {
  const { theme } = useContext(themeContext);
  return (
    <>
      <Navigation />

      <main className="main" style={{ padding: " 5em 2em" }}>
        {theme == "light" ? <p>Light theme yo</p> : <p>Dark fam</p>}
      </main>
    </>
  );
};

export default Home;
