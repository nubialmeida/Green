import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing-page.scss";
import ASSETS from "../components/Assets";

export default function Cards() {
    return (
        <div className="main-div">
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
                        Saiba mais sobre <br /> nossos <span>cartões!</span>
                    </h2>
                    <p>
                        Os cartões de crédito Green chegaram e você já pode garantir o seu verdinho!
                        Na Green, você pode adquirir seu cartão sem burocracia. Solicite on-line e
                        receba na sua casa. Simples, rápido e fácil assim, só na Green.
                    </p>
                    <button>Saiba Mais</button>
                </div>
                <div className="imgBox">
                    <img className="cards" alt="sustentabiliade" src={ASSETS.IMAGES.credit_card} />
                </div>
            </div>

            <ul className="thumb">
                <li>
                    <img alt="sustentabiliade" src={ASSETS.IMAGES.credit_card} />
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
