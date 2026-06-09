import { Link } from "react-router-dom";
import AuthCarousel from "../../components/AuthCarousel/AuthCarousel";

const Register = () => {
  return (
    <div className="min-h-screen bg-[#050816]">

      <div className="grid lg:grid-cols-[70%_30%] min-h-screen">

        {/* Left Carousel */}
        <div className="hidden lg:block overflow-hidden">
          <AuthCarousel />
        </div>

        {/* Right Signup Form */}
        <div className="flex items-center justify-center px-8 lg:px-10 bg-[#050816]">

          <div className="w-full max-w-sm">

            <div className="mb-10">

              <h1 className="text-4xl font-bold text-white mb-3">
                Create Account
              </h1>

              <p className="text-slate-400">
                Join MovieMind and start discovering amazing movies.
              </p>

            </div>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-4 rounded-xl bg-[#111827] border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500 transition"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium transition"
              >
                Create Account
              </button>

            </form>

            <div className="relative my-8">

              <div className="border-t border-white/10"></div>

              <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 bg-[#050816] text-slate-500 text-sm">
                OR
              </span>

            </div>

            <button
              className="w-full py-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition"
            >
              Continue with Google
            </button>

            <div className="mt-8 text-center">

              <p className="text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-400 hover:text-indigo-300 transition"
                >
                  Login
                </Link>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Register;