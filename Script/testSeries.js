let quesData = [
    {
        questions: "What is the full form of HTML?\n",
        options: ["Hypertext Markup Language ",
            "Hypertext Markup",
            "Web developer language",
            "Client script language",],
        currect: 0,
    },

    {
        questions: "Which of the following is a bitwise opereator?\n",
        options: ["&&",
            "||",
            "^",
            "==",],
        currect: 2,
    },

    {
        questions: "What is the purpose of the pass statement in Python?\n",
        options: ["To exit from a loop prematurely",
            "To skip the current iteration of a loop",
            "To execute a block of code if a condition es false",
            "To do nothing and act as a placeholder",],
        currect: 3,
    },

    {
        questions: "What is the output of the following nested loop? \n\n for num in range(10,14):\n_ for i in range(2,num):\n__   if num%i==1: \n___ print(num,end=' ')\n___ break;\n",
        options: ["11 13",
            "10 12 14",
            "10 11 12 13",
            "Error"],
        currect: 2,
    },

    {
        questions: "What is the output of the following coee:\n\nfor a in (2,4): \n_ for b in (1, a):\n__ print(b,end=' ')\n",
        options: ["1 2 1 4",
            "1 2 1 3",
            "1 2 1 3 1 4",
            "1 1 2",],
        currect: 0,
    },
]

var score = 0;


const scoreboard = () => {
    let body = document.getElementsByTagName("body");
    body[0].innerHTML = ` <div class="result">
        <h1>Congratulation on completing the test! 🎉</h1>
        <br><br>
        <h2>🎖️Your Score: ${score}/${quesData.length}</h2>
        <br><br>
        <a href="Home.html"><button >Go to Home</button></a>
    </div>`
}



// let min = (quesData.length);
let min = 2;
let sec = 0;
let t = setInterval(() => {
    sec--;
    if (sec == -1) {
        if (min == 0 && sec == -1) {
            sec--;
            let sub = document.getElementById("sub");
            sub.click();
            alert("TIME OVER");
            clearTimeout(t);
            scoreboard();
            sec = 0;
            min = 0;
        }
        else {
            min--;
            sec = 59;
        }
    }
    document.getElementById('show-min').innerHTML = min;
    document.getElementById('show-colon').innerHTML = ":";
    document.getElementById('show-sec').innerHTML = sec;
}, 1000);






let question = document.querySelector(".question");
let answer = document.querySelectorAll(".answer");
let [option_1, option_2, option_3, option_4] = document.querySelectorAll("#option_1,#option_2,#option_3,#option_4",);
let submitBtn = document.getElementById("sub");
let preBtn = document.getElementById("prev");
let NextBtn = document.getElementById("next");
let precentage = document.getElementById("occurance");
let precentageDigit = document.getElementById("precentage-in-digit");


let currentQuiz = 0;
let occurance = 0;

const loadQuiz = () => {
    const { questions, options } = quesData[currentQuiz];
    question.innerText = 1 + currentQuiz + ". " + questions;
    options.forEach((currectOptions, index) => {
        (window[`option_${index + 1}`].innerText = currectOptions);

    });
};
loadQuiz();

const getSelectedOption = () => {
    let ans_index;
    answer.forEach((current_option, index) => {
        if (current_option.checked)
            ans_index = index;
    });
    return ans_index;
}

const deSelected = () => {
    answer.forEach((current_option) => {
        current_option.checked = false;
    })
};

submitBtn.addEventListener('click', () => {
    let x;
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
    if (selectedOptionIndex === quesData[currentQuiz].currect) {
        score++;
        console.log(score);
    }

    if (selectedOptionIndex != null) {
        occurance++;
        precentage.style.width = `${(occurance / (quesData.length)) * 100}%`;
        precentageDigit.innerText = `${(occurance / (quesData.length)) * 100}%`;
    }

    if (currentQuiz < (quesData.length - 1))
        currentQuiz++;
    else    if (currentQuiz == (quesData.length - 1))
        x = confirm("Do you want to final submit");
    if (x == true) {
        clearTimeout(t);
        scoreboard();
    }
    deSelected();
    loadQuiz();
});


preBtn.addEventListener('click', () => {
    if (currentQuiz > 0) {
        currentQuiz--;
        deSelected();
        loadQuiz();
    }
});

NextBtn.addEventListener('click', () => {
    if (currentQuiz < (quesData.length - 1)) {
        currentQuiz++;
        deSelected();
        loadQuiz();
    }
});

