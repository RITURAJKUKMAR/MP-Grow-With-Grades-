let chatBox = document.getElementById("chat-box");
let input = document.getElementById("chat-bot-qus");

function ques() {
    let ans = document.createElement("p");
    let br = document.createElement("br");
    let question = document.getElementById("chat-bot-qus").value;
    if (question == 'Who r u?' || question == 'Who are you?' || question == 'who are you?' || question == 'who are you' || question == 'what is your name?' || question == 'What is your name?') {
        ans.innerText = ">>>  I am grades.";
    }
    else if (question == 'Hi' || question == 'hi' || question == 'Hello' || question == 'hello') {
        ans.innerText = ">>>  Hello user !! how can i help you?";
    }
    else if (question == "How are you?" || question == "how are you?" || question == "how r u?") {
        ans.innerText = ">>>  I am good bot. What about you?"
    }
    else if (question != "") {
        ans.innerText = ">>>  Sorry ! can't comprehend.";
    }
    chatBox.append(`${question}  <<<`);
    chatBox.appendChild(ans);
    chatBox.appendChild(br);
    input.value = "";
    chatBox.scrollBy(0, 1000);

    console.log(question);
    return false;
}