"use strict";

function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333}; //variable that sets the postion of leicester
  let dmu = {lat: 52.629311, lng: -1.137836}; //variable that sets the postion of Gateway House - De Montfort University

  let mapDemo = document.getElementById("google-map"); //variable that holds a reference to the google-map id
  

  let map = new google.maps.Map(mapDemo, { //variable that sets the default location to be leicester
    zoom: 7,
    center: leicester
  });


  let markerDMU = new google.maps.Marker({ //variable that sets a marker Gateway House - De Montfort University with a caption
    position: dmu,
    map: map,
    title: 'This website was created here!'
  });
}