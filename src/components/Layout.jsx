import { Link, Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-14 flex items-center justify-between border-2 px-5 border-blue-600">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌍</span>
          <span className="font-bold">Countries of the World</span>
        </div>

        <div className="flex gap-5">
          <Link to="/">
            <p className="text-[12px]">Home</p>
          </Link>

          <Link to="/countries">
            <p className="text-[12px]">Countries</p>
          </Link>

          <Link to="/bucket-list">
            <p className="text-[12px]">Bucket List</p>
          </Link>

          <Link to="/about">
            <p className="text-[12px]">About</p>
          </Link>
        </div>
      </nav>

      <main className="flex-1 border-2 border-amber-400 p-3">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;