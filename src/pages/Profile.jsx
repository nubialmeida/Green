import React from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../components/Assets";

import "../styles/profile.scss";

export default function Profile() {
    const navigate = useNavigate();

    return (
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
                <hr></hr>
                <div>Nome de preferência </div>
                <hr></hr>

                <div>Email </div>
                <hr></hr>

                <div>Telefone </div>
                <hr></hr>

                <div>Endereço </div>
                <hr></hr>

                <div>Consultar senha </div>
            </div>
        </div>
    );
}
