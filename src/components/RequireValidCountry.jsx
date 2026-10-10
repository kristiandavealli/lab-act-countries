
import { Navigate, Outlet, useLocation, useParams } from "react-router";
import COUNTRIES from "../data/countries";

const RequireValidCountry = () => {
  const { countryCode } = useParams();
  const location = useLocation();

  const exists = COUNTRIES.some(
    (country) => country.code === countryCode.toUpperCase()
  );

  if (!exists) {
    return (
      <Navigate
        to="/countries"
        state={{ missingCode: countryCode }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default RequireValidCountry;
