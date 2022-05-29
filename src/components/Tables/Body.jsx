import React from "react";

export default function TableLine(props) {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.store}</td>
            <td>{props.value}</td>
            <td>{props.cash}</td>
        </tr>
    );
}
