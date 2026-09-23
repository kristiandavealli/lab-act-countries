import { useParams, useNavigate, Link } from "react-router";
import COUNTRIES from "../data/countries";

const CountryDetailPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const country = COUNTRIES.find(
    (c) => c.code === countryCode.toUpperCase()
  );

  if (!country) {
    return (
      <div className="max-w-2xl mx-auto py-10 text-center space-y-4">
        <h1 className="text-3xl font-bold">Country not found</h1>
        <p>
          No country with code "{countryCode}" exists in our data.
        </p>

        <Link to="/countries" className="btn btn-primary">
          Back to Countries
        </Link>
      </div>
    );
  }

  const handleRandom = () => {
    const others = COUNTRIES.filter((c) => c.code !== country.code);
    const random = others[Math.floor(Math.random() * others.length)];

    navigate(`/countries/${random.code}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <div className="text-center space-y-4">
        <div className="text-7xl">{country.flag}</div>

        <h1 className="text-4xl font-bold">{country.name}</h1>

        <p className="text-lg">
          Capital: <strong>{country.capital}</strong>
        </p>

        <div className="flex justify-center gap-6">
          <span>{country.region}</span>
          <span>{country.population.toLocaleString()} people</span>
        </div>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => navigate(-1)}
            className="btn"
          >
            Back
          </button>

          <button
            onClick={handleRandom}
            className="btn btn-primary"
          >
            Random Country
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailPage;