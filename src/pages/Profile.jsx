import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../components/Assets";
import Loading from "../components/Loading";
import * as API from "../api";
import * as Cookie from "../api/cookie";

import "../styles/profile.scss";

export default function Profile() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function apiRequest() {
            let userCpf = Cookie.getCookie("cpf"); // checa cookie do cpf, igual o checkout
            if (userCpf === undefined) navigate("/checkout");

            const allUsers = await API.getAllAccounts();
            const resp = allUsers.find(({ cpf }) => cpf === userCpf);
            setUser(resp);
            setLoading(false);
        }
        apiRequest();
    }, []);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="profile-container">
                    <div className="profile">
                        <img
                            src={ASSETS.IMAGES.back}
                            alt="imagem de voltar a página"
                            className="img-back-profile"
                            onClick={() => navigate(-1)}
                        />
                        <div>
                            <h5>Perfil</h5>
                        </div>
                        <hr />
                        <div>Nome {user?.nome} </div>
                        <hr />

                        <div>Email {user?.email} </div>
                        <hr />

                        <div>Telefone {user?.telefone}</div>
                        <hr />

                        <div>CPF {user?.cpf}</div>
                        <hr />

                        <div>Consultar senha </div>
                    </div>
                </div>
            )}
        </>
    );
}
