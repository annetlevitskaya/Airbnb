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

initSelect();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlRWxlbWVudCA9IHNlbGVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUnKTtcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zRWxlbWVudHMgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpO1xuXG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG5cbiAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfSlcblxuICAgIHNlbGVjdE9wdGlvbnNFbGVtZW50cy5mb3JFYWNoKG9wdGlvbiA9PiAge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuXG5pbml0U2VsZWN0KCk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
