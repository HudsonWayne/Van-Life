import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password || !confirmPassword) {
      setErrorMessage("All fields are required");
    } else if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else {
      setErrorMessage("");
      console.log("Form submitted", { email, password });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-[#FFF7EB] rounded-lg shadow-md w-80 w-full max-w-md"
      >
        <h2 className="mb-4 text-2xl font-bold text-center">Sign Up</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        {errorMessage && (
          <div className="mb-4 text-sm text-red-600">{errorMessage}</div>
        )}
        <button
          type="submit"
          className="w-full px-3 py-2 font-bold text-white bg-[#FF8227] rounded hover:bg-[#c56e30]"
        >
          Sign Up
        </button>
        <div className="mt-4 text-sm text-center flex">
          <p className="text-[20px]">Already have an account?</p>
          <a href="#" className="text-[#FF8227] hover:underline text-[20px]">
            Sign In
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
