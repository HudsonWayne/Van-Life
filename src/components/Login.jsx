import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "") {
      setErrorMessage("Email is required");
      return;
    }
    if (password === "") {
      setErrorMessage("Password is required");
      return;
    }
    if (password.length < 8) {
      setErrorMessage("Password must at least be 8 characters");
      return;
    }
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      setErrorMessage("Password must contain a special character");
      return;
    }

    history.push((window.location.href = "/Vans"));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 rounded-lg shadow-md w-full max-w-md bg-[#FFF7EB] pt-[4rem] pb-[4rem]">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sign In To Your Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          {errorMessage && (
            <div className="mb-4 text-sm text-red-600">{errorMessage}</div>
          )}
          <button
            type="submit"
            className="w-full bg-[#FF8227] text-white py-2 px-4 rounded hover:bg-[#c56e30] "
          >
            Sign In
          </button>
          <div className="mt-4 text-sm text-[20px] flex">
            <p className="text-[20px]">Does not have an account?</p>
            <a href="#" className="text-[#FF8227] hover:underline text-[20px]">
              Create one now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
