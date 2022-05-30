import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Value from "../components/Transfer/Value";
import Destiny from "../components/Transfer/Destiny";
import Finish from "../components/Transfer/Finish";
import Comprovant from "../components/Transfer/Comprovant";
import "../styles/transfer.scss";
import * as API from "../api";
import * as Cookie from "../api/cookie";
import Loading from "../components/Loading";

export default function Transfer() {
    const [stage, setStage] = useState(1); // Estado que muda o elemento que aparece na tela

    const [loading, setLoading] = useState(true);
    const [userBalance, setUserBalance] = useState({});
    const [allUsers, setAllUsers] = useState([]);
    const [valueToTransfer, setValueToTransfer] = useState("");
    const [destinyToTransfer, setDestinyToTransfer] = useState("");
    const [lastTransaction, setLastTransaction] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function apiRequest() {
            let cpf = Cookie.getCookie("cpf"); // Se não possuir sessão volta para checkout
            if (cpf === undefined) {
                navigate("/checkout");
            } else {
                setAllUsers(await API.getAllAccounts());
                setUserBalance(await API.getBalance(cpf));
            }
            setLoading(false);
        }
        apiRequest();
    }, [navigate]);

    function showDestiny() {
        const user = allUsers.find(
            ({ cpf }) => cpf.replaceAll(/\D/g, "") === destinyToTransfer.replaceAll(/\D/g, "")
        );
        return (
            <div>
                <span>
                    <b>Para</b>
                    {" " + user?.nome}
                </span>
            </div>
        );
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className="transfer">
                    <Value // valor de transferencia
                        className={stage === 1 ? "" : "hidden"}
                        function={() => {
                            if (!valueToTransfer)
                                alert("É preciso um valor mínimo para fazer a transferencia");
                            else if (valueToTransfer < 0)
                                alert("É preciso transferir um valor positivo");
                            else {
                                setValueToTransfer(Number(valueToTransfer));
                                setStage(2);
                            }
                        }}
                        balance={userBalance}
                        valueToTransfer={valueToTransfer}
                        setValueToTransfer={(e) => setValueToTransfer(e.target.value)}
                    />
                    <Destiny // destino de transferencia
                        className={stage === 2 ? "" : "hidden"}
                        function={() => {
                            // Se nenhum CPF for encontrado na API, a transferência não será permitida
                            if (
                                !allUsers
                                    .map(
                                        ({ cpf }) =>
                                            cpf.replaceAll(/\D/g, "") ===
                                            destinyToTransfer.replaceAll(/\D/g, "")
                                    )
                                    .some((el) => el)
                            )
                                alert("Nenhum usuário válido encontrado");
                            else setStage(3);
                        }}
                        backStage={() => setStage(1)}
                        allUsers={allUsers}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                        setDestinyToTransfer={(e) => {
                            setDestinyToTransfer(e.target.value);
                        }}
                    />
                    <Finish // confirmação
                        className={stage === 3 ? "" : "hidden"}
                        function={async () => {
                            setStage(4);
                            await API.createTransaction(
                                Cookie.getCookie("cpf"),
                                destinyToTransfer,
                                Number(valueToTransfer)
                            );
                            setLastTransaction(
                                await API.getLastTransactions(Cookie.getCookie("cpf"))
                            );
                        }}
                        backStage={() => setStage(2)}
                        allUsers={allUsers}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                        showDestiny={showDestiny()}
                    />
                    <Comprovant // mostra do resultado da transferencia
                        className={stage === 4 ? "" : "hidden"}
                        lastTransaction={lastTransaction}
                        valueToTransfer={valueToTransfer}
                        destinyToTransfer={destinyToTransfer}
                        showDestiny={showDestiny()}
                        setDefault={() => {
                            // zera os dados da transferencia após concluir
                            setDestinyToTransfer("");
                            setValueToTransfer();
                            navigate("/onboard");
                        }}
                    />
                </div>
            )}
        </>
    );
}
