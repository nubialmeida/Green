import React from "react";
import "../styles/not-found.scss";
import { Link } from "react-router-dom";

import ASSETS from "../components/Assets";

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-image">
                <h2>Oops! Não encontramos a página que você está procurando.</h2>
                <img src={ASSETS.GIFS.error404} alt="error.404" />
                <p>
                    Não se preocupe, seus dados estão seguros com a gente. Enquanto trabalhamos para
                    resolver esse erro, que tal conhecer o nosso{" "}
                    <Link className="p_error" to="/landing-page">
                        Projeto Verde
                    </Link>
                    ?
                </p>
            </div>
        </div>
    );
}
