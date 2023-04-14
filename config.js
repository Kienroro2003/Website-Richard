let buttons = document.querySelectorAll(".btn-map");
buttons.forEach(button=> button.addEventListener("click", updateLocation))
let lat = 0;
let lng = 0;

function updateLocation(event){
    lat = parseFloat(event.target.dataset.lat);
    lng = parseFloat(event.target.dataset.lng);
    console.log(lat)
    initMap(lat, lng)
}
async function initMap(lat, lng) {

    //@ts-ignore
    const {Map} = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: {lat: lat, lng: lng},
        zoom: 15,
    });
}

// initMap();
