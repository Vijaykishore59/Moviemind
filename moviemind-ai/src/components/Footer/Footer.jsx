import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#050816]">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center font-bold text-lg">
                M
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  MovieMind
                </h2>

                <p className="text-slate-400 text-sm">
                  Discover Better Movies
                </p>
              </div>

            </div>

            <p className="mt-6 text-slate-400 leading-relaxed">
              Explore trending movies, discover hidden gems,
              create watchlists, and enjoy a premium movie
              discovery experience.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Navigation
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/genres"
                  className="hover:text-indigo-400 transition"
                >
                  Genres
                </Link>
              </li>

              <li>
                <Link
                  to="/languages"
                  className="hover:text-indigo-400 transition"
                >
                  Languages
                </Link>
              </li>

              <li>
                <Link
                  to="/search"
                  className="hover:text-indigo-400 transition"
                >
                  Search
                </Link>
              </li>

            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  to="/about"
                  className="hover:text-indigo-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/watchlist"
                  className="hover:text-indigo-400 transition"
                >
                  Watchlist
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition"
                >
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>

            <h3 className="text-white font-semibold text-lg mb-5">
              Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FaTwitter />
              </a>

            </div>

            <div className="mt-6 p-4 rounded-2xl bg-[#111827] border border-white/10">

              <p className="text-slate-400 text-sm">
                Stay updated with the latest trending movies and recommendations.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm">
            © 2026 MovieMind. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm">
            Built with React • Django • MySQL
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;