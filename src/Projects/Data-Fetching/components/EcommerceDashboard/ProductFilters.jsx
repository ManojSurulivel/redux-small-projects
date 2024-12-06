import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../../../redux/slices/productsSlice";

const ProductFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const dispatch = useDispatch();

  const handleFilter = () => {
    dispatch(
      filterProducts({
        searchTerm,
        category,
        priceRange,
      })
    );
  };

  return (
    <div className="product-filter">
      <div className="filter-group">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
      </div>

      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="home">Home</option>
          <option value="books">Books</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="price-min">Price Range:</label>
        <div className="price-range">
          <input
            type="number"
            id="price-min"
            placeholder="Min"
            value={priceRange.min}
            onChange={(e) =>
              setPriceRange({ ...priceRange, min: e.target.value })
            }
          />
          <input
            type="number"
            id="price-max"
            placeholder="Max"
            value={priceRange.max}
            onChange={(e) =>
              setPriceRange({ ...priceRange, max: e.target.value })
            }
          />
        </div>
      </div>

      <button onClick={handleFilter} className="filter-button">
        Apply Filters
      </button>
    </div>
  );
};

export default ProductFilter;
