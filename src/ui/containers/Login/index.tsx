import { signIn } from "@service/AuthService";
import { useMutation } from "@tanstack/react-query";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const auth = useMutation(signIn, {
    onSuccess: () => {
      navigate("/");
    },
  });

  return (
    <div className="my-4">
      <h1 className="my-4 text-3xl font-bold">Login</h1>

      <button
        className="rounded-md border bg-cyan-600 px-3 py-1 text-white"
        disabled={auth.isLoading}
        onClick={() => auth.mutate()}
      >
        {auth.isLoading ? "Login..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
