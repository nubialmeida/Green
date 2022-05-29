import axios from "axios";

const apiUrl = "https://api-contas-trade4devs.herokuapp.com";
const PATHS = {
    GET: {
        ALL_ACCOUNTS: "/conta",
        BALANCE: "/conta/saldo/",
        TRANSACTIONS: "/conta/extrato/",
    },
    CREATE: {
        ACCOUNT: "/conta",
        TRANSACTION: "/conta/operacao",
    },
    LOGIN: "/login",
};

export async function getAllAccounts() {
    const resp = await axios.get(apiUrl + PATHS.GET.ALL_ACCOUNTS);
    return resp.data;
}

export async function getBalance(CPF) {
    const resp = await axios.get(apiUrl + PATHS.GET.BALANCE + CPF);
    return resp.data.saldo;
}

export async function getTransactions(CPF) {
    const resp = await axios.get(apiUrl + PATHS.GET.TRANSACTIONS + CPF);
    return resp.data.operacoes;
}

export async function getLastTransactions(CPF) {
    const resp = await axios.get(apiUrl + PATHS.GET.TRANSACTIONS + CPF);

    return resp.data.operacoes[resp.data.operacoes.length - 1].data;
}

export async function loginAccount(email, password) {
    const obj = {
        email,
        senha: password,
    };

    const resp = await axios.post(apiUrl + PATHS.LOGIN, obj);
    return resp;
}

export async function createAccount(name, email, password, phone, date, CPF) {
    const obj = {
        nome: name,
        email: email,
        senha: password,
        telefone: phone,
        dataNascimento: date,
        cpf: CPF,
    };
    const resp = await axios.post(apiUrl + PATHS.CREATE.ACCOUNT, obj);
    return resp;
}

export async function createTransaction(origin, destiny, value) {
    const obj = {
        remetente: origin,
        destinatario: destiny,
        valor: value,
    };
    const resp = await axios.post(apiUrl + PATHS.CREATE.TRANSACTION, obj);
    return resp;
}
