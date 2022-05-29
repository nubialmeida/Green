import Cookies from "js-cookie";

//cria cookie ou reseta
export function setCookie(cookie, value) {
    Cookies.remove(cookie);
    Cookies.set(cookie, value);
}

//pega o valor do cookie
export function getCookie(cookie) {
    const sessionCookie = Cookies.get(cookie);
    return sessionCookie;
}

//remove todos os cookies usados
export function eraseCookies() {
    Cookies.remove("cpf");
    Cookies.remove("email");
}
