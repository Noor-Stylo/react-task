
import { Link } from "react-router-dom";

const Login = () => {
  

  return (
    <section className="min-h-screen bg-violet-200 flex items-center justify-center py-8">
      <div className="bg-purple-400 bg-opacity-40 p-8 border-solid border-4 border-transparent rounded-lg w-96">
        <h1 className="mb-6 text-4xl text-center text-purple-800">Login</h1>

        <form>
          <div className="mb-4">
            <label For="Email" className="text-purple-800 flex items-center mb-2">
              Email address
            </label>
            <input
              type="text"
              className="bg-violet-200 border-2 border-transparent rounded-lg px-3 py-2 w-full placeholder-purple-400/60"
              id="Email"
              placeholder="Email address"
            />
          </div>

          <div className="mb-4 ">
            <label For="Password" className="text-purple-800 flex items-center mb-2">
              Password
            </label>
            <input
              type="password"
              className="bg-violet-200 border-2 border-transparent rounded-lg px-3 py-2 w-full placeholder-purple-400/60"
              id="Password"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              className="bg-violet-100 mr-2"
              type="checkbox"
              
              id="rememberme"
              
            />
            <label className="text-purple-800" For="rememberme">
              Remember me
            </label>
          </div>

          <div className="text-purple-800 flex flex-col items-center mb-4">
            <Link to="/Signup">Don't have an account? Sign Up Now</Link>
          </div>

          <button
            type="submit"
            className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg w-full transition-colors duration-300"
          >
            Log In
          </button>

          <div className="my-4">
            <p className="text-center text-purple-800">OR</p>
          </div>

          <a
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg block mb-2 w-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Continue with Facebook
          </a>
          <a
            className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg block w-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Continue with Twitter
          </a>
        </form>
      </div>
    </section>
  );
};

export default Login;
