import React from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import ASSETS from "../Assets";

export default function Destiny(props) {
    const navigate = useNavigate();
    return (
        <div className={`destiny ${props.className ?? ""}`}>
            <img
                className="back"
                onClick={props.backStage}
                src={ASSETS.IMAGES.back}
                alt="voltar"
            />
            <div className="close" onClick={() => navigate("/onboard")}>
                X
            </div>
            <span>
                <h3>
                    {" "}
                    Para quem você quer transferir{" "}
                    <b>R$ {props.valueToTransfer}</b>
                </h3>
            </span>
            <form className="d-flex flex-row">
                <InputMask
                    mask="999.999.999-99"
                    type="text"
                    value={props.destinyToTransfer}
                    onChange={props.setDestinyToTransfer}
                />
                {props.destinyToTransfer.replaceAll(/\D/g, "").length > 4 &&
                props.destinyToTransfer.replaceAll(/\D/g, "").length < 11 ? (
                    <select
                        defaultValue={"default"}
                        onChange={props.setDestinyToTransfer}
                    >
                        <option key={"default"} value="default" disabled>
                            ---Selecione CPF---
                        </option>
                        {props.allUsers.map(({ cpf }) => {
                            let userCpf = cpf.replaceAll(/\D/g, "");
                            if (
                                userCpf.includes(
                                    props.destinyToTransfer.replaceAll(
                                        /\D/g,
                                        ""
                                    )
                                )
                            ) {
                                return (
                                    <option key={userCpf} value={cpf}>
                                        {cpf}
                                    </option>
                                );
                            } else return null;
                        })}
                    </select>
                ) : null}
            </form>
            <button className="btn" onClick={props.function}>
                Transferir para este contato
            </button>
        </div>
    );
}
