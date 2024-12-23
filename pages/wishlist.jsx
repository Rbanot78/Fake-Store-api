import React from "react";
import Link from "next/link";
import WishlistItem from "@/components/Wishlist";
import { useFilter } from "@/context/FilterContext";

const Wishlist = () => {
  const { wishlistItems, addToCart, removeFromWishlist } = useFilter();

  const handleAddToCart = (product) => {
    addToCart(product);
    removeFromWishlist(product.id);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Your Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-600">Your wishlist is empty.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold">
            Go back to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistItems.map((product) => (
            <WishlistItem
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onRemoveFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-6">
        <Link
          href="/"
          className="bg-gray-800 text-white py-2 px-6 rounded-md hover:bg-gray-900 transition duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Wishlist;
