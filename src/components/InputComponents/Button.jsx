import React from "react";

export default function ButtonComponent(props) {
    return (
        <>
            <input
                id={props.id}
                type={props.type}
                value={props.value}
                className="login-btn"
                onClick={props.onClick}
            />
        </>
    );
}
