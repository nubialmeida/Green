import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
    let value = props.value;
    let color = "";

    const REGEX = /^R\$/g;
    if (REGEX.test(props.value)) {
        let holder = value.replace("R$ ", "");
        holder = Number(holder);
        if (holder < 0) color = "red";
        if (holder > 0) color = "green";
    }

    return (
        <div className="card-item">
            <Link to={props.href || ""}>
                <div className="box">
                    <div className="card-tittle">{props.tittle}</div>
                    <div
                        className={`card-description ${
                            color !== "" ? color : ""
                        }`}
                    >
                        {props.value}
                    </div>
                </div>
                <div className="icon-case">
                    <img
                        src={props.icon}
                        alt={props.alt}
                        className="icon-cards"
                    />
                </div>
            </Link>
        </div>
    );
}
