import { Outlet, Link, useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-full grid grid-rows-[auto_1fr]">
      <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-7 rounded-lg bg-brand-500"></div>
          <span className="font-semibold tracking-tight lowercase">holocall</span>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/" className={`btn ${pathname === "/" ? "bg-white/10" : ""}`}>home</Link>
          <Link to="/call" className={`btn ${pathname === "/call" ? "bg-white/10" : ""}`}>demo</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
