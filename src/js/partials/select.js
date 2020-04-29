function initSelect() {
    const selectElement = document.querySelector('.select');

    const selectValueElement = selectElement.querySelector('.select__value');
    const selectOptionsElements = selectElement.querySelectorAll('.select__option');

    const activeClassName = 'active';

    selectValueElement.addEventListener('click', function() {
        selectElement.classList.toggle(activeClassName);
    })

    selectOptionsElements.forEach(option =>  {
        option.addEventListener('click', () => {
            selectValueElement.innerHTML = option.innerText;
            selectElement.classList.remove(activeClassName);
        });
    })
}