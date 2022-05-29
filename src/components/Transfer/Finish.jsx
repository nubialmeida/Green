import React from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../Assets";
export default function Finish(props) {
    const navigate = useNavigate();

    return (
        <div className={`finish ${props.className ?? ""}`}>
            <img
                className="back"
                onClick={props.backStage}
                src={ASSETS.IMAGES.back}
                alt="voltar"
            />

            <div className="close" onClick={() => navigate("/onboard")}>
                X
            </div>
            <h3> Transferindo</h3>
            <div className="transfering">
                <div className="reais">
                    <span>
                        <b>R$ {props.valueToTransfer}</b>
                    </span>
                </div>
                {props.showDestiny}
                <div>
                    <span>
                        <b>CPF</b>
                        {" " + props.destinyToTransfer}
                    </span>
                </div>
            </div>
            <button className="btn" onClick={props.function}>
                Transferir
            </button>
        </div>
    );
}
