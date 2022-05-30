import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/landing-page.scss";
import ASSETS from "../components/Assets";
import MoreInfo from "../components/MoreInfoLP";

export default function LandingPage() {
    const [modal, setModal] = useState(false);

    return (
        <div className="main-div">
            {modal ? <MoreInfo setModal={() => setModal(false)} /> : null}
            <div className="circle"></div>
            <header>
                <img className="logo" alt="logo" src={ASSETS.IMAGES.leaf} />
                <ul>
                    <li>
                        <Link to="/landing-page">Home</Link>
                    </li>
                    <li>
                        <Link to="/cards">Cartões</Link>
                    </li>
                    <li>
                        <Link to="/help">Ajuda</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Entrar</Link>
                    </li>
                </ul>
            </header>

            <div className="content">
                <div className="textBox">
                    <h2>
                        A sustentabilidade é <br /> nosso <span>compromisso!</span>
                    </h2>
                    <p>
                        É cliente Green e quer nos ajudar nessa missão de tornar um mundo mais
                        sustentável? Conheça o Projeto Verde! <br />
                        Com a ajuda da nação Green, estamos fazendo a diferença na vida de milhares
                        de pessoas. Nosso time já implantou mais de quinhentas hortas em comunidades
                        ao redor do Brasil, além dos treinamentos e das mais de 500.000 árvores
                        plantadas em áreas de reflorestamento! Aqui na Green, o seu dinheiro é
                        sempre verde!
                    </p>

                    <button onClick={() => setModal(true)}>Saiba Mais</button>
                </div>
                <div className="imgBox">
                    <img
                        className="sustentavel"
                        alt="sustentabilidade"
                        src={ASSETS.IMAGES.sustentability}
                    />
                </div>
            </div>

            <ul className="thumb">
                <li>
                    <img alt="sustentabilidade" src={ASSETS.IMAGES.credit_card} />
                </li>
                <li>
                    <img alt="crescimento" src={ASSETS.IMAGES.sustentability} />
                </li>
                <li>
                    <img alt="cartões" src={ASSETS.IMAGES.growth} />
                </li>
            </ul>

            <ul className="social">
                <li>
                    <a href="https://facebook.com" rel="noreferrer" target="_blank">
                        <img alt="facebook" src={ASSETS.IMAGES.facebook} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" rel="noreferrer" target="_blank">
                        <img alt="instagram" src={ASSETS.IMAGES.instagram} />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank">
                        <img alt="twitter" src={ASSETS.IMAGES.twitter} />
                    </a>
                </li>
            </ul>
        </div>
    );
}
