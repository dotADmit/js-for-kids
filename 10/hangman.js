var pickWord = function () {
    // Возвращает случайно выбранное слово
    var words = ["program", "monkey", "pancake", "orange"];
    return words[Math.floor(Math.random() * words.length)];
};
var setupAnswerArray = function (word) {
    // Возвращает итоговый массив для заданного слова word
    var array = [];
    for (let i = 0; i < word.length; i++) {
        array.push('_');
    }
    return array;
};
var showPlayerProgress = function (answerArray) {
    // С помощью alert отображает текущее состояние игры
    alert(answerArray.join(" "));
};
var getGuess = function () {
    // Запрашивает ответ игрока с помощью prompt
    return prompt("Your letter, please");
};
var updateGameState = function (guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    for (let i = 0; i < word.length; i++) {
        if (word[i] === guess) {
            answerArray[i] = guess;
        }
    }
};
var showAnswerAndCongratulatePlayer = function (answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    // и поздравляет его с победой
    alert(answerArray.join("*"));
};


var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    var guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(guess, word,
            answerArray);
        remainingLetters--;
    }
}
showAnswerAndCongratulatePlayer(answerArray);

