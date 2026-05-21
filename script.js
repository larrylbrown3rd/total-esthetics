const form = document.querySelector('.contact-form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const serviceInput = document.getElementById('service');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const serviceError = document.getElementById('service-error');
const messageError = document.getElementById('message-error');

const successMsg = document.getElementById('success-msg');


function showError(input, error) {
    input.classList.add('error-state');
    error.classList.add('visible');
}

function clearError(input, error) {
    input.classList.remove('error-state');
    error.classList.remove('visible');
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}


form.addEventListener('submit' , function(e) {

    e.preventDefault();

    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError);
        isValid = false;

    } else {
        clearError(nameInput, nameError);
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        showError(emailInput, emailError);
        isValid = false;
    }   else {
        clearError(emailInput, emailError);
    }

    if (serviceInput.value == '') {
        showError(serviceInput, serviceError);
        isValid = false;
    } else {
        clearError(serviceInput, serviceError);
    }

    if (messageInput.value.trim() === '') {
        showError(messageInput, messageError);
        isValid = false;
    } else {
      clearError(messageInput, messageError);
    }

    if (isValid) {
        successMsg.classList.add('visible');
        form.reset();
    }

});