function initMap() {
	var sanFrancisco = { lat: 37.746331, lng: -122.419199 };
	var map = new google.maps.Map(
		document.getElementById('map'), { 
			zoom: 19, 
			center: sanFrancisco,
			styles: [
				{
				  "elementType": "labels.icon",
				  "stylers": [
					{
					  "visibility": "off"
					}
				  ]
				},
				{
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "elementType": "labels.text.stroke",
				  "stylers": [
					{
					  "color": "#f5f5f5"
					}
				  ]
				},
				{
				  "featureType": "administrative",
				  "stylers": [
					{
					  "color": "#f1f1f1"
					}
				  ]
				},
				{
				  "featureType": "administrative",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "administrative.land_parcel",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#bdbdbd"
					}
				  ]
				},
				{
				  "featureType": "landscape.man_made",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "saturation": -100
					},
					{
					  "visibility": "on"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "poi",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "poi.park",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "road",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#ffffff"
					}
				  ]
				},
				{
				  "featureType": "road.arterial",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#757575"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#dadada"
					}
				  ]
				},
				{
				  "featureType": "road.highway",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#616161"
					}
				  ]
				},
				{
				  "featureType": "road.local",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				},
				{
				  "featureType": "transit.line",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#e5e5e5"
					}
				  ]
				},
				{
				  "featureType": "transit.station",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#eeeeee"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "geometry",
				  "stylers": [
					{
					  "color": "#c9c9c9"
					}
				  ]
				},
				{
				  "featureType": "water",
				  "elementType": "labels.text.fill",
				  "stylers": [
					{
					  "color": "#9e9e9e"
					}
				  ]
				}
			]
		});
	var marker = new google.maps.Marker({
		position: sanFrancisco,
		icon: '/img/google-marker.svg',
		map: map
	});
	map.panBy(200, 150);
}
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
function validateTextString(value) {
    const re = /^[a-zA-Zа-яА-Я\s]*$/;
    return value.length > 0 && re.test(value);
}

// source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// source: https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript
function validateTel(tel) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(tel);
}

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

initSelect();
initForm();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRNYXAoKSB7XG5cdHZhciBzYW5GcmFuY2lzY28gPSB7IGxhdDogMzcuNzQ2MzMxLCBsbmc6IC0xMjIuNDE5MTk5IH07XG5cdHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgeyBcblx0XHRcdHpvb206IDE5LCBcblx0XHRcdGNlbnRlcjogc2FuRnJhbmNpc2NvLFxuXHRcdFx0c3R5bGVzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZjVmNWY1XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2YxZjFmMVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNlZWVlZWVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubGFuZF9wYXJjZWxcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNiZGJkYmRcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlLm1hbl9tYWRlXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcInNhdHVyYXRpb25cIjogLTEwMFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2RhZGFkYVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiM2MTYxNjFcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiIzllOWU5ZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZTVlNWU1XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQuc3RhdGlvblwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNlZWVlZWVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjYzljOWM5XCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcblx0XHRwb3NpdGlvbjogc2FuRnJhbmNpc2NvLFxuXHRcdGljb246ICcvaW1nL2dvb2dsZS1tYXJrZXIuc3ZnJyxcblx0XHRtYXA6IG1hcFxuXHR9KTtcblx0bWFwLnBhbkJ5KDIwMCwgMTUwKTtcbn1cbmZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlRWxlbWVudCA9IHNlbGVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUnKTtcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zRWxlbWVudHMgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpO1xuXG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG5cbiAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfSlcblxuICAgIHNlbGVjdE9wdGlvbnNFbGVtZW50cy5mb3JFYWNoKG9wdGlvbiA9PiAge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuZnVuY3Rpb24gdmFsaWRhdGVUZXh0U3RyaW5nKHZhbHVlKSB7XG4gICAgY29uc3QgcmUgPSAvXlthLXpBLVrQsC3Rj9CQLdCvXFxzXSokLztcbiAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMCAmJiByZS50ZXN0KHZhbHVlKTtcbn1cblxuLy8gc291cmNlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE1NS9ob3ctdG8tdmFsaWRhdGUtYW4tZW1haWwtYWRkcmVzcy1pbi1qYXZhc2NyaXB0XG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgY29uc3QgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG59XG5cbi8vIHNvdXJjZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDMzODI2Ny92YWxpZGF0ZS1waG9uZS1udW1iZXItd2l0aC1qYXZhc2NyaXB0XG5mdW5jdGlvbiB2YWxpZGF0ZVRlbCh0ZWwpIHtcbiAgICBjb25zdCByZSA9IC9eW1xcK10/WyhdP1swLTldezN9WyldP1stXFxzXFwuXT9bMC05XXszfVstXFxzXFwuXT9bMC05XXs0LDZ9JC9pbTtcbiAgICByZXR1cm4gcmUudGVzdCh0ZWwpO1xufVxuXG5mdW5jdGlvbiBpbml0Rm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJyk7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcblxuICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRlSW5wdXQoaW5wdXQpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgZm9ybS5vbnN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IGlzRm9ybVZhbGlkID0gdHJ1ZTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNJbnB1dFZhbGlkID0gdmFsaWRhdGVJbnB1dChpbnB1dCk7XG4gICAgICAgICAgICBpZiAoIWlzSW5wdXRWYWxpZCkge1xuICAgICAgICAgICAgICAgIGlzRm9ybVZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBnZXRGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICAvLyBmb3IgZnV0dXJlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnXFxuXFxuJywgZm9ybURhdGEsICdcXG5cXG4nKTtcblxuICAgICAgICAgICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdC11cycpO1xuICAgICAgICAgICAgcm9vdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmV0Y2hpbmcnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICByb290RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmZXRjaGluZycpO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBzaG93U3VjY2VzcygpO1xuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoaW5wdXQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB0eXBlIH0gPSBpbnB1dDtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsaWRhdGVUZXh0U3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZWwnOlxuICAgICAgICAgICAgaXNWYWxpZCA9IHZhbGlkYXRlVGVsKHZhbHVlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbWFpbCc6XG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsaWRhdGVFbWFpbCh2YWx1ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWQ7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWNjZXNzKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdEZvcm0nKTtcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGV4dGFyZWEgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG5cbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9ICcnKTsgICAgICAgICAgICAgICAgIFxuICAgIHRleHRhcmVhLnZhbHVlID0gJyc7XG5cbiAgICBjb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLW1lc3NhZ2UnKTtcbiAgICBzdWNjZXNzTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgICBjb25zdCBzdWNjZXNNZXNzYWdlQ2xvc2UgPSBzdWNjZXNzTWVzc2FnZS5xdWVyeVNlbGVjdG9yKCcuc3VjY2Vzcy1tZXNzYWdlX19idG4nKTtcbiAgICBzdWNjZXNNZXNzYWdlQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHN1Y2Nlc3NNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3RGb3JtJyk7XG4gICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xuICAgIGNvbnN0IHRleHRhcmVhID0gZm9ybS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUnKS5pbm5lclRleHQ7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHt9O1xuXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICBmb3JtRGF0YVtpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIGZvcm1EYXRhW3RleHRhcmVhLm5hbWVdID0gdGV4dGFyZWEudmFsdWU7XG4gICAgZm9ybURhdGFbJ3N1YmplY3QnXSA9IHNlbGVjdFZhbHVlO1xuXG4gICAgcmV0dXJuIGZvcm1EYXRhO1xufVxuXG5pbml0U2VsZWN0KCk7XG5pbml0Rm9ybSgpOyJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
