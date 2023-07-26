
import { Link } from "react-router-dom";

const Login = () => {
  

  return (
    <section className="min-h-screen bg-violet-200 flex items-center justify-center py-8">
      <div className="bg-purple-400 bg-opacity-40 p-8 border-solid border-4 border-transparent rounded-lg w-96">
        <h1 className="mb-6 text-4xl text-center text-purple-800 font-extrabold">LogIn</h1>

        <form>
          <div className="mb-4">
            <label For="Email" className="font-semibold text-purple-800 flex items-center mb-2">
              Email address
            </label>
            <input
              type="text"
              className="focus:outline-none bg-violet-200 border-2 border-transparent rounded-full px-3 py-2 w-full placeholder-purple-400/60"
              id="Email"
              placeholder="Email address"
            />
          </div>

          <div className="mb-4 ">
            <label For="Password" className="font-semibold text-purple-800 flex items-center mb-2">
              Password
            </label>
            <input
              type="password"
              className="focus:outline-none bg-violet-200 border-2 border-transparent rounded-full px-3 py-2 w-full placeholder-purple-400/60"
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
            <label className="text-purple-800 font-semibold" For="rememberme">
              Remember me
            </label>
          </div>

          <div className="text-purple-800 flex flex-col items-center mb-4 font-semibold">
            <Link to="/Signup">Don't have an account? SignUp Now!</Link>
          </div>

          <button
            type="submit"
            className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-full w-full transition-colors duration-300"
          >
            LogIn
          </button>

          <div className="my-4">
            <p className="text-center text-purple-800 mb-6 font-semibold">or continue with </p>
          </div>

          <a
            className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-12 py-3 mr-3  rounded-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Google
          </a>
          <a
            className="font-bold bg-purple-400 hover:bg-purple-500 text-white px-10 py-3 ml-1  rounded-full text-center transition-colors duration-300"
            href="#!"
            role="button"
          >
            Facebook 
          </a>
        </form>
      </div>
    </section>
  );
};

export default Login;
