import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponents/Input";
import ButtonComponent from "../InputComponents/Button";
import ASSETS from "../Assets";

export default function RegisterComponents(props) {
    return (
        <form className="register-form">
            <div className="logo">
                <img src={ASSETS.IMAGES.leaf} alt="green-logo" />
                <h3>Green</h3>
            </div>

            <div className="heading">
                <h2>Cadastre-se</h2>
                <h6>
                    Já é cliente?
                    <div className="calltoaction" onClick={props.changeScreen}>
                        Entrar
                    </div>
                </h6>
            </div>
            <div className="info-form">
                <InputComponent
                    type="text"
                    description="Nome"
                    value={props.user.name}
                    onChange={props.setUserName}
                />
                <InputComponent
                    type="text"
                    description="Email"
                    value={props.user.email}
                    onChange={props.setUserEmail}
                />
                <InputComponent
                    mask="(99) 99999-9999"
                    type="text"
                    description="Telefone"
                    value={props.user.phone}
                    onChange={props.setUserPhone}
                />
                <InputComponent
                    type="date"
                    description="Data de Nascimento"
                    value={props.user.date}
                    onChange={props.setUserDate}
                />
                <InputComponent
                    type="text"
                    mask="999.999.999-99"
                    description="CPF"
                    value={props.user.cpf}
                    onChange={props.setUserCpf}
                />
                <InputComponent
                    type="password"
                    description="Senha"
                    value={props.user.password}
                    onChange={props.setUserPassword}
                />
                {props.loading ? (
                    <div className="btn">
                        <img src={ASSETS.GIFS.loading} alt="loading" />
                    </div>
                ) : (
                    <ButtonComponent
                        id="register-btn"
                        type="button"
                        value="Cadastrar"
                        onClick={props.createAccount}
                    />
                )}
                <p className="text">
                    Eu concordo com os
                    <Link to="/terms-of-use"> Termos de Uso</Link>
                </p>
            </div>
        </form>
    );
}
