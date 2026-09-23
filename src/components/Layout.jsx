import { NavLink, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 flex items-center justify-between px-5 shadow">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <span className="font-bold">Countries of the World</span>
        </div>

        <div className="flex gap-5">
          <NavLink to="/" end>
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Home
              </p>
            )}
          </NavLink>

          <NavLink to="/countries">
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Countries
              </p>
            )}
          </NavLink>

          <NavLink to="/bucket-list">
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                Bucket List
              </p>
            )}
          </NavLink>

          <NavLink to="/about">
            {({ isActive }) => (
              <p className={`text-[12px] ${isActive ? "font-bold text-blue-600" : ""}`}>
                About
              </p>
            )}
          </NavLink>
        </div>
      </nav>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;