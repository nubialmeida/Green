import React from "react";
import "../styles/help.scss";
import ASSETS from "../components/Assets";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Help() {
    const navigate = useNavigate();

    return (
        <div className="help-container">
            <div className="chat">
                <img
                    src={ASSETS.IMAGES.back}
                    alt="imagem de voltar a página"
                    className="help-back"
                    onClick={() => navigate(-1)}
                />

                <span>Chat</span>
                <img src={ASSETS.IMAGES.chat} alt="chat" />
            </div>
            <div className="wrapper">
                <button className="btn">
                    <strong>Como navegar pela plataforma Green?</strong>
                </button>

                <div className="content">
                    <ul className="social">
                        <li>
                            <Link to="/landing-page">
                                Como faço meu cadastro?
                            </Link>
                        </li>
                        <li>
                            <Link to="/problems-login">
                                Estou tendo problemas com meu login.
                            </Link>
                        </li>
                        <li>
                            <Link to="/landing-page">
                                Como navegar pela plataforma Green?
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper">
                <button className="btn">
                    <strong>Transferências e área pix.</strong>
                </button>

                <div className="content">
                    <ul>
                        <li>
                            <Link to="/landing-page">Como utilizar o Pix?</Link>
                        </li>
                        <li>
                            <Link to="/landing-page">
                                Quais formas de transferência eu tenho
                                disponível na Green?
                            </Link>
                        </li>
                        <li>
                            <Link to="/landing-page">
                                Envio internacional, como fazer?
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="wrapper">
                <button className="btn">
                    <strong>Canais de atendimento.</strong>
                </button>

                <div className="content">
                    <ul>
                        <li>
                            <a
                                href="https://www.google.com/intl/pt-BR/gmail/about/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Nos envie um e-mail!
                            </a>
                        </li>
                        <li>
                            <span>Entre em contato por telefone!</span>
                        </li>
                        <li>
                            <a
                                href="https://whatsapp.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                WhatsApp!
                            </a>
                        </li>
                        <li>E também atendemos pelo chat!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
