let map;
let uluru;

function initMap() {
    let uluru = {
        lat: 50.064,
        lng: 19.944
    };

    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14,
            center: uluru
        });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        draggable: true
    });
}