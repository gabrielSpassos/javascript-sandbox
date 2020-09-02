const brazilTimezone = 'America/Sao_Paulo';

const getCurrentDateTime = (timezone) => {
    return new Date().toLocaleString('pt-BR', {timeZone: timezone});
};

const getCurrentDate = () => {
    const dateTimeFormatter = new Intl.DateTimeFormat('en', {year: 'numeric', month: '2-digit', day: '2-digit'});
    let currentDate = new Date();
    let [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormatter.formatToParts(currentDate);
    return year + '-' + month + '-' + day;
} 

currentDateTime = getCurrentDateTime(brazilTimezone);
currentDate = getCurrentDate();

console.log('Data atual: ', currentDateTime);
console.log('Data atual com formatador: ', currentDate);
