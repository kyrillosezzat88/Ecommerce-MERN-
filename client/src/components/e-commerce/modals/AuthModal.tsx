import { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
const AuthModal = () => {
  const [login, setLogin] = useState(true);
  return (
    <>
      {login ? <Login /> : <Register />}
      <button
        onClick={() => setLogin(!login)}
        className="text-primary underline cursor-pointer text-xs mt-3 outline-none"
      >
        {login
          ? "you dont have an account please register!"
          : "You have already registered please login!"}
      </button>
    </>
  );
};

export default AuthModal;
