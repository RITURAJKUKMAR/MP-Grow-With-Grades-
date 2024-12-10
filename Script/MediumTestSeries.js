let quesData = [
    {
        questions: "How do we denote the worst case time complexity of an algorithm?\n",
        options: ["Big Theta Notation ",
            "Big O notation",
            "Big Omega Notation",
            "All of these",],
        currect: 1,
    },

    {
        questions: "a = 4\nprint(a)\n What will be the time complexity of the given algorithm?\n",
        options: ["2 * O(1)",
            "O(N)",
            "O(1)",
            "All of these",],
        currect: 2,
    },

    {
        questions: "for i = 0 to N\nprint(i)\nprint(i * 2)\nWhat will be the final time complexity of the given algorithm?\n",
        options: ["N * 2 * O(1)",
            "O(1)",
            "O(N)",
            "All of these",],
        currect: 2,
    },

    {
        questions: "for i = 0 to N\nprint(i)\nfor j = 0 to N\nprint(j)\nWhat will be the final time complexity of the given algorithm? \n",
        options: ["O(1)",
            "O(N) + O(N)",
            "2 * O(N)",
            "O(N)"],
        currect: 3,
    },

    {
        questions: "Select one of the following(Insert at end).\n",
        options: ["Maintaining more pointers help in general\n complexity improvements.",
            "Maintaining the tail pointer helps because we\n don't have to traverse the complete list every time.",
            "All of these",
            "Nono of these",],
        currect: 1,
    },

    {
        questions: "Find the Next greater element for the following array : [4,5,3,2,1]\n",
        options: ["[5,5,-1,-1,-1]",
            "[5,-1,-1,-1,-1]",
            "[5,4,3,2,-1]",
            "[-1,-1,-1,-1,-1]",],
        currect: 1,
    },

    {
        questions: "Given the array [4,3,2,1], what will be the array after 2 complete\n iterations of the internal for loop in the Bubble Sort algorithm?\n",
        options: ["[3,2,1,4]",
            "[2,1,3,4]",
            "[1,2,3,4]",
            "[3,4,1,2]",],
        currect: 1,
    },

    {
        questions: "What will be the positions of the elements in the array [3, 4, 1, 5, 6] after the first\niteration of the outer loop in the Selection Sort algorithm?\n",
        options: ["[3, 4, 1, 5, 6]",
            "[4, 1, 5, 6, 3] ",
            "[1, 3, 4, 5, 6]",
            "[1, 4, 3, 5, 6]",],
        currect: 3,
    },

    {
        questions: "What will be the positions of the elements in the array [8,3,1,7,5,4,2] after the\nthird iteration of the outer loop in the Insertion Sort algorithm?\n",
        options: ["[1,3,8,7,5,4,2]",
            "[1,2,3,4,5,7,8] ",
            "[1,3,7,8,2,5,4]",
            "[1,3,7,8,5,4,2]",],
        currect: 3,
    },

    {
        questions: "What is the time complexity of merging two arrays with lengths n and m?\n",
        options: ["O(m * n)",
            "O(m) ",
            "O(m + n)",
            "O(n)",],
        currect: 2,
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
        <iframe src="showMediumAns.html" >
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
