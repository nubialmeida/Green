import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../components/FormComponents/Login";
import Register from "../components/FormComponents/Register";
import Carrousel from "../components/Carrousel";
import * as API from "../api";
import * as Cookie from "../api/cookie";
import "../styles/checkout.scss";

export default function Checkout() {
    const navigate = useNavigate();
    useEffect(() => {
        async function apiRequest() {
            let cpf = Cookie.getCookie("cpf"); // checa sessao
            if (cpf === undefined) {
                const cookieEmail = Cookie.getCookie("email");
                if (cookieEmail === undefined) alert("Seja Bem-Vindo(a)!");
                else {
                    const allUsers = await API.getAllAccounts();
                    cpf = allUsers.find(
                        ({ email }) => email === cookieEmail
                    ).cpf;
                    Cookie.setCookie("cpf", cpf);
                }
            }
            if (cpf !== undefined) {
                navigate("/onboard");
            }
        }
        apiRequest();
    }, [navigate]);

    const [registerMode, toggleRegisterMode] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");

    async function loginAccount() {
        const resp = await API.loginAccount(userEmail, userPassword);
        if (resp.status === 200) {
            Cookie.setCookie("email", userEmail);
            alert("Bem-vindo(a), ao Banco Green :)");
            navigate("/onboard");
        }
    }

    async function createAccount() {
        const resp = await API.createAccount(
            userName,
            userEmail,
            userPassword,
            userPhone,
            userDate,
            userCpf
        );
        if (resp.status === 201) {
            Cookie.setCookie("cpf", userCpf);
            alert("Bem-vindo(a), ao Banco Green :)");
            navigate("/onboard");
        }
    }

    return (
        <div className="checkout-menu">
            <main className={registerMode ? "register-mode" : ""}>
                <div className="main-box">
                    <div className="inner-box">
                        <div className="forms">
                            <Login
                                user={{
                                    email: userEmail,
                                    password: userPassword,
                                }}
                                setUserEmail={(e) =>
                                    setUserEmail(e.target.value)
                                }
                                setUserPassword={(e) =>
                                    setUserPassword(e.target.value)
                                }
                                changeScreen={() => toggleRegisterMode(true)}
                                loginAccount={() => loginAccount()}
                            />
                            <Register
                                user={{
                                    name: userName,
                                    password: userPassword,
                                    date: userDate,
                                    email: userEmail,
                                    phone: userPhone,
                                    cpf: userCpf,
                                }}
                                setUserName={(e) => setUserName(e.target.value)}
                                setUserPassword={(e) =>
                                    setUserPassword(e.target.value)
                                }
                                setUserCpf={(e) => setUserCpf(e.target.value)}
                                setUserDate={(e) => setUserDate(e.target.value)}
                                setUserPhone={(e) =>
                                    setUserPhone(e.target.value)
                                }
                                setUserEmail={(e) =>
                                    setUserEmail(e.target.value)
                                }
                                changeScreen={() => toggleRegisterMode(false)}
                                createAccount={() => createAccount()}
                            />
                        </div>

                        <Carrousel />
                    </div>
                </div>
            </main>
        </div>
    );
}
