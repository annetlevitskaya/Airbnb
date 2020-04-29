function nameValidation(value) {
    const regExp = /^[a-zA-Zа-яА-Я\s]*$/;
    return regExp.test(value);
}

function emailValidation(value) {
    const regExp = /^.+@.+\..+$/;
    return regExp.test(value);
}