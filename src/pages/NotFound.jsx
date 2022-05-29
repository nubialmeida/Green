import React from "react";
import "../styles/not-found.scss";

import ASSETS from "../components/Assets";

export default function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-image">
                <img src={ASSETS.GIFS.error404} alt="error.404" />
            </div>
        </div>
    );
}
