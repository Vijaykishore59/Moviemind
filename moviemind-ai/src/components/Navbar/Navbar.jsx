import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
HiOutlineMenuAlt3,
HiX,
HiOutlineSearch,
} from "react-icons/hi";

const navLinks = [
{ name: "Home", path: "/" },
{ name: "Genres", path: "/genres" },
{ name: "Languages", path: "/languages" },
{ name: "Search", path: "/search" },
{ name: "Watchlist", path: "/watchlist" },
];

const Navbar = () => {
const [open, setOpen] = useState(false);

return ( <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-2xl"> <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
    <div className="h-20 flex items-center justify-between">

      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">

        <div className="relative">

          <div className="absolute inset-0 bg-indigo-600 blur-xl opacity-50"></div>

          <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            MM
          </div>

        </div>

        <div>
          <h1 className="text-2xl font-bold text-white">
            MovieMind
          </h1>

          <p className="text-xs text-slate-400">
            Discover Better Movies
          </p>
        </div>

      </Link>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-10">

        {navLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative text-sm font-medium transition ${
                isActive
                  ? "text-indigo-400"
                  : "text-slate-300 hover:text-white"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}

      </nav>

      {/* Right Side */}
      <div className="hidden lg:flex items-center gap-4">

        {/* Search Icon */}
        <button className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
          <HiOutlineSearch size={20} />
        </button>

        {/* Login */}
        <button className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 transition">
          Login
        </button>

        {/* Signup */}
        <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition font-medium">
          Sign Up
        </button>

      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden text-white"
      >
        {open ? (
          <HiX size={30} />
        ) : (
          <HiOutlineMenuAlt3 size={30} />
        )}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  <div
    className={`lg:hidden overflow-hidden transition-all duration-300 ${
      open ? "max-h-[600px]" : "max-h-0"
    }`}
  >
    <div className="bg-[#050816]/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6">

      <div className="flex flex-col gap-5">

        {navLinks.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => setOpen(false)}
            className="text-slate-300 hover:text-white text-lg"
          >
            {item.name}
          </NavLink>
        ))}

      </div>
      <div className="mt-8 flex flex-col gap-4">

  <Link to="/login" onClick={() => setOpen(false)}>
    <button className="w-full py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
      Login
    </button>
  </Link>

  <Link to="/register" onClick={() => setOpen(false)}>
    <button className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition">
      Sign Up
    </button>
  </Link>

</div>

    </div>
  </div>

</header>


);
};

export default Navbar;
