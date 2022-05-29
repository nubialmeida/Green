import Cookies from "js-cookie";

export function setCookie(cookie, value) {
    Cookies.remove(cookie);
    Cookies.set(cookie, value);
}

export function getCookie(cookie) {
    const sessionCookie = Cookies.get(cookie);
    return sessionCookie;
}

export function eraseCookies() {
    Cookies.remove("cpf");
    Cookies.remove("email");
}
