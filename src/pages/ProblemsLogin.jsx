import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/problems-login.scss";

export default function ProblemsLogin() {
    const navigate = useNavigate();
    return (
        <div className="problems-container">
            <div className="problems-login">
                <div className="close" onClick={() => navigate(-1)}>
                    X
                </div>
                <h1>
                    Não estou conseguindo acessar minha conta no App, o que devo
                    fazer?
                </h1>
                <p>
                    Veja abaixo algumas configurações necessárias para acessar
                    nosso App:{" "}
                </p>
                <ul>
                    <li>
                        Confira se está tudo certo com a sua conexão de
                        Internet;
                    </li>
                    <li>
                        Verifique se a data e hora do seu aparelho estão
                        configuradas no modo "automático" ou "definido pela
                        rede" e de acordo com o fuso horário de Brasília
                        (GMT-03:00);
                    </li>
                    <li>
                        Certifique-se de que seu aparelho esteja com algum tipo
                        de bloqueio de tela ou biometria.);
                    </li>
                </ul>
                <p>
                    Caso mesmo assim você não consiga realizar o acesso à conta,
                    entre em contato com a gente no telefone{" "}
                    <mark>3003 4000</mark> - Opção 1 (capitais e regiões
                    metropolitanas) ou <mark>0800 940 0000</mark> (demais
                    localidades) ou <mark>0800 979 7090</mark> (deficiente de
                    fala e audição), que iremos te ajudar. Caso prefira, você
                    também falar com a gente através do nosso <mark>Chat.</mark>
                </p>
            </div>
        </div>
    );
}
