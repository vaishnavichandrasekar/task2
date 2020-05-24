var score = 0;

var cardQuestion = document.querySelector(".card-title");
var answerCheck = document.querySelector(".card-footer");
var card = document.querySelector(".testCard");

var buttonOne = document.getElementById("button-index-0");
var buttonTwo = document.getElementById("button-index-1");
var buttonThree = document.getElementById("button-index-2");
var buttonFour = document.getElementById("button-index-3");
var buttonSubmit = document.getElementById("btnSubmit");
var buttonClearHighscore = document.getElementById("buttonClear");
var buttonHighscore = document.getElementById("highscoreBtn");
var timerElement = document.getElementById("timerText");
var resultText = document.getElementById("cardResult");
var resultForm = document.getElementById("form");
var navBar = document.getElementById("navBar");

var highscoreInitials = document.getElementById("inputInitials");
var highscoreList = document.querySelector(".list");
var highscoreBtn = document.getElementById("highscoreButtons");
var highscoreHeader = document.getElementById("highscoreListHeader");

highscoreHeader.style.display = "none";
highscoreBtn.style.display = "none";
highscoreList.style.display = "none";
buttonSubmit.style.display = "none";
answerCheck.style.display = "none";
resultForm.style.display = "none";

var initialArray = [];
var li;

var questions = [
    { q: "India is a federal union comprising twenty-nine states and how many union territories?", a: "Seven" },
    { q: "Which of the following is the capital of Arunachal Pradesh?", a: "Itanagar" },
    { q: "What are the major languages spoken in Andhra Pradesh?", a: "Telugu and Urdu" },
    { q: "What is the state flower of Haryana?", a: "Lotus" },
	{ q: "Which of the following states is not located in the North?", a: "Jharkhand" },
	
];

if (cardQuestion.textContent = JSON.stringify(questions[0].q)) {
    buttonOne.textContent = "Six";
    buttonTwo.textContent = "Seven";
    buttonThree.textContent = "Eight";
    buttonFour.textContent = "Nine";
};

buttonOne.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonOne.textContent === "Six") {
        score -= 5;
        answerCheck.style.display = "contents";
        secondCard();
    } else if (buttonOne.textContent === "Itanagar") {
        score +=20;
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonOne.textContent === "English and Telugu") {
        score -= 5;
        answerCheck.style.display = "contents";
        fourthCard();
    } else if (buttonOne.textContent === "Lotus") {
        score +=20;
        answerCheck.style.display = "contents";
        fifthCard();
	} 
	
	else {
        score +=20;
        answerCheck.style.display = "contents";
        sixthCard();
    }
});

buttonTwo.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonTwo.textContent === "Seven") {
        score += 20;
        answerCheck.style.display = "contents";
        secondCard();
    } else if (buttonTwo.textContent === "Disapur") {
        score -= 5;
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonTwo.textContent === "Telugu and Urdu") {
        score +=20;
        answerCheck.style.display = "contents";
        fourthCard();
    } else if (buttonTwo.textContent === "Rhododendron") {
        score -= 5;
        answerCheck.style.display = "contents";
        fifthCard();
    } else {
        score -= 5;
        answerCheck.style.display = "contents";
        sixthCard();
    }
});

buttonThree.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonThree.textContent === "Eight") {
        score -=5;
        answerCheck.style.display = "contents";
        secondCard();
    } else if (buttonThree.textContent === "Imphal") {
        score -= 5;
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonThree.textContent === "Telugu and Kannada") {
        score -= 5;
        answerCheck.style.visibility = "visible";
        fourthCard();
    } else if (buttonThree.textContent === "Golden Shower") {
        score -= 5;
        answerCheck.style.display = "contents";
        fifthCard();
    } else if (buttonThree.textContent === "Himachal Pradesh") {
        score -= 5;
        answerCheck.style.display = "contents";
        sixthCard();
    }
});

buttonFour.addEventListener("click", function (e) {
    e.preventDefault();
    if (buttonFour.textContent === "Nine") {
        score -= 5;
        answerCheck.style.display = "contents";
        secondCard();
    } else if (buttonFour.textContent === "Panaji") {
        score -= 5;
        answerCheck.style.display = "contents";
        thirdCard();
    } else if (buttonFour.textContent === "All of the above Languages") {
        score -=5;
        answerCheck.style.display = "contents";
        fourthCard();
    } else if (buttonFour.textContent === "Not declared") {
        score -= 5;
        
        answerCheck.style.display = "contents";
        fifthCard();
    } else if (buttonFour.textContent === "Haryana") {
        score -=5;
        answerCheck.style.display = "contents";
        sixthCard();
    }
});



