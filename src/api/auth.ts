import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

// 로그인
export const login = async (email: string, password: string) => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

// 회원가입
export const join = async (username: string, email: string, password: string) => {
  const res = await api.post("/auth/join", {
    username,
    email,
    password,
  });
  return res.data;
};
