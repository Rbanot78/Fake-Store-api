import React from "react";
import Link from "next/link";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const WishlistItem = ({ product, onAddToCart, onRemoveFromWishlist }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105">
      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-64 rounded-t-2xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-5">
        {/* Product Title */}
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg md:text-xl font-bold text-gray-800 truncate cursor-pointer hover:text-blue-500 transition-colors duration-300">
            {product.title.length > 20
              ? `${product.title.substring(0, 20)}...`
              : product.title}
          </h3>
        </Link>

        {/* Product Price */}
        <p className="text-xl font-semibold text-blue-600 mt-3">
          ${product.price}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center px-5 py-4 bg-gray-50 rounded-b-2xl">
        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="flex items-center gap-2 px-6 py-2 text-white bg-gray-500 rounded-full shadow-md hover:bg-black transition-all duration-300"
        >
          <FaShoppingCart />
          <span>Add to Cart</span>
        </button>

        {/* Remove Button */}
        <button
          onClick={() => onRemoveFromWishlist(product.id)}
          className="text-gray-400 hover:text-red-600 transition duration-300"
        >
          <FaTrash className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