buttonSubmit.addEventListener("click", function (e) {
    e.preventDefault();

    var initialsText = highscoreInitials.value.trim();
    // localStorage.setItem("highscoreInitials".JSON.stringify(highscoreInitials.value));
    // e.stopImmediatePropagation();
    localStorage.setItem("initialsText", JSON.stringify(initialsText));
    var test = JSON.parse(localStorage.getItem("initialsText"));

    var totalScore = JSON.parse(localStorage.getItem("score"));

    initialArray.push(test + ": " + totalScore + " points");
    console.log(initialArray);

   
    

});

buttonClearHighscore.addEventListener("click", function (e) {
    e.preventDefault
    localStorage.clear();

    var element = event.target;
    if (element.matches("button") === true) {

        var list = document.getElementById("myList");
        while (list.hasChildNodes()) {
            list.removeChild(list.firstChild);
        }

    }

});

function init() {
    var storeHighscore = JSON.parse(localStorage.getItem("initialArray"));

    if (storeHighscore !== null) {
        initialArray = storeHighscore;
    }
}

init();

function storeHighscore() {
    localStorage.setItem("initialArray", JSON.stringify(initialArray));
}

function highscoreCard() {
    card.style.display = "none"
    highscoreHeader.style.display = "contents";
    highscoreList.style.display = "contents";
    highscoreBtn.style.display = "contents";

    for (var i = 0; i < initialArray.length; i++) {
        var listItem = initialArray[i];

        li = document.createElement("li");
        li.textContent = listItem;
        highscoreList.appendChild(li);
    }
}

function secondCard() {
    cardQuestion.textContent = JSON.stringify(questions[1].q);
    if (cardQuestion.textContent = JSON.stringify(questions[1].q)) {
        buttonOne.textContent = "Itanagar";
        buttonTwo.textContent = "Disapur";
        buttonThree.textContent = "Imphal";
        buttonFour.textContent = "Panaji";
    }
};

function thirdCard() {
    cardQuestion.textContent = JSON.stringify(questions[2].q);
    if (cardQuestion.textContent = JSON.stringify(questions[2].q)) {
        buttonOne.textContent = "English and Telugu";
        buttonTwo.textContent = "Telugu and Urdu";
        buttonThree.textContent = "Telugu and Kannada";
        buttonFour.textContent = "All of the above Languages";
    }
};

function fourthCard() {
    cardQuestion.textContent = JSON.stringify(questions[3].q);
    if (cardQuestion.textContent = JSON.stringify(questions[3].q)) {
        buttonOne.textContent = "Lotus";
        buttonTwo.textContent = "Rhododendron";
        buttonThree.textContent = "Golden Shower";
        buttonFour.textContent = "Not declared";
    }
};

function fifthCard() {
    cardQuestion.textContent = JSON.stringify(questions[4].q);
    if (cardQuestion.textContent = JSON.stringify(questions[4].q)) {
        buttonOne.textContent = "Jharkhand";
        buttonTwo.textContent = "Jammu and Kashmir";
        buttonThree.textContent = "Himachal Pradesh";
        buttonFour.textContent = "Haryana";
    }
};

function sixthCard() {
    cardQuestion.textContent = "All done!";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "none";
    buttonThree.style.display = "none";
    buttonFour.style.display = "none";
    answerCheck.style.display = "none";
    resultText.innerHTML =  "Final Score:  "  + score ;
    resultForm.style.display = "contents"
    timerElement.innerHTML = "Time: 0";
    buttonSubmit.style.display = "contents"
    navBar.style.visibility = "hidden";

    localStorage.setItem("score", JSON.stringify(score));
};

(function () {
    var timeLeft = 75;
    function startTimer() {

        var timer = setInterval(function () {
            timeLeft--;
            timerElement.innerHTML = "Time: " + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                timerElement.innerHTML = "Time: ";
                sixthCard();
            }
        }, 1000);
    }
    
    startTimer();
})();