let quesData = [
    {
        questions: "In a rooted tree, what is the node called that has no parent?\n",
        options: ["Child Node",
            "Root Node",
            "Leaf Node",
            "Sibling Node",],
        currect: 1,
    },

    {
        questions: "What are the number of edges in this tree?\n",
        options: ["N/2",
            "N-1",
            "N",
            "2*N",],
        currect: 1,
    },

    {
        questions: "What is the maximum number of children a node can have in a general tree?\n",
        options: ["1",
            "2",
            "Unlimited",
            "4",],
        currect: 2,
    },

    {
        questions: "What is the degree of a node in a tree?\n",
        options: ["The number of edges in the tree",
            "The number of children the node has",
            "The depth of the node",
            "The height of the node"],
        currect: 1,
    },

    {
        questions: "Which data structure would you use if you cannot use recursion?\n",
        options: ["Stack",
            "Queue",
            "Linked List",
            "Not possible",],
        currect: 0,
    },

    {
        questions: "What are the maximum number of nodes that can be present at the Lth level(Binary tree).\n",
        options: ["2^(L-1)",
            "2^L",
            "(2^L)-1",
            "(2^L)+1",],
        currect: 1,
    },

    {
        questions: "What can be the maximum number of nodes at level 3 in a binary tree?\n",
        options: ["4",
            "8",
            "16",
            "32",],
        currect: 1,
    },

    {
        questions: "A binary tree is said to be complete if:\n",
        options: ["All nodes have the same depth",
            "Each node has at most one child",
            "Every level, except possibly the last, is completely filled,\n and all nodes are as left as possible",
            "All leaf nodes have the same value",],
        currect: 2,
    },

    {
        questions: "What is a full binary tree?\n",
        options: ["Each node has exactly two children.",
            "Every node has no or two children.",
            "Each node has exactly 1 child.",
            "All leaf nodes have the same value",],
        currect: 1,
    },

    {
        questions: "What is the Time Complexity of search operation in Binary tree?\n",
        options: ["1.",
            "log(N)",
            "N",
            "N^2",],
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
        <iframe src="showHardAns.html" >
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