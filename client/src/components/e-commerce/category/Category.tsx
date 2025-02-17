import { TCategory } from "@types";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className="relative bg-Ivory px-4 rounded-md w-full group overflow-hidden">
      <img
        src={img}
        alt={title}
        className=" max-w-52 ml-auto group-hover:scale-110 transition-all duration-500"
      />
      <div className="absolute top-10 pl-3">
        <h3 className="font-bold text-xl">{title}</h3>
        <span>12 items</span>
      </div>
    </div>
  );
};

export default Category;
