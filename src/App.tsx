import ProductCard from "./components/ProductCard";
import ThemeToggle from "./components/ThemeToggle";

/**
 * Parent Component: App
 * This is the main container that renders the entire application.
 */
function App() {
  return (
    // Full-page container with a responsive background color that adapts to light/dark mode
    <section className="min-h-screen h-fit flex items-center justify-center bg-gray-200 dark:bg-gray-900">
      {/* Theme Toggle Component: Toggles between light and dark modes */}
      <ThemeToggle />

      {/* Product Card Component: Displays a product's details */}
      <ProductCard />
    </section>
  );
}

export default App;
