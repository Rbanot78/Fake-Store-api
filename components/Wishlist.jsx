import React from "react";
import Link from "next/link";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const WishlistItem = ({ product, onAddToCart, onRemoveFromWishlist }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 ease-in-out hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="relative cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="object-cover w-full h-64 rounded-t-xl transition duration-300 ease-in-out transform hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 truncate cursor-pointer hover:text-blue-600">
            {product.title.length > 18
              ? `${product.title.substring(0, 18)}...`
              : product.title}
          </h3>
        </Link>
        <p className="text-lg text-blue-600 mt-2 font-medium">${product.price}</p>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-b-xl">
        <button
          onClick={() => onAddToCart(product)}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
        >
          <FaShoppingCart className="mr-2 inline-block" />
          Add to Cart
        </button>
        <button
          onClick={() => onRemoveFromWishlist(product.id)}
          className="text-red-600 hover:text-red-800 transition duration-300"
        >
          <FaTrash className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
