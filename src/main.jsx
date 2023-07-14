import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Home />
  </QueryClientProvider>
);
