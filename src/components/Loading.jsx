import React from "react";
import "../styles/loading.scss";

import ASSETS from "./Assets";

export default function Loading() {
    return (
        <div className="loading">
            <img src={ASSETS.GIFS.loading} alt="loading" />
        </div>
    );
}
