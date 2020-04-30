wordList = ['Hello', 'World', 'Gabriel', 'Passos']

const reduceElementsAndBreakLine = (list) => {
    let text = '';
    list.forEach(element => {
        text = text + element + '\n';
    });
    return text;
}

let text = reduceElementsAndBreakLine(wordList);

console.log(text);