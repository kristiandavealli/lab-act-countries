import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/countries" element={<Layout><CountriesPage /></Layout>} />
      <Route path="/bucket-list" element={<Layout><BucketListPage /></Layout>} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
    </Routes>
  );
};

export default App;