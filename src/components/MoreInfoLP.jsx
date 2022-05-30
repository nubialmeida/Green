import React from "react";
import ASSETS from "./Assets";

import "../styles/more-infoLP.scss";

export default function MoreInfo(props) {
    return (
        <div className="more-info-container">
            <div className="more-info">
                <div className="close" onClick={props.setModal}>
                    X
                </div>
                <div className="more-info-title">
                    <img src={ASSETS.IMAGES.hexagon} alt="várias pessoas fazendo ação voluntário" />
                    <h1>Seja voluntário!</h1>
                </div>
                <p>
                    As empresas que praticam a sustentabilidade são cada vez mais reconhecidas,
                    recebem maior volume de recursos e mostram uma realidade óbvia: é possível - e
                    cada vez mais importante - aliar o desempenho econômico com ações que pensam nas
                    pessoas, no planeta, no nosso futuro.
                </p>
                <p>
                    Sabemos e acreditamos nesse caminho. E é por isso que o Banco Green tem o
                    objetivo de originar o equivalente a R$ 30 bilhões em recursos sustentáveis, que
                    serão negociados no mercado de capitais. Em outras palavras: mostrar aos nossos
                    clientes que investir em projetos sustentáveis é uma excelente opção para quem
                    deseja estimular um ambiente de negócios que considera resultados financeiros e
                    o impacto socioambiental positivo na sociedade e no meio ambiente.
                </p>
                <p>
                    <strong>A ação acontece da seguinte forma: </strong>
                    Duas vezes por semana, sempre aos <mark>sabádos e domingos</mark>, de{" "}
                    <mark> 8 às 17hrs,</mark> os grupos de voluntários se deslocam para um local que
                    sofre por falta de árvores devido às causas humanas ou naturais.
                </p>
                <p>
                    <strong>Os serviços são: </strong>
                    <ul>
                        <li>Poldar</li>
                        <li>Colocar adúbos</li>
                        <li>Distribuir mudas,</li>
                        <li>Mini-palestras</li>E oferecemos uma série de jogos para fechar o dia com
                        "chave de ouro"!!!
                    </ul>
                </p>
                <h4>Invista em quem cuida do planeta</h4>
                <mark>Voluntários Green:</mark> Nossos grupos Voluntários foram um dos vencedores do
                Prêmio Viva Voluntário, realizado pelo Governo Federal, em 2018, com apoio da
                Organização das Nações Unidas para o Desenvolvimento (PNUD).
                <button className="btn"> Clique aqui para ser um voluntário</button>
            </div>
        </div>
    );
}
