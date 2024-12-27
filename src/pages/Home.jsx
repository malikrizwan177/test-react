import Categories from "../components/Categories";
import ClassProducts from "../components/ClassProducts";
import Hero from "../components/Hero";
import FunctionalProducts from "../components/FunctionalProducts";

const Home = () => {
  return (
    <>
      <Hero/>
      <Categories/>
      {/* <FunctionalProducts/> */}
      <ClassProducts/>
    </>
  );
};

export default Home;
