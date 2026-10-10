
import { Outlet, useLocation } from "react-router";

const CountriesLayout = () => {
  const { pathname } = useLocation();
  const code = pathname.split("/")[2];

  return (
    <section className="max-w-4xl mx-auto space-y-4">
      <nav className="text-sm breadcrumbs opacity-70">
        <ul>
          <li>Countries</li>
          {code && <li>{code.toUpperCase()}</li>}
        </ul>
      </nav>
      <Outlet />
    </section>
  );
};

export default CountriesLayout;
