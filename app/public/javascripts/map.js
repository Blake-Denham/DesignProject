
const minlatInput = document.getElementById('minlat')
const maxlatInput = document.getElementById('maxlat')
const minlongInput = document.getElementById('minlong')
const maxlongInput = document.getElementById('maxlong')
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// latlngs=[[minlatInput.value, maxlatInput.value], [minlongInput.value, maxlongInput.value]]
// var rectOptions = {color: 'Red', weight: 1}
// var rectangle = L.rectangle(latlngs, rectOptions);
// rectangle.addTo(map)

map.on('moveend', ()=>{
     let bounds = map.getBounds();
     console.log(bounds)
     minlatInput.value = bounds._southWest.lat
     maxlatInput.value = bounds._northEast.lat
     minlongInput.value = bounds._southWest.lat
     maxlongInput.value = bounds._northEast.lng
})



// function onChange(event){
//     rectangle.latlngs = [[minlatInput.value, maxlatInput.value], [minlongInput.value, maxlongInput.value]]
//     map.setView([(minlatInput.value + maxlatInput.value)/2,(minlongInput.value+ maxlongInput.value)/2], map.tileLayer);
// }

// minlatInput.onchange = onChange;
// maxlatInput.onchange = onChange;
// minlongInput.onchange = onChange;
// maxlongInput.onchange = onChange;