import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../components/Assets";
import Loading from "../components/Loading";
import * as API from "../api";
import * as Cookie from "../api/cookie";
import { Link } from "react-router-dom";

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
                        <div>
                            <strong> Nome: </strong>
                            {user?.nome}{" "}
                        </div>
                        <hr />

                        <div>
                            <strong> Email: </strong>
                            {user?.email}{" "}
                        </div>
                        <hr />

                        <div>
                            <strong>Telefone: </strong>
                            {user?.telefone}
                        </div>
                        <hr />

                        <div>
                            <strong>CPF: </strong>
                            {user?.cpf}
                        </div>
                        <hr />

                        <div>
                            <strong>
                                <Link to="/*">Consultar senha</Link>{" "}
                            </strong>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
