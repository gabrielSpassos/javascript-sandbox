const converteLinhaDigitavelEmCodigoDeBarras = (linhaDigitavel) => {
    return linhaDigitavel.replace(/^(\d{4})(\d{5})\d{1}(\d{10})\d{1}(\d{10})\d{1}(\d{15})$/, '$1$5$2$3$4');
};

let linhaDigitavel = '34191090083676847830131131230000988050000019932';
let codigoBarras = converteLinhaDigitavelEmCodigoDeBarras(linhaDigitavel);

console.log(codigoBarras);