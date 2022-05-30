export function existEmail(value, dataBase) {
    return dataBase.find(({ email }) => email === value)?.email;
}

export function existCpf(value, dataBase) {
    return dataBase.find(({ cpf }) => cpf === value)?.cpf;
}

export function phoneNumber(value) {
    return value.length < 11;
}

export function cpf(value) {
    return value.length < 11;
}

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

export function email(value) {
    return !emailRegex.test(value);
}

export function name(value) {
    return value.length === 0;
}

export function birthDate(value) {
    return value.length === 0;
}
