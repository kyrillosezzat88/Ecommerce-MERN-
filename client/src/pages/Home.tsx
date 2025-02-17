import { HeroSlider } from "@components/common";
import { Categories, Products } from "@components/e-commerce";

const Home = () => {
  return (
    <section>
      <HeroSlider />
      <div className="container">
        <Categories />
        <Products />
      </div>
    </section>
  );
};

export default Home;
