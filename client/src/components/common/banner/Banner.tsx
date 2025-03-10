import { NavLink } from "react-router-dom";

type TBanner = {
  id: number;
  name?: string;
  image: string;
  link: string;
};

const Banner = ({ id, name, image, link }: TBanner) => {
  return (
    <div
      key={id}
      className="relative group overflow-hidden h-[450px] flex justify-center items-center"
    >
      <img
        src={image}
        alt="bannerImage"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300 "
      />
      <div className="z-10 text-white text-center flex flex-col items-center">
        {name && <h4 className="text-5xl font-bold">{name}</h4>}
        <NavLink
          to={link}
          className="mt-4 pb-2 font-bold border-b border-white"
        >
          Shop Now
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
