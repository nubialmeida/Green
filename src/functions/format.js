export function fillZero(data) {
    return data < 10 ? "0" + data : data;
}

const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

export function formatDate(value) {
    const myDate = new Date(value);
    const d = {
        hours: fillZero(myDate.getHours()),
        minutes: fillZero(myDate.getMinutes()),
        seconds: fillZero(myDate.getSeconds()),
        day: fillZero(myDate.getDate()),
        month: months[myDate.getMonth()],
        year: myDate.getFullYear(),
    };

    const resp = `${d.hours}:${d.minutes}:${d.seconds}  |  ${d.day} de ${d.month} de ${d.year}`;

    return resp;
}
