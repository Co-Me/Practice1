let wordsSet = new Set();
function checkWord(){

    if (wordsInput.value.length === 0)
        return;
    let allIn = true;

    for (let i = 0; i < lettersInput.value.length; i++){
        let letterIn = false;

        for (let j = 0; j < wordsInput.value.length; j++)
            if (lettersInput.value[i] === wordsInput.value[j])
                letterIn = true;
        if (letterIn === false)
            allIn = false;
    }

    if (allIn === true && !wordsSet.has(wordsInput.value))
        writeResult(wordsInput.value);
    wordsSet.add(wordsInput.value);
}

function writeResult(result){
    guessedWords.innerHTML += "<li>" + result + "</li>";
}
