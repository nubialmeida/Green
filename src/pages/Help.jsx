import React from "react";
import "../styles/help.scss";
import ASSETS from "../components/Assets";

export default function Help() {
    return (
        <div className="help-container">
            <div className="chat">
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
                            <a
                                href="https://facebook.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Como faço meu cadastro?
                            </a>
                        </li>
                        <li>
                            <button>
                                Estou tendo problemas com meu login.
                            </button>
                        </li>
                        <li>
                            <button>Como navegar pela plataforma Green?</button>
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
                            <button>Como utilizar o Pix?</button>
                        </li>
                        <li>
                            <button>
                                Quais formas de transferência eu tenho
                                disponível na Green?
                            </button>
                        </li>
                        <li>
                            <a
                                href="https://facebook.com"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Envio internacional, como fazer?
                            </a>
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
                            <button>Entre em contato por telefone!</button>
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
