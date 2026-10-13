const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
    question.addEventListener("click", event => {
        // To display the answer
        question.classList.toggle("show-answer");
        const viewState = question.querySelector(".view");

        // To change icon 
        if(question.classList.contains("show-answer")){
            viewState.style.backgroundColor = "#2f1533";
            viewState.style.fontSize = "1rem";
            viewState.textContent = "-";
        } else {
            viewState.style.backgroundColor = "#ac1bbf";
            viewState.textContent = "+";
        }
    });
});