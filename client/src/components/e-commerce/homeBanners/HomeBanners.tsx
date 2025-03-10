import { Banner } from "@components/common";

const HomeBanners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
      <Banner
        name="Banner title"
        image="https://anvogue-html.vercel.app/assets/images/banner/1.png"
        link="test"
        id={1}
      />
      <Banner
        name="Banner title"
        image="https://anvogue-html.vercel.app/assets/images/banner/1.png"
        link="test"
        id={1}
      />
    </div>
  );
};

export default HomeBanners;
