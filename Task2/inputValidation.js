function validateLettersInput(event) {
    let input = event.target.value;
    input = filterInput(input);

    let uniqueInput = [...new Set(input)].join('');
    event.target.value = uniqueInput;
}

function validateWordsInput(event){
    input = event.target.value;
    input = filterInput(input);
    event.target.value = input;
}

function filterInput(input){
    let result = '';
    let regex = /^[а-яё]+$/;
    for (let i = 0; i < input.length; i++){
        if (regex.test(input[i]))
            result += input[i];
    }
    return result;
}
