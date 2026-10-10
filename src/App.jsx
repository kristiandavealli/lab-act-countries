
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import CountriesLayout from "./components/CountriesLayout";
import RequireValidCountry from "./components/RequireValidCountry";
import RequireLogin from "./components/RequireLogin";
import HomePage from "./pages/HomePage";
import CountriesPage from "./pages/CountriesPage";
import CountryDetailPage from "./pages/CountryDetailPage";
import BucketListPage from "./pages/BucketListPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route path="countries" element={<CountriesLayout />}>
          <Route index element={<CountriesPage />} />

          <Route element={<RequireValidCountry />}>
            <Route
              path=":countryCode"
              element={<CountryDetailPage />}
            />
          </Route>
        </Route>

        <Route element={<RequireLogin />}>
          <Route path="bucket-list" element={<BucketListPage />} />
        </Route>

        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
