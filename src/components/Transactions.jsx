import React from "react";
import TableHeader from "./Tables/Header";
import TableLine from "./Tables/Body";
import { formatDate, fillZero } from "../functions/format";

export default function Transactions(props) {
    return (
        <div className="transactions">
            <div className="content">
                <div className="close" onClick={props.closeTransactions}>
                    X
                </div>
                <table>
                    <TableHeader />
                    <tbody>
                        {props.transactions.map(
                            ({ _id, tipo, valor, data }) => {
                                let formatedDate = formatDate(data);
                                return (
                                    <TableLine
                                        key={_id}
                                        date={formatedDate}
                                        store={tipo}
                                        value={
                                            "R$ " + fillZero(valor.toFixed(2))
                                        }
                                    />
                                );
                            }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
