import React from "react";
import { Link } from "react-router-dom";
import InputComponent from "../InputComponents/Input";
import ButtonComponent from "../InputComponents/Button";
import ASSETS from "../Assets";

export default function LoginComponents(props) {
    return (
        <form className="login-form">
            <div className="logo">
                <img src={ASSETS.IMAGES.leaf} alt="green-logo" />
                <h4>Green</h4>
            </div>

            <div className="heading">
                <h2>Bem-vindo!</h2>
                <h6>
                    Não tem uma conta ainda?
                    <div className="calltoaction" onClick={props.changeScreen}>
                        Cadastrar
                    </div>
                </h6>
            </div>
            <div className="info-form">
                <InputComponent
                    type="text"
                    description="Email"
                    value={props.user.email}
                    onChange={props.setUserEmail}
                />
                <InputComponent
                    type="password"
                    description="Senha"
                    value={props.user.password}
                    onChange={props.setUserPassword}
                />

                <ButtonComponent
                    id="login-btn"
                    type="button"
                    value="Login"
                    onClick={props.loginAccount}
                />
                <p className="text">
                    Esqueceu sua senha? Obtenha
                    <Link to="/help"> ajuda</Link> para entrar.
                </p>
            </div>
        </form>
    );
}
