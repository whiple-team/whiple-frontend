import Router from "./router/index";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import axios from "axios";

function App() {
  const setAuth = useAuthStore((state) => state.setAuth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("/api/me", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => {
        setAuth(res.data.user, token);
      })
      .catch(() => {
        localStorage.removeItem("token");
      });
  }, [setAuth]);

  return <Router />;
}

export default App;
