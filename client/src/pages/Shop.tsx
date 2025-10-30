import { useState } from "react";
import { SideFilters } from "@components/e-commerce";
import { TFilterState, TFilterOptions } from "@types";

const Shop = () => {
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

  return (
    <section>
      <div className="container">
        <div className="flex flex-wrap md:flex-nowrap gap-4 py-20">
          <div className="w-full md:w-1/4">
            <SideFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              options={filterOptions}
            />
          </div>
          <div className="w-full md:w-3/4">products</div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
