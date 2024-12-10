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
        questions: "Which of the following is the correct syntax to declare a variable in C?\n",
        options: ["int variable;",
            "declare int variable;",
            "var int variable;",
            "integer variable;"],
        currect: 0,
    },

    {
        questions: "Which of the following is not a valid data type in C?\n",
        options: ["float",
            "string",
            "int",
            "char",],
        currect: 1,
    },

    {
        questions: "Who is the inventor of HTML?\n",
        options: ["Hakon Wium Lie",
            "Brenden Eich",
            "Sir Timothy John Berners -Lee",
            "Guido Van Rossum",],
        currect: 2,
    },

    {
        questions: "What does the sizeof operator return?\n",
        options: ["The size of the variable's name",
            "The size of the variable's value",
            "The size of the variable in bytes",
            "The size of the variable in bits",],
        currect: 2,
    },

    {
        questions: " Which header file is required to use the malloc() \nfunction in C?\n",
        options: ["stdlib.h",
            "stdio.h",
            "string.h",
            "math.h",],
        currect: 0,
    },

    {
        questions: "What is the purpose of the return 0; statement in the main() function?\n",
        options: ["It terminates the program and signals an error.",
            " It terminates the program and signals successful execution.",
            "It initializes the program.",
            " It has no specific purpose.",],
        currect: 1,
    },

    {
        questions: "What is the correct way to declare a pointer in C?\n",
        options: ["int *ptr;",
            "int ptr;",
            "pointer int ptr;",
            "int ptr*;",],
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
    <iframe src="showEasyAns.html" >
    </div>`
}

let min = (((quesData.length) * 10) / 60).toFixed(0);
let sec = 0;
let st = 0;
let t = setInterval(() => {
    sec--;
    if (st == 0) {
        alert("Start Test");
        st = 1;
    }
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

let arr = Array();
let k = 0;

function shuffle() {
    let f = 0;
    for (let i = 0; i < quesData.length;) {
        f = 0;
        let num = (Math.floor(Math.random() * 100) % quesData.length);
        for (let j = 0; j < i; j++) {
            if (arr[j] == num) {
                f = 1;
                break;
            }
        }
        if (f != 1) {
            arr[i] = num;
            i++;
        }
    }
}
shuffle();

let question = document.querySelector(".question");
let attempted_que = document.querySelector(".attempted-que");
let answer = document.querySelectorAll(".answer");
let [option_1, option_2, option_3, option_4] = document.querySelectorAll("#option_1,#option_2,#option_3,#option_4",);
let submitBtn = document.getElementById("sub");
let preBtn = document.getElementById("prev");
let NextBtn = document.getElementById("next");
let precentage = document.getElementById("occurance");
let precentageDigit = document.getElementById("precentage-in-digit");

let occurance = 0;

const loadQuiz = () => {
    attempted_que.innerText = `${k + 1}/${(quesData.length)}`;
    const { questions, options } = quesData[arr[k]];
    question.innerText = 1 + k + ". " + questions;
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
    if (selectedOptionIndex === quesData[arr[k]].currect) {
        score++;

    }

    if (selectedOptionIndex != null) {
        occurance++;
        precentage.style.width = `${((occurance / (quesData.length)) * 100).toFixed(0)}%`;
        precentageDigit.innerText = `${((occurance / (quesData.length)) * 100).toFixed(0)}%`;
        attempted_que.innerText = `${k}/ ${(quesData.length)}`;
    }

    if (k < (quesData.length - 1))
        k++;
    else if (k == (quesData.length - 1))
        x = confirm("Do you want to final submit");
    if (x == true) {
        clearTimeout(t);
        scoreboard();
    }
    deSelected();
    loadQuiz();
});


preBtn.addEventListener('click', () => {
    if (k > 0) {
        k--;
        deSelected();
        loadQuiz();
    }
});

NextBtn.addEventListener('click', () => {
    if (k < (quesData.length - 1)) {
        k++;
        deSelected();
        loadQuiz();
    }
});
