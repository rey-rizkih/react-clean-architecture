import { Outlet, useNavigate } from "react-router-dom";

import { signOut } from "@service/AuthService";
import { getUserLocal } from "@service/userService";
import { useEffect } from "react";

interface PrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute = ({ redirectPath = "/login" }: PrivateRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserLocal();
    if (!user) {
      navigate(redirectPath);
    }
  }, []);

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <div>
      <button className="rounded-md border bg-red-600 px-3 py-1 text-white" onClick={handleSignOut}>
        Logout
      </button>
      <Outlet />
    </div>
  );
};

export default PrivateRoute;
