function startGame() {
    menuPage.style.display = "none";
    gamePage.style.display = "block";

    if (lettersInput.value.length > 0){
        lettersList.innerHTML += lettersInput.value[0];
        for (let i = 1; i < lettersInput.value.length; i++)
        lettersList.innerHTML += ", " + lettersInput.value[i];
    }
}

function returnToMenu() {
    gamePage.style.display = "none";
    menuPage.style.display = "block";

    lettersList.innerHTML = "Список букв: ";
    guessedWords.innerHTML = "";
    wordsSet.clear();
}
