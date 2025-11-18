import axios, { Axios } from "axios";


export const registerUser = async (email, password, name) => {
    try {
        // ส่ง
        const res = await axios.post(`${process.env.API_URL}/auth/register`, {
            email,
            password,
            name
        });
        // รับ/เก็บ
        const token = res.data?.token;
        if (token) {
            localStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return res.data
    } catch (error) {
        console.error("register error", error);
        throw err.response?.data || err;
    }
};

export const loginUser = async (email, password) => {
    try {
        // ส่ง
        const res = await axios.post(`${process.env.API_URL}/auth/login`, {
            email,
            password
        });
        // รับ/เก็บ
        const token = res.data?.token;
        if (token) {
            localStorage.setItem("token", token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return res.data
    } catch (error) {
        console.error("login error", error);
        throw err.response?.data || err;
    }
};

export const logoutUser = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
};

export const getUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await axios.get(`${process.env.API_URL}/auth/user`);
    return res.data;
}


