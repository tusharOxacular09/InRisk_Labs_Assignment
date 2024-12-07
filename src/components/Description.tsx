import React, { useState } from "react";

/**
 * Description Component
 *
 * This component displays a product description with the option to expand
 * or collapse the content. By default, only the first few sentences are shown,
 * and the rest can be revealed by clicking the "Read More" button.
 * Once expanded, the user can collapse the description by clicking "Read Less".
 */
const Description: React.FC = () => {
  // State to track whether the description is expanded or collapsed
  const [expanded, setExpanded] = useState(false);

  return (
    // Paragraph element displaying the description text with conditional rendering
    <p className="text-gray-700 dark:text-gray-400 text-sm my-3">
      {expanded ? (
        // When description is expanded, show the full text
        <>
          Apple Watch Series 7 is a revolutionary smartwatch designed to elevate
          your everyday life. Equipped with the most advanced features, it
          redefines fitness and health tracking. The large, always-on Retina
          display provides seamless experience for checking notifications,
          tracking workouts etc.
          {/* Button to collapse the description */}
          <button
            onClick={() => setExpanded(false)} // Changes `expanded` state to false
            className="text-blue-500 hover:underline ml-2"
          >
            Read Less
          </button>
        </>
      ) : (
        // When description is collapsed, show only the first part of the text
        <>
          Apple Watch Series 7 is a revolutionary smartwatch designed to elevate
          your everyday life. Equipped with the most advanced features...
          {/* Button to expand the description */}
          <button
            onClick={() => setExpanded(true)} // Changes `expanded` state to true
            className="text-blue-500 hover:underline ml-2"
          >
            Read More
          </button>
        </>
      )}
    </p>
  );
};

export default Description;
