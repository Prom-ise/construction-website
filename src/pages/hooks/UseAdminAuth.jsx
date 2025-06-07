import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TOKEN_KEY = "adminToken";
const LOGIN_TIME_KEY = "adminLoginTime";
const MAX_AGE = 5 * 60 * 60 * 1000;

const UseAdminAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    const loginTime = localStorage.getItem(LOGIN_TIME_KEY);

    if (!token || !loginTime) {
      navigate("/admin/login", { replace: true });
      return;
    }

    if (Date.now() - Number(loginTime) > MAX_AGE) {
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(LOGIN_TIME_KEY);
      navigate("/admin/login", { replace: true });
    }
  }, [navigate]);
}

export default UseAdminAuth;