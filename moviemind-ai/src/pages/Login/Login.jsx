import AuthCarousel from "../../components/AuthCarousel/AuthCarousel";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#050816]">

      <div className="grid lg:grid-cols-[70%_30%] min-h-screen">

        {/* Left Carousel */}
        <div className="hidden lg:block overflow-hidden">
          <AuthCarousel />
        </div>

        {/* Right Login Form */}
        <div className="flex items-center justify-center px-8 lg:px-10 bg-[#050816]">

          <div className="w-full max-w-sm">

            <div className="mb-10">

              <h1 className="text-4xl font-bold text-white mb-3">
                Welcome Back
              </h1>

              <p className="text-slate-400">
                Sign in to continue your movie journey.
              </p>

            </div>

            <form className="space-y-5">

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

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-medium transition"
              >
                Login
              </button>

            </form>

            <div className="mt-6 text-center">

              <button className="text-sm text-slate-400 hover:text-indigo-400 transition">
                Forgot Password?
              </button>

            </div>

            <div className="mt-10 text-center">

              <p className="text-slate-400">
                Don't have an account?{" "}
                <span className="text-indigo-400 cursor-pointer hover:text-indigo-300">
                  Sign Up
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Login;