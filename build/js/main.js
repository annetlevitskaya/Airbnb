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

initSelect();
initMap();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGluaXRTZWxlY3QoKSB7XG4gICAgY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3QnKTtcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlRWxlbWVudCA9IHNlbGVjdEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdF9fdmFsdWUnKTtcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zRWxlbWVudHMgPSBzZWxlY3RFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RfX29wdGlvbicpO1xuXG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG5cbiAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZWN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKGFjdGl2ZUNsYXNzTmFtZSk7XG4gICAgfSlcblxuICAgIHNlbGVjdE9wdGlvbnNFbGVtZW50cy5mb3JFYWNoKG9wdGlvbiA9PiAge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzZWxlY3RWYWx1ZUVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9uLmlubmVyVGV4dDtcbiAgICAgICAgICAgIHNlbGVjdEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICB9KVxufVxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcblx0dmFyIHNhbkZyYW5jaXNjbyA9IHsgbGF0OiAzNy43NDYzMzEsIGxuZzogLTEyMi40MTkxOTkgfTtcblx0dmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7IFxuXHRcdFx0em9vbTogMTksIFxuXHRcdFx0Y2VudGVyOiBzYW5GcmFuY2lzY28sXG5cdFx0XHRzdHlsZXM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjNjE2MTYxXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNmNWY1ZjVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZjFmMWYxXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2JkYmRiZFwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwic2F0dXJhdGlvblwiOiAtMTAwXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcInZpc2liaWxpdHlcIjogXCJvblwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZWVlZWVlXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNlNWU1ZTVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjZGFkYWRhXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcblx0XHRcdFx0ICBcInN0eWxlcnNcIjogW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHQgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdCAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXQubGluZVwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNlNWU1ZTVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uXCIsXG5cdFx0XHRcdCAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG5cdFx0XHRcdCAgXCJzdHlsZXJzXCI6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0ICBcImNvbG9yXCI6IFwiI2VlZWVlZVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQgIF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHQgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxuXHRcdFx0XHQgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiNjOWM5YzlcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0ICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcblx0XHRcdFx0ICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuXHRcdFx0XHQgIFwic3R5bGVyc1wiOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdCAgXCJjb2xvclwiOiBcIiM5ZTllOWVcIlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0ICBdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9KTtcblx0dmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuXHRcdHBvc2l0aW9uOiBzYW5GcmFuY2lzY28sXG5cdFx0aWNvbjogJy9pbWcvZ29vZ2xlLW1hcmtlci5zdmcnLFxuXHRcdG1hcDogbWFwXG5cdH0pO1xuXHRtYXAucGFuQnkoMjAwLCAxNTApO1xufVxuXG5pbml0U2VsZWN0KCk7XG5pbml0TWFwKCk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
