import { Outlet, Link, useLocation } from "react-router-dom";
import logoUrl from "./assets/holocall-logo.svg?url"; // <-- change

export default function App() {
  const { pathname } = useLocation();
  return (
    <div className="min-h-full grid grid-rows-[auto_1fr] bg-slate-950 text-slate-100">
      <header className="flex items-center justify-between gap-4 px-4 py-3 border-b border-white/10 bg-slate-900/70 backdrop-blur">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="Holocall" className="w-7 h-7 rounded" />   {/* <-- change */}
          <span className="font-display font-semibold tracking-tight lowercase">holocall</span>
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
