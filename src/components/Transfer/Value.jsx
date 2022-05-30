import React from "react";
import ASSETS from "../Assets";
import { useNavigate } from "react-router-dom";

export default function Value(props) {
    const navigate = useNavigate();

    // Verificação de saldo, menor que zero impede qualquer transferencia
    return (
        <div className={`value ${props.className ?? ""}`}>
            {props.balance.toFixed(2) < 0 ? (
                <div className="cant-transfer">
                    <div>VOCÊ ESTÁ COM O SALDO NEGATIVO</div>
                    <button className="btn w-100" onClick={() => navigate("/onboard")}>
                        Voltar
                    </button>
                </div>
            ) : (
                <>
                    <h3>Qual é o valor da transferência?</h3>
                    <div className="close" onClick={() => navigate("/onboard")}>
                        X
                    </div>
                    <span>
                        Saldo disponível em conta <b>R$ {props.balance.toFixed(2)}</b>
                    </span>
                    <form className="d-flex flex-row align-items-center">
                        <div className="fs-3">R$</div>
                        <input
                            type="number"
                            value={props.valueToTransfer}
                            onChange={props.setValueToTransfer}
                        />
                    </form>
                    <img
                        src={ASSETS.IMAGES.next}
                        alt="botão de avançar"
                        className="next btn"
                        onClick={props.function}
                    />
                </>
            )}
        </div>
    );
}
