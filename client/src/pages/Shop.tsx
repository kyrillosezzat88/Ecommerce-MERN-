import { useEffect, useState } from "react";
import { GridList, Product, SideFilters } from "@components/e-commerce";
import { TFilterState, TFilterOptions } from "@types";
import { Loading } from "@components/feedback";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProducts } from "@store/products/productsSlice";
import { MenuIcon } from "@assets/icons";
import { Drawer } from "@components/common";

const Shop = () => {
  const [openFiltersDrawer, setOpenFiltersDrawer] = useState(false);
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state) => state.products
  );
  // Mock data for demonstration
  const filterOptions: TFilterOptions = {
    categories: [
      { id: 1, title: "T-Shirts", img: "", prefix: "tshirts" },
      { id: 2, title: "Jeans", img: "", prefix: "jeans" },
      { id: 3, title: "Dresses", img: "", prefix: "dresses" },
      { id: 4, title: "Shoes", img: "", prefix: "shoes" },
      { id: 5, title: "Accessories", img: "", prefix: "accessories" },
    ],
    brands: ["Nike", "Adidas", "Zara", "H&M", "Uniqlo", "Levi's"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      "Black",
      "White",
      "Red",
      "Blue",
      "Green",
      "Yellow",
      "Pink",
      "Gray",
    ],
    maxPrice: 1000,
  };

  const [filters, setFilters] = useState<TFilterState>({
    priceRange: [0, filterOptions.maxPrice],
    categories: [],
    brands: [],
    ratings: [],
    sizes: [],
    colors: [],
    availability: "all",
  });

  const handleFiltersChange = (newFilters: TFilterState) => {
    setFilters(newFilters);
    // Here you would typically trigger a product search/filter API call
    console.log("Filters changed:", newFilters);
  };

  useEffect(() => {
    dispatch(actGetProducts(null));
  }, [dispatch]);

  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap gap-4 py-20">
          <div className="w-full md:w-1/4">
            <SideFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              options={filterOptions}
              className="hidden md:block"
            />
            <MenuIcon
              className="md:hidden ml-auto my-2 text-5xl"
              onClick={() => setOpenFiltersDrawer(true)}
            />
            <Drawer
              isOpen={openFiltersDrawer}
              setIsDrawerOpen={setOpenFiltersDrawer}
              title="Filters"
            >
              <Loading status={loading} error={error} type="miniProduct">
                <SideFilters
                  filters={filters}
                  onFiltersChange={handleFiltersChange}
                  options={filterOptions}
                />
              </Loading>
            </Drawer>
          </div>
          <div className="w-full md:w-3/4">
            <Loading status={loading} error={error} type="product">
              <GridList
                records={products}
                renderItems={(record) => <Product {...record} />}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              />
            </Loading>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
