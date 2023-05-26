import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  Navbar,
  SearchResults,
  ProductPage,
  Checkout,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}
