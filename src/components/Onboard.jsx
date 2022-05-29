import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Transactions from "./Transactions";
import TableHeader from "./Tables/Header";
import TableLine from "./Tables/Body";
import ASSETS from "./Assets";
import Icons from "./Icons";
import Card from "./Card";
import News from "./News";
import { formatDate } from "../functions/format";
import "../styles/onboard.scss";
import * as Cookie from "../api/cookie";

export default function OnboardComponent(props) {
    // aciona modal que mostra todas as transações
    const [showTransactions, setShowTransactions] = useState(false);
    const navigate = useNavigate();

    // ultimas cinco transações nas atividades recentes
    function renderTheFirstFive() {
        let resp = [];
        let len = props.userTransactions.length;
        let limit = len < 5 ? len : 5;
        for (let i = 0; i < limit; i++) {
            resp.push(props.userTransactions[i]);
        }
        return resp.map(({ _id, tipo, valor, data }) => {
            let formatedDate = formatDate(data);
            return (
                <TableLine
                    key={_id}
                    date={formatedDate}
                    store={tipo}
                    value={"R$ " + valor.toFixed(2)}
                />
            );
        });
    }

    function logout() {
        if (window.confirm("Tem certeza que deseja sair?")) {
            Cookie.eraseCookies(); // apaga cookies de sessão
            navigate("/landing-page");
        }
    }

    // chamado do modal que mostra as transações do usuário
    return (
        <div className="onboard">
            {showTransactions ? (
                <Transactions
                    transactions={props?.userTransactions}
                    closeTransactions={() => setShowTransactions(false)}
                />
            ) : (
                <>
                    <div className="side-menu">
                        <div className="brand-name">
                            <span>Green</span>
                        </div>
                        <ul>
                            {[
                                {
                                    icon: ASSETS.IMAGES.home,
                                    text: "Início",
                                    href: "/landing-page",
                                },
                                {
                                    icon: ASSETS.IMAGES.save_money,
                                    text: "Saldo",
                                },
                                {
                                    icon: ASSETS.IMAGES.extract,
                                    text: "Extrato",
                                    clickFunction: () =>
                                        setShowTransactions(true),
                                },
                                {
                                    icon: ASSETS.IMAGES.transfer,
                                    text: "Transferir",
                                    href: "/transfer",
                                },
                                {
                                    icon: ASSETS.IMAGES.card,
                                    text: "Cartões",
                                    href: "/cards",
                                },
                                {
                                    icon: ASSETS.IMAGES.help,
                                    text: "Ajuda",
                                    href: "/help",
                                },
                                {
                                    icon: ASSETS.IMAGES.user,
                                    text: "Dados pessoais",
                                    href: "/profile",
                                },
                            ].map(
                                (
                                    { icon, text, href, clickFunction } // monta ícones laterais
                                ) => (
                                    <Icons
                                        key={text}
                                        icon={icon}
                                        alt={text}
                                        href={href}
                                        text={text}
                                        generalFunction={clickFunction}
                                    />
                                )
                            )}
                        </ul>
                    </div>

                    <div className="main">
                        <div className="header">
                            <div className="nav">
                                <div className="search">
                                    <input type="text" placeholder="Pesquisa" />
                                    <button type="submit">
                                        <img
                                            src={ASSETS.IMAGES.search}
                                            alt="pesquisa"
                                            className="icon-menu"
                                        />
                                    </button>
                                </div>

                                <div className="user">
                                    <button
                                        onClick={() => logout()}
                                        className="button"
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="content">
                            <div className="cards">
                                <Card
                                    tittle="Saldo"
                                    value={`R$ ${props.userBalance.toFixed(2)}`}
                                    icon={ASSETS.IMAGES.save_money}
                                    alt="saldo"
                                />

                                <Card
                                    tittle="Transferir"
                                    value="Clique aqui"
                                    icon={ASSETS.IMAGES.transfer}
                                    alt="transferir"
                                    href="/transfer"
                                />
                                <Card
                                    tittle="Cartões"
                                    value="Saiba mais"
                                    icon={ASSETS.IMAGES.card}
                                    alt="cartões"
                                    href="/cards"
                                />
                            </div>
                            <div className="content-2">
                                <div className="recent-info">
                                    <div className="tittle">
                                        <div className="inner-tittle">
                                            Atividades Recentes
                                        </div>
                                        <button
                                            onClick={() =>
                                                setShowTransactions(true)
                                            }
                                            className="button"
                                        >
                                            Ver Mais
                                        </button>
                                    </div>
                                    <table>
                                        <TableHeader />
                                        <tbody>{renderTheFirstFive()}</tbody>
                                    </table>
                                </div>
                                <div className="more-info">
                                    <div className="tittle">
                                        <div className="inner-tittle">
                                            Fique por dentro!
                                        </div>
                                    </div>
                                    <table>
                                        <tbody>
                                            <News
                                                img={ASSETS.IMAGES.heart}
                                                alt="icone de coração e uma planta"
                                                link="index.html"
                                                title="Projeto verde. Saiba como ajudar!"
                                            />
                                            <News
                                                img={ASSETS.IMAGES.user_config}
                                                className="w-50"
                                                link="index.html"
                                                title='Go paperless! Atualize suas
                                    configurações em "Dados Pessoais"
                                    para tornar sua conta 100% digital.'
                                            />
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
