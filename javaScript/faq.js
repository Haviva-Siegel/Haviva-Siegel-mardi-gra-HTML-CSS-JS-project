//============================================CONTACT============================================//
//==GETTING THE QUESTION ELEMENT FROM THE DOCUMENT FOR MANIPULATION==//
let question = document.getElementsByClassName("question");
//==ITERATION TO GET EVERY QUESTION ELEMENT INDIVIDUALY==//
for (let i = 0; i < question.length; i++) {
    //==ADDING A CLICK EVENT TO THE QUESTION ELEMENT, SO EVERYTIME YOU CLICK THE QUESTION- THE ANSWER WILL APEAE==//
    question[i].addEventListener("click", function () {
        this.classList.toggle("active");
        //==GETTING THE QUESTION ELEMENT AS THE NEXT SIBLING ELEMENT OF THE QUESTION==//
        var answer = this.nextElementSibling;
        //==A CONDITION THAT IF THE QUESTION IS DISPLAY-BLOCK,
        // IT WILL CHANGE TO DISPLAY NONE'SO ON EVERY SECOND CLICK THE QUESTION WILL DISAPEAR AGAIN==//
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}