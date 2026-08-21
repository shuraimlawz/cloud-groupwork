function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center p-4">

      <div className="flex w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Brand Section */}
<div className="hidden w-1/2 flex-col justify-center bg-gradient-to-b from-blue-600 via-blue-800 to-blue-950 p-12 text-white md:flex">
          <img
            src="/CampusShare.svg"
            alt="CampusShare - Academic Resource Portal"
            className="mb-10 w-72 rounded-lg bg-white p-3"
          />

          <h2 className="text-4xl font-bold leading-tight">
            Share knowledge.
            <br />
            Access resources.
            <br />
            Learn together.
          </h2>

          <p className="mt-6 max-w-md text-blue-100">
            A simple academic resource platform for accessing and
            sharing lecture materials with your campus community.
          </p>

          <div className="mt-10 flex gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              📚 Resources
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              ☁️ Cloud
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              🎓 Campus
            </span>
          </div>
        </div>

        {/* Login Section */}
        <div className="w-full p-8 sm:p-12 md:w-1/2">

          <div className="mb-8 md:hidden">
            <img
              src="/CampusShare.svg"
              alt="CampusShare - Academic Resource Portal"
              className="mx-auto w-64"
            />
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome back
            </h1>

            <p className="mt-2 text-slate-500">
              Sign in to access your academic resources.
            </p>
          </div>

          <form className="space-y-5">

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Student Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="student@example.com"
                className="w-full rounded-xl border border-slate-360 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-350 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300"
                />
                Remember me
              </label>

              <button
                type="button"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-700 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-800 hover:shadow-lg"
            >
              Sign In
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Create an account
            </button>
          </p>

        </div>
      </div>
    </div>
  )
}

export default App