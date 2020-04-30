//= validation.js

function initForm() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input');
    const button = form.querySelector('button[type="submit"]');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        })
    });

    form.onsubmit = e => {
        e.preventDefault();

        let isFormValid = true;
        inputs.forEach(input => {
            const isInputValid = validateInput(input);
            if (!isInputValid) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            const formData = getFormData();

            // for future
            console.log('\n\n', formData, '\n\n');

            const rootElement = document.querySelector('.contact-us');
            rootElement.classList.add('fetching');
            button.disabled = true;
            button.classList.add('loading');

            setTimeout(() => {
                rootElement.classList.remove('fetching');
                button.disabled = false;
                button.classList.remove('loading');

                showSuccess();
            }, 3000)
        }
    };
}

function validateInput(input) {
    const { value, type } = input;
    let isValid = true;

    switch (type) {
        case 'text':
            isValid = validateTextString(value);
            break;
        case 'tel':
            isValid = validateTel(value);
            break;
        case 'email':
            isValid = validateEmail(value);
            break;
        default:
            break;
    }

    if (!isValid) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }

    return isValid;
}

function showSuccess() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');

    inputs.forEach(input => input.value = '');                 
    textarea.value = '';

    const successMessage = document.querySelector('.success-message');
    successMessage.classList.add('show');

    const succesMessageClose = successMessage.querySelector('.success-message__btn');
    succesMessageClose.addEventListener('click', () => {
        successMessage.classList.remove('show');
    })
}

function getFormData() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    const selectValue = document.querySelector('.select__value').innerText;

    const formData = {};

    inputs.forEach(input => {
        formData[input.name] = input.value;
    });
    formData[textarea.name] = textarea.value;
    formData['subject'] = selectValue;

    return formData;
}