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
            let cpf = Cookie.getCookie("cpf"); // checa cookie do cpf
            if (cpf === undefined) {
                const cookieEmail = Cookie.getCookie("email"); // checa cookie do email
                if (cookieEmail === undefined) return;
                else {
                    const allUsers = await API.getAllAccounts();
                    cpf = allUsers.find(
                        ({ email }) => email === cookieEmail
                    ).cpf;
                    Cookie.setCookie("cpf", cpf);
                    navigate("/onboard");
                }
            }
            if (cpf !== undefined) {
                navigate("/onboard");
            }
        }
        apiRequest();
    }, [navigate]);

    const [registerMode, toggleRegisterMode] = useState(false); // muda estado da tela de registro para login
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userDate, setUserDate] = useState("");
    const [userCpf, setUserCpf] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );

    async function loginAccount() {
        setLoading(true);
        const allUsers = await API.getAllAccounts();
        const exist = allUsers.find(({ email }) => email === userEmail)?.email;
        console.log(userEmail, userPassword);
        if (!exist) {
            setLoading(false);
            alert("Usuário não cadastrado");
            return;
        }
        if (!userEmail || !userPassword || !emailRegex.test(userEmail)) {
            setLoading(false);
            alert("Por favor preencha seus dados para fazer login");
            return;
        }
        const resp = await API.loginAccount(userEmail, userPassword);
        if (resp && resp.status === 200) {
            Cookie.setCookie("email", userEmail);
            alert("Bem-vindo(a) novamente ao Banco Green :)");
            navigate("/onboard");
        } else alert("Por favor revise seus dados, algum erro ocorreu :(");
        setLoading(false);
    }

    async function createAccount() {
        const allUsers = await API.getAllAccounts();
        const existCpf = allUsers.find(({ cpf }) => cpf === userCpf)?.cpf;
        let canResgister = true;
        const existEmail = allUsers.find(
            ({ email }) => email === userEmail
        )?.email;
        if (existCpf) {
            alert(
                "Usuário com CPF já cadastrado, gostou mesmo do nosso banco heim?!"
            );
            canResgister = false;
        }
        const date = new Date(userDate);
        const today = new Date();

        if (date >= today) {
            alert("Você não pode ter nascido no futuro, ou é pegadinha? haha");
            canResgister = false;
        }
        if (existEmail) {
            alert(
                "Usuário com Email já cadastrado, esqueceu a senha não foi? rs"
            );
            canResgister = false;
        }
        if (!userName) {
            alert("Usuário inválido, seu nome não tem uma letrinha?");
            canResgister = false;
        }
        if (userPhone.replaceAll(/\D/g, "").length < 11) {
            alert(
                "Por favor informe um telefone válido, como vou te chamar pro rolêzinho sem ele?"
            );
            canResgister = false;
        }
        if (userCpf.replaceAll(/\D/g, "").length < 11) {
            alert("Por favor informe um CPF válido, coloque  todos os dígitos");
            canResgister = false;
        }
        if (!emailRegex.test(userEmail)) {
            alert(
                "Email não está em formato esperado, veja se  colocou o @ e o ."
            );
            canResgister = false;
        }
        if (canResgister) {
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
                Cookie.setCookie("email", userEmail);
                alert("Bem-vindo(a) ao Banco Green :)");
                navigate("/onboard");
            } else alert("Por favor revise seus dados, algum erro ocorreu :(");
        }
    }

    // Esqueleto da página
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
                                loading={loading}
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
                                loading={loading}
                            />
                        </div>

                        <Carrousel />
                    </div>
                </div>
            </main>
        </div>
    );
}
