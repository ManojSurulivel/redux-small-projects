import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setPriceRange } from '../../../redux/slices/FilterSlice';

const ProductFilter = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);  // Get all products
  const { category, priceRange } = useSelector((state) => state.filters);  // Get active filters

  // Filter products based on active filters
  const filteredProducts = products.filter((product) => {
    const inCategory = category === 'All' || product.category === category;
    const inPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    return inCategory && inPriceRange;
  });

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <div>
        <h1 style={{color:"black"}}>11. Filter by Category</h1>
        <select onChange={(e) => dispatch(setCategory(e.target.value))}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>

        <h2>Filter by Price Range</h2>
        <input
          type="range"
          min="0"
          max="500"
          value={priceRange[1]}
          onChange={(e) =>
            dispatch(setPriceRange([0, Number(e.target.value)]))
          }
        />
        <span>Up to ${priceRange[1]}</span>
      </div>

      {/* Display Filtered Products */}
      <div>
        <h2>Products</h2>
        {filteredProducts.length > 0 ? (
          <ul>
            {filteredProducts.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price} ({product.category})
              </li>
            ))}
          </ul>
        ) : (
          <p>No products match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
