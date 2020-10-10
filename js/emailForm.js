const form = document.getElementById('formEmail')
const email = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    // get the values from input
    const emailValue = email.value.trim();

    if (emailValue === '') {
        //show error
        //add error class
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Please insert a valid email')
    }
    
}

function setErrorFor(input, message) {
    const small = form.querySelector('.error');

    //add error message inside small 
    small.innerText = message;

    //add error class
    form.classList.add('error');
}

function setSuccessFor(input) {
    const form = input.parentElement;
    form.className = 'formControl success';
}

function isEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email)
}
