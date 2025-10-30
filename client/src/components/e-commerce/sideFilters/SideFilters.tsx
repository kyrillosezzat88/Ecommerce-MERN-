import { useState } from "react";
import { TFilterState, TFilterOptions, TFilterSection } from "@types";

type TSideFiltersProps = {
  filters: TFilterState;
  onFiltersChange: (filters: TFilterState) => void;
  options: TFilterOptions;
  className?: string;
};

const SideFilters = ({
  filters,
  onFiltersChange,
  options,
  className = "",
}: TSideFiltersProps) => {
  const [isExpanded, setIsExpanded] = useState<TFilterSection>({
    price: true,
    categories: true,
    brands: true,
    ratings: true,
    sizes: true,
    colors: true,
    availability: true,
  });

  const toggleExpanded = (section: keyof typeof isExpanded) => {
    setIsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: [min, max],
    });
  };

  const handleCategoryToggle = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter((id) => id !== categoryId)
      : [...filters.categories, categoryId];

    onFiltersChange({
      ...filters,
      categories: newCategories,
    });
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];

    onFiltersChange({
      ...filters,
      brands: newBrands,
    });
  };

  const handleRatingToggle = (rating: number) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];

    onFiltersChange({
      ...filters,
      ratings: newRatings,
    });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter((s) => s !== size)
      : [...filters.sizes, size];

    onFiltersChange({
      ...filters,
      sizes: newSizes,
    });
  };

  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter((c) => c !== color)
      : [...filters.colors, color];

    onFiltersChange({
      ...filters,
      colors: newColors,
    });
  };

  const handleAvailabilityChange = (availability: string) => {
    onFiltersChange({
      ...filters,
      availability,
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      priceRange: [0, options.maxPrice],
      categories: [],
      brands: [],
      ratings: [],
      sizes: [],
      colors: [],
      availability: "all",
    });
  };

  const FilterSection = ({
    title,
    children,
    sectionKey,
  }: {
    title: string;
    children: React.ReactNode;
    sectionKey: keyof typeof isExpanded;
  }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleExpanded(sectionKey)}
        className="flex items-center justify-between w-full text-left font-semibold text-gray-800 mb-3"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isExpanded[sectionKey] ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isExpanded[sectionKey] && <div className="space-y-2">{children}</div>}
    </div>
  );

  return (
    <div
      className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <button
          onClick={clearAllFilters}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Clear All
        </button>
      </div>

      {/* Price Range */}
      <FilterSection title="Price Range" sectionKey="price">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="range"
              min="0"
              max={options.maxPrice}
              value={filters.priceRange[1]}
              onChange={(e) =>
                handlePriceChange(
                  filters.priceRange[0],
                  parseInt(e.target.value)
                )
              }
              className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
          <div className="flex space-x-2">
            <input
              type="number"
              min="0"
              max={options.maxPrice}
              value={filters.priceRange[0]}
              onChange={(e) =>
                handlePriceChange(
                  parseInt(e.target.value) || 0,
                  filters.priceRange[1]
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Min"
            />
            <input
              type="number"
              min="0"
              max={options.maxPrice}
              value={filters.priceRange[1]}
              onChange={(e) =>
                handlePriceChange(
                  filters.priceRange[0],
                  parseInt(e.target.value) || options.maxPrice
                )
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              placeholder="Max"
            />
          </div>
        </div>
      </FilterSection>

      {/* Categories */}
      <FilterSection title="Categories" sectionKey="categories">
        <div className="space-y-2">
          {options.categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(category.id.toString())}
                onChange={() => handleCategoryToggle(category.id.toString())}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{category.title}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Brands */}
      <FilterSection title="Brands" sectionKey="brands">
        <div className="space-y-2">
          {options.brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleBrandToggle(brand)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Ratings */}
      <FilterSection title="Customer Rating" sectionKey="ratings">
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.ratings.includes(rating)}
                onChange={() => handleRatingToggle(rating)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-gray-700">& up</span>
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Sizes */}
      <FilterSection title="Size" sectionKey="sizes">
        <div className="grid grid-cols-3 gap-2">
          {options.sizes.map((size) => (
            <label
              key={size}
              className="flex items-center justify-center cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.sizes.includes(size)}
                onChange={() => handleSizeToggle(size)}
                className="sr-only"
              />
              <div
                className={`w-full py-2 px-3 text-center text-sm border rounded-md transition-colors ${
                  filters.sizes.includes(size)
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                }`}
              >
                {size}
              </div>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Colors */}
      <FilterSection title="Color" sectionKey="colors">
        <div className="flex flex-wrap gap-2">
          {options.colors.map((color) => (
            <label key={color} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={filters.colors.includes(color)}
                onChange={() => handleColorToggle(color)}
                className="sr-only"
              />
              <div
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  filters.colors.includes(color)
                    ? "border-gray-800 scale-110"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Availability */}
      <FilterSection title="Availability" sectionKey="availability">
        <div className="space-y-2">
          {[
            { value: "all", label: "All Items" },
            { value: "in-stock", label: "In Stock" },
            { value: "out-of-stock", label: "Out of Stock" },
            { value: "on-sale", label: "On Sale" },
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="availability"
                value={option.value}
                checked={filters.availability === option.value}
                onChange={(e) => handleAvailabilityChange(e.target.value)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  );
};

export default SideFilters;
