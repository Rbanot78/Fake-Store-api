import { useState } from "react";
import { useFilter } from "@/context/FilterContext"; // Import your context if needed
import { FaTimes, FaBars } from "react-icons/fa"; // Close and Hamburger icons

const FilterDropdown = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    categories,
  } = useFilter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [zIndex, setZIndex] = useState(10);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => {
      const newState = !prev;
      setZIndex(newState ? 20 : 10);
      return newState;
    });
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setZIndex(10);
  };

  // Handle price range changes
  const handlePriceChange = (e) => {
    setPriceRange([0, Number(e.target.value)]);
  };

  // Reset both category and price range
  const resetFilters = () => {
    setSelectedCategory("");
    setPriceRange([0, 1000]);
  };

  return (
    <div className="relative">
      {/* Hamburger button for mobile */}
      <button
        onClick={toggleDropdown}
        className="md:hidden px-4 py-2 bg-gradient-to-r from-black to-gray-500 text-white rounded-lg shadow-md hover:from-black hover:to-gray transition duration-300 ease-in-out transform hover:scale-105"
        aria-expanded={isDropdownOpen}
        aria-controls="filter-dropdown"
      >
        <FaBars className="h-6 w-6" />
      </button>

      {/* Regular button for larger screens */}
      <button
        onClick={toggleDropdown}
<<<<<<< HEAD
        className="hidden md:inline px-4 py-2 bg-gradient-to-r from-black to-gray-500 text-white rounded-lg shadow-md hover:from-black hover:to-gray-500 transition duration-300 ease-in-out transform hover:scale-105"
=======
        className="hidden md:inline px-4 py-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg shadow-md hover:from-indigo-700 hover:to-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
>>>>>>> 89a3f52bf75b5bf7c715f4894e7675e38ad8d6fd
        aria-expanded={isDropdownOpen}
        aria-controls="filter-dropdown"
      >
        Filter Options
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          id="filter-dropdown"
          className={`absolute ${
            isDropdownOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 ease-in-out ${
            // Adjust dropdown styles for mobile and normal screens
            "top-0 left-100 w-full  md:w-80 md:h-auto md:right-0 md:top-auto md:mt-2 md:shadow-lg md:rounded-lg"
          } bg-white shadow-lg border p-4`}
          style={{ zIndex }}
        >
          {/* Close Button */}
          <button
            onClick={closeDropdown}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <h3 className="text-lg font-semibold mb-4">Filters</h3>

          {/* Category Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Category</h4>
            <div className="space-y-2">
              {categories.length > 0 ? (
                categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm font-medium py-2 px-4 rounded-md border-2 transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gray-500 text-white border-black"
                        : "bg-gray-500 text-white border-transparent hover:bg-black hover:border-white"
                    }`}
                  >
                    {category}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-500">No categories available</p>
              )}
              <button
                onClick={resetFilters}
                className={`text-sm font-medium py-2 px-4 rounded-md border-2 transition-all duration-300 ${
                  !selectedCategory
                    ? "bg-gray-500 text-white border-black"
                    : "bg-gray-500 text-white border-transparent hover:bg-black hover:border-white"
                }`}
              >
                All Categories
              </button>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-800 mb-2">
              Price Range
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="price"
                  className="text-sm font-medium text-gray-700"
                >
                  Price:
                </label>
                <span className="text-sm font-semibold text-blue-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <input
                type="range"
                id="price"
                min="0"
                max="1000"
                value={priceRange[1]}
                onChange={handlePriceChange}
                className="w-full h-2 bg-gray-500 rounded-full focus:outline-none"
                aria-label="Price Range"
              />
            </div>
          </div>

          {/* Apply Filter Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={closeDropdown}
              className="px-5 py-2 bg-gray-500 text-white rounded-md hover:bg-black transition duration-300 ease-in-out"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
