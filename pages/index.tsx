import type { NextPage } from "next";
import Main from "./components/main";
import Navbar from "./components/navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
};

export default Home;
