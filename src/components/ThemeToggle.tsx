import React, { useEffect, useState } from "react";

/**
 * ThemeToggle Component
 *
 * This component allows users to toggle between light and dark themes.
 * It dynamically adds or removes the "dark" class to/from the HTML element
 * to apply dark mode styling using Tailwind CSS.
 */
const ThemeToggle: React.FC = () => {
  // State to manage dark mode; default value is `true` (dark mode enabled by default)
  const [darkMode, setDarkMode] = useState(true);

  /**
   * useEffect Hook
   * This hook runs every time `darkMode` state changes.
   * - If `darkMode` is true, it adds the "dark" class to the HTML element.
   * - If `darkMode` is false, it removes the "dark" class.
   */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); // Dependency array ensures the effect runs only when `darkMode` changes.

  return (
    // Button to toggle between light and dark modes
    <button
      onClick={() => setDarkMode(!darkMode)} // Toggles the darkMode state
      className="absolute right-5 top-5 max-sm:right-2 max-md:top-2 p-2 rounded-full bg-gray-300 dark:bg-gray-800"
    >
      {darkMode ? (
        // Icon displayed in dark mode: Sun (to switch to light mode)
        <img
          className="w-6 h-6 max-sm:w-5 max-sm:h-5 rounded-full"
          src="/assets/sun.svg"
          alt="sun"
        />
      ) : (
        // Icon displayed in light mode: Moon (to switch to dark mode)
        <img
          className="w-6 h-6 max-sm:w-5 max-sm:h-5 rounded-full"
          src="/assets/moon.svg"
          alt="moon"
        />
      )}
    </button>
  );
};

export default ThemeToggle;
