import { HeroSlider } from "@components/common";
import {
  Categories,
  Features,
  HomeBanners,
  Products,
} from "@components/e-commerce";

const Home = () => {
  return (
    <section>
      <HeroSlider />
      <div className="container">
        <Categories />
        <Products />
      </div>
      <HomeBanners />
      <div className="container">
        <Features />
      </div>
    </section>
  );
};

export default Home;
