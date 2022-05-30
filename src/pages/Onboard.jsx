import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardComponent from "../components/Onboard";
import Loading from "../components/Loading";
import * as API from "../api";
import * as Cookie from "../api/cookie";
import axios from "axios";

export default function Onboard() {
    const [userBalance, setUserBalance] = useState("");
    const [userTransactions, setUserTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function apiRequest() {
            let cpf = Cookie.getCookie("cpf"); // checa cookie do cpf, igual o checkout
            if (cpf === undefined) {
                const cookieEmail = Cookie.getCookie("email"); //checa cookie do email, igual o checkout
                if (cookieEmail === undefined) navigate("/checkout");

                const allUsers = await API.getAllAccounts();
                cpf = allUsers.find(({ email }) => email === cookieEmail).cpf;
                Cookie.setCookie("cpf", cpf);
            }

            const transactions = await API.getTransactions(cpf); //caso o usuário já tiver sessão, salva o
            const balance = await API.getBalance(cpf); // estado das transações do usário e seu saldo
            axios.all([transactions, balance]).then(
                axios.spread((...data) => {
                    const t = data[0];
                    const b = data[1];
                    setUserTransactions(t);
                    setUserBalance(b);
                    setLoading(false);
                })
            );
        }
        apiRequest();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                // componente possui grande parte das interações
                <OnboardComponent {...{ userBalance, userTransactions }} />
            )}
        </>
    );
}
