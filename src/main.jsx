import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  </CartProvider>
);
