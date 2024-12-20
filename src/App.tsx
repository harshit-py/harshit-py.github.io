import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="min-h-screen bg-navy">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;