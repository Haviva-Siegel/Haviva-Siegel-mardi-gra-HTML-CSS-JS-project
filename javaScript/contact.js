//============================================CONTACT============================================//
//==PUTTIN THE ELEMENTS FROM THE FORM IN VARIABLES SO WE CAN MANIPULATE THE PAGE==//
let form = document.querySelector('.form-container');
let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let email = document.querySelector('#email');
let subject = document.querySelector('#subject');
let contactBtn = document.querySelector('#contact-button');
let errorMsg = document.querySelectorAll('.error-message');
let thankYouMsg = document.querySelector('.full-form-msg');
//==AV EMAIL VALIDATION FUNCTIOM==//
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//==A FUNCTION FOR CHECKING VALIDATION OF NPUT VALUES==//
let validInput = function () {
    //FIRST NAME VALIDATION//
    if (fName.value === '') { 
        errorMsg[0].classList.remove("hidden"); //SHOWING THE ERROR MESSAGE
        fName.classList.add("invalid"); //CHANGING BORDER COLOR TO SHOW INVALID INPUT
    }
    else{
        fName.classList.remove("invalid"); //CHANGING BORDER COLOR TO VALID INPUT
        errorMsg[0].classList.add("hidden"); //HIDING THE ERROR MESSAGE
    }
     //LAST NAME VALIDATION//
    if (lName.value === '') {
        errorMsg[1].classList.remove("hidden"); //SHOWING THE ERROR MESSAGE
        lName.classList.add("invalid"); //CHANGING BORDER COLOR TO SHOW INVALID INPUT
    }
    else{
        lName.classList.remove("invalid");//CHANGING BORDER COLOR TO VALID INPUT
        errorMsg[1].classList.add("hidden"); //HIDING THE ERROR MESSAGE
    }
    //EMAIL VALIDATION//
    if (email.value === '' && !validateEmail(email)) { 
        errorMsg[2].classList.remove("hidden"); //SHOWING THE ERROR MESSAGE
        email.classList.add("invalid"); //CHANGING BORDER COLOR TO SHOW INVALID INPUT
    }
    else{
        email.classList.remove("invalid");//CHANGING BORDER COLOR TO VALID INPUT
        errorMsg[2].classList.add("hidden"); //HIDING THE ERROR MESSAGE
    }
    //SUBJECT VALIDATION//
    if (subject.value === '') { 
        errorMsg[3].classList.remove("hidden"); //SHOWING THE ERROR MESSAGE
        subject.classList.add("invalid"); //CHANGING BORDER COLOR TO SHOW INVALID INPUT
    }
    else{
        subject.classList.remove("invalid");//CHANGING BORDER COLOR TO VALID INPUT
        errorMsg[3].classList.add("hidden"); //HIDING THE ERROR MESSAGE
     }
     //IF ALL THE INPUTS ARE VALID//
    if ((fName.value !== '') && (lName.value !== '') && (email.value !== '' && !validateEmail(email)) && (subject.value !== '')) {
        form.remove(); //REMOOVING ALL THE FORM DATA
        thankYouMsg.classList.remove("hidden"); //SHOWING THE THANK YOU MESSAGE THAT SHOWS THE FORM WAS FILS CORECTLY
    }
};

//==CALLING THE VALIDATION FUNCTION==//
form.addEventListener('submit', function (e) {
    e.preventDefault(); //PREVENTING ANY DEFAULT EVENTS
    validInput() //THE VALIDATION FUNCTION
});