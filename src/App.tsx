/**
 * @file App.tsx
 * @description Main application component with routing setup
 */

import { routes } from "@/routes/routes";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { CartProvider } from "./lib/context/CartProvider";

const AppRoutes = () => {
  return useRoutes(routes);
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
