import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Signup = () => {
  const [email, setEmail] = useState(""); //to keep track of the values which is inputed in the form
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-light-pink">
      <form
        className="signup w-1/4 min-w-[200px]  p-10 rounded-2xl shadow-2xl bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-5xl text-center my-5">Log In</h1>
        <p className="text-center text-sm px-10">
          Hey, Enter the details below to sign up for an account
        </p>
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-deep-pink text-sm border border-deep-pink rounded-md py-3 px-7 transition duration-300 ease focus:outline-none shadow-sm focus:shadow my-5"
          type="email"
          placeholder="Email :"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        {/* setting the value for the field with the value which is entered dynamically - two way data binding*/}
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-deep-pink text-sm border border-deep-pink rounded-md py-3 px-7 transition duration-300 ease focus:outline-none shadow-sm focus:shadow"
          type="password"
          placeholder="Password :"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <p className="text-sm my-5">Having trouble singing up?</p>
        {/* setting the value for the field with the value which is entered dynamically - two way data binding*/}

        <button
          disabled={isLoading}
          className="text-white font-bold w-full rounded-md bg-action-pink py-3 px-7 text-center text-sm transition-all  hover:shadow-lg active:bg-action-pink hover:bg-deep-pink active:shadow-none disabled:bg-deep-pink"
        >
          SignUp
        </button>
        {error && <div className="error">{error}</div>}
        <p className="text-center text-sm px-10 my-5">
          Already have an account?
        </p>
      </form>
    </div>
  );
};

export default Signup;
