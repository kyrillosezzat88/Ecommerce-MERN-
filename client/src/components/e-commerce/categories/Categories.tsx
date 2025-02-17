import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import Heading from "../../common/Heading/Heading";
import Category from "../category/Category";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categories, error, loading } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);
  return (
    <section className="my-8">
      <div className="flex justify-between items-center">
        <Heading title="Featured Categories" />
        <NavLink
          to="/categories"
          className="underline text-black font-semibold"
        >
          See all categories
        </NavLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Category {...category} />
        ))}
      </div>
      ;
    </section>
  );
};

export default Categories;
