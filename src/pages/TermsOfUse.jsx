import React from "react";
import { useNavigate } from "react-router-dom";
import ASSETS from "../components/Assets";
import "../styles/terms-of-use.scss";

export default function TermsOfUse() {
    const navigate = useNavigate();

    return (
        <div className="terms-container">
            <div className="terms-of-use">
                <img
                    src={ASSETS.IMAGES.back}
                    alt="imagem de voltar a página"
                    className="terms-btn"
                    onClick={() => navigate(-1)}
                />
                <h1 className="terms-title">Termos e Condições de Uso</h1>
                <h3 className="terms-subtitle">
                    Conheça os direitos e responsabilidades que regem o bom uso
                    deste portal.
                </h3>
                <p>
                    A aceitação da Política de Privacidade e dos termos de uso
                    pelos clientes e visitantes será automática no momento de
                    utilização deste portal.
                </p>
                <p>
                    {" "}
                    O Banco Green disponibiliza aos seus clientes e visitantes a
                    navegação e o acesso ao conteúdo deste portal, sujeitos às
                    seguintes condições de uso:
                </p>

                <ul>
                    <li>
                        <strong>Utilização de Conteúdo</strong>
                    </li>
                </ul>

                <p>
                    Todo o conteúdo, serviço ou tecnologia adotados neste portal
                    estão sujeitos a alterações sem necessidade de pedido de
                    autorização ou aviso prévios.
                </p>

                <p>
                    As informações públicas disponibilizadas possuem apenas
                    caráter informativo, não servindo de valores ou dados
                    definitivos em operações negociais.
                </p>

                <ul>
                    <li>
                        <strong>Responsabilidades</strong>
                    </li>
                </ul>

                <p>O Banco Green não se responsabiliza por:</p>

                <ol>
                    <li>
                        Informações que estejam incorretas, desatualizadas ou
                        incompletas neste portal
                    </li>
                    <li>
                        Operações realizadas com base nas informações
                        disponíveis neste portal, originadas por erros ou
                        omissões;
                    </li>
                    <li>
                        Uso indevido de todo o conteúdo disponível neste portal;
                    </li>
                    <li>
                        Danos, lesões ou problemas de tráfego na Internet, de
                        qualquer natureza, gerados quando houver conexão
                        estabelecida com este portal, ocasionados por defeito,
                        problemas de desempenho, erro, interrupção, atraso ou
                        falha de transmissão de dados ou de equipamentos;
                    </li>
                    <li>
                        Conteúdos ou quaisquer danos ocasionados por sites que
                        não pertençam ao Banco Green e que possuam links que
                        referenciem ou sejam referenciados por este portal.
                    </li>
                </ol>

                <p>
                    É de responsabilidade de clientes e visitantes deste portal:
                </p>

                <ol>
                    <li>
                        Possuir ou prover todos os equipamentos e recursos de
                        acesso à Internet necessários a utilização deste portal;
                    </li>
                    <li>
                        Utilizar as informações disponíveis neste portal de
                        forma lícita, ética e consciente, evitando lesões ou
                        danos de direito próprio ou de terceiros.
                    </li>
                </ol>

                <strong>Direitos e Propriedade Intelectual</strong>

                <p>
                    Todo o conteúdo deste portal - os elementos que o compõem
                    como publicações, documentos ou quaisquer outros materiais,
                    e a forma de organização e disposição de texto, desenhos,
                    figuras ou gráficos - é de propriedade do Banco Green ou
                    possui o direito de uso legalmente cedido à instituição.
                </p>

                <p>
                    É de conhecimento e concordância dos clientes e visitantes
                    que o material aqui disponível não pode ter o direito de
                    propriedade violado e deve ser utilizado somente para a
                    finalidade proposta neste portal.
                </p>
                <p>
                    Todo o conteúdo deste portal - os elementos que o compõem
                    como publicações, documentos ou quaisquer outros materiais,
                    e a forma de organização e disposição de texto, desenhos,
                    figuras ou gráficos - é de propriedade do Banco Green ou
                    possui o direito de uso legalmente cedido à instituição.
                </p>

                <h4 className="more-info">Mais Informações</h4>

                <p>
                    As informações que você fornece ao Banco Green são mantidas
                    estritamente confidenciais. O Banco Green garante que seus
                    dados não serão fornecidos a terceiros, exceto em casos
                    especiais como determinações judiciais para fornecimento dos
                    dados de um usuário em particular.
                </p>
                <p>
                    Para a proteção dos dados, o Banco Green possui políticas de
                    segurança e faz uso de tecnologias avançadas de
                    criptografia. Consulte mais informações na Política de
                    Privacidade do Banco Green.
                </p>
            </div>
        </div>
    );
}
