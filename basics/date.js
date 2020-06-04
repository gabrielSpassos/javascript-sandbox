const brazilTimezone = 'America/Sao_Paulo';

const getCurrentDate = (timezone) => {
    return new Date().toLocaleString('pt-BR', {timeZone: timezone});
};

currentDate = getCurrentDate();
console.log('Data atual: ', currentDate);
