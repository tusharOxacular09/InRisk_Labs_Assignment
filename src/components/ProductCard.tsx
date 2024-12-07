import React from "react";
import Ratings from "./Ratings";
import Description from "./Description";

/**
 * ProductCard Component
 *
 * This component renders a product card with the following sections:
 * 1. Image of the product.
 * 2. Product title and description.
 * 3. Product ratings.
 * 4. Price and a "Buy Now" button.
 * The layout changes responsively for mobile (single column) and desktop (two columns).
 */
const ProductCard: React.FC = () => {
  return (
    // Container for the product card with flex layout. On mobile, it's a column, and on desktop, it's a row.
    <div className="flex flex-col md:flex-row max-lg:mx-4 w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Image Section */}
      <a href="#" className="md:w-1/2">
        {/* Product image with padding, rounded corners on top for mobile and left for desktop */}
        <img
          className="p-8 max-sm:py-4 max-sm:px-6 rounded-t-lg md:rounded-t-none md:rounded-l-lg"
          src="/assets/apple-watch.png"
          alt="product image"
        />
      </a>

      {/* Content Section */}
      <div className="flex flex-col justify-between px-5 py-5 md:w-1/2">
        {/* Title Section */}
        <a href="#">
          {/* Product title with responsive font and dark mode support */}
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        {/* Description Section */}
        {/* The Description component displays the product description with an expand/collapse feature */}
        <Description />

        {/* Ratings Section */}
        {/* Custom Ratings component to display product ratings (assumed to be a custom implementation) */}
        <div className="sm:mb-3">
          <Ratings />
        </div>

        {/* Price and Button Section */}
        <div className="flex items-center justify-between">
          {/* Price with large font size and dark mode text color */}
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>

          {/* "Buy Now" button styled with a blue background and hover effects */}
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
