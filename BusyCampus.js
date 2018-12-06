var map;
var markerInfo = [
  ['Mackimmie Block', 51.078013, -114.129424, 'zindex'], //center
  ['Taylor Family Digital Library', 51.077402,-114.129806,'zindex'],
  ['Craigie Hall',51.076401,-114.129641, 'zindez' ],
  ['Dinning Center', 51.075811,-114.133451,'zindex'],
  ['Hotel Alma', 51.075980,-114.132925, 'z'],
  ['Rundle Hall',51.075028,-114.132876,'z'],
  ['Aurora',51.074896,-114.134200,'s'],
  ['Kananaskis Hall', 51.075315,-114.134818, 'z'],
  ['Olympus Hall', 51.075059,-114.135634,'z'],
  ['Yamnuska Hall', 51.075229,-114.137317, 'z'],
  ['Cascade Hall', 51.075964,-114.137510, 'z'],
  ['Olympic Oval', 51.076993,-114.135789, 'z'],
  ['Kinesiology Complex', 51.077573,-114.133269, 'z'],
  ['Mac Hall',51.078407,-114.131143, 'z'],
  ['Mackimmie Link',51.077632,-114.129052,'z'],
  ['Mackimmie Tower',51.077403,-114.128784,'z'],
  ['Murray Fraser Hall',51.077004,-114.128369,'z'],
  ['Calgary Centre for Innovative Technology', 51.080434, -114.133643, 'zindex'],
  ['Engineering Block D', 51.080527,-114.132603 , 'zindex'],
  ['Engineering Block E', 51.079873,-114.132458 , 'zindex'],
  ['Engineering Block G', 51.080294,-114.131964, 'zindex'],
  ['Engineering Block A', 51.080240,-114.131342, 'zindex'],
  ['Engineering Block B', 51.080691,-114.131517, 'zindex'],
  ['Engineering Block C', 51.080906,-114.131887 , 'zindex'],
  ['Earth Sciences', 51.080166,-114.129073 , 'zindex'],
  ['Science B', 51.079368,-114.129398, 'zindex'],
  ['Taylor Institute for Teaching and Learning', 51.079133,-114.131208, 'zindex'],
  ['EEEL', 51.081061,-114.129372 , 'zindex'],
  ['Trailer B', 51.080283,-114.128081 , 'zindex'],
  ['Science A', 51.079113,-114.128158 , 'zindex'],
  ['Science Theatres', 51.079587,-114.127149, 'zindex'],
  ['Mathematical Sciences', 51.079968,-114.127750, 'zindex'],
  ['Social Sciences', 51.079044,-114.126968, 'zindex'],
  ['Biological Sciences', 51.079912,-114.125563 , 'zindex'],
  ['Childcare Centre', 51.078356,-114.124618 , 'zindex'],
  ['Administration', 51.078108,-114.127153, 'zindex'],
  ['Professional Faculties', 51.077435,-114.126716, 'zindex'],
  ['Education Tower', 51.077065,-114.126056 , 'zindex'],
  ['Education Block', 51.076681,-114.126502, 'zindex'],
];

// [1] = #values of contribution [2] = maximum value
var busynessVal = [
  ['Mackimmie Block', 0, 0], //center
  ['Taylor Family Digital Library', 0, 0],
  ['Craigie Hall', 0, 0],
  ['Dinning Center', 0, 0],
  ['Hotel Alma', 0, 0],
  ['Rundle Hall'],
  ['Aurora'],
  ['Kananaskis Hall'],
  ['Olympus Hall'],
  ['Yamnuska Hall'],
  ['Cascade Hall'],
  ['Olympic Oval'],
  ['Kinesiology Complex', 0, 0],
  ['Mac Hall'],
  ['Mackimmie Link'],
  ['Mackimmie Tower'],
  ['Murray Fraser Hall'],
  ['Calgary Centre for Innovative Technology'],
  ['Engineering Block D'],
  ['Engineering Block E'],
  ['Engineering Block G'],
  ['Engineering Block A'],
  ['Engineering Block B'],
  ['Engineering Block C'],
  ['Earth Sciences'],
  ['Science B'],
  ['Taylor Institute for Teaching and Learning'],
  ['EEEL'],
  ['Trailer B'],
  ['Science A'],
  ['Science Theatres'],
  ['Mathematical Sciences'],
  ['Social Sciences'],
  ['Biological Sciences'],
  ['Childcare Centre'],
  ['Administration'],
  ['Professional Faculties'],
  ['Education Tower'],
  ['Education Block'],
];

// [1] = #upvotes [2] = #down vote [3] = total votes 
var voteVal = [
  ['Mackimmie Block', 0, 0], //center
  ['Taylor Family Digital Library', 0, 0],
  ['Craigie Hall', 0, 0],
  ['Dinning Center', 0, 0],
  ['Hotel Alma', 0, 0],
  ['Rundle Hall'],
  ['Aurora'],
  ['Kananaskis Hall'],
  ['Olympus Hall'],
  ['Yamnuska Hall'],
  ['Cascade Hall'],
  ['Olympic Oval'],
  ['Kinesiology Complex', 0, 0, 0],
  ['Mac Hall'],
  ['Mackimmie Link'],
  ['Mackimmie Tower'],
  ['Murray Fraser Hall'],
  ['Calgary Centre for Innovative Technology'],
  ['Engineering Block D'],
  ['Engineering Block E'],
  ['Engineering Block G'],
  ['Engineering Block A'],
  ['Engineering Block B'],
  ['Engineering Block C'],
  ['Earth Sciences'],
  ['Science B'],
  ['Taylor Institute for Teaching and Learning'],
  ['EEEL'],
  ['Trailer B'],
  ['Science A'],
  ['Science Theatres'],
  ['Mathematical Sciences'],
  ['Social Sciences'],
  ['Biological Sciences'],
  ['Childcare Centre'],
  ['Administration'],
  ['Professional Faculties'],
  ['Education Tower'],
  ['Education Block'],
];


var thisUser = {name:'', elective: 0, username: ''};

var uniMarkers = [];
var fav = [
  ['Mackimmie Block'],
  ['Taylor Family Digital Library']
];
var checkIn;
var infoWindows = [];
var friends = [
  ['Shiv Odedra', 'Engineering', 'Mac Hall'],
  ['Jesse Hopper', 'Engineering', 'EEEL'],
  ['M fergs', 'Being Whack','Taylor Family Digital Library'],
  ['Buakake Alien Olin', 'Being Super whack','Engineering Block E']
];
var freindMarker= [];
var friendWindow = [];
var addMe = [
  ['shivODD98', 'Shiv QUAN', 'Engineering','Taylor Institute for Teaching and Learning' ]
];
//https://img.icons8.com/color/50/000000/street-view.png friend icon


function initMap() {
  var location = {lat: 51.0782, lng: -114.129424};
  var minZoomLevel = 16;
  map = new google.maps.Map(document.getElementById("map"), {
        zoom: minZoomLevel,
        center: location,
        disableDefaultUI: true,
        styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#ebe3cd"
  }
]
},
{
"elementType": "labels",
"stylers": [
  {
    "visibility": "on"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#523735"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#f5f1e6"
  }
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#c9b2a6"
  }
]
},
{
"featureType": "administrative.land_parcel",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#dcd2be"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#ae9e90"
  }
]
},
{
"featureType": "administrative.neighborhood",
"stylers": [
  {
    "visibility": "on"
  }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},

{
"featureType": "poi.business",
"stylers": [
    {
        "visibility": "off"
    }
]
},

{    
featureType: 'transit',
elementType: 'labels.icon',
stylers: [
    {
        "visibility": 'off'
    }
]
},

{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#93817c"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#a5b076"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#447530"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
    "color": "#f5f1e6"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
  {
    "color": "#fdfcf8"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#f8c967"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#e9bc62"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e98d58"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry.fill",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry.stroke",
"stylers": [
  {
    "color": "#db8555"
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#806b63"
  }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#8f7d77"
  }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#ebe3cd"
  }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dfd2ae"
  }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
  {
    "color": "#b9d3c2"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#92998d"
  }
]
}
]
  });      
  setUniMarkers(map);
  google.maps.event.addListener(map, 'rightclick', reCenter);
  google.maps.event.addListener(map, 'click', function() {
    closeInfoWindows();
    closeFriendWindows();
  });
}



function popitup(url) {
  newwindow=window.open(url,"_self");
  if (window.focus) {newwindow.focus()}
  return false;
}

function reCenter(){
  var strictBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(51.082268,-114.115276),//51.077052,-114.142367), 
    new google.maps.LatLng(51.072115,-114.154726)//51.079928,-114.117863)
  );
  if (strictBounds.contains(map.getCenter())) return;
  map.panTo(new google.maps.LatLng(51.0782, -114.129424))//setCenter(new google.maps.LatLng(51.0782, -114.129424));
  map.setZoom(16);
}

function toggleBounce(){
  if (this.getAnimation() !== null) {
      this.setAnimation(null);
  } else {
      this.setAnimation(google.maps.Animation.BOUNCE);
  }
}

function homeAlert(){
  alert("SHIT");
}

function findPerson(title){
  for(var i = 0; i< friends.length;i++){
    if(friends[i][0]==title)
      return friends[i];
  }
}

function getLatLng(title){
    for(var i = 0;i<markerInfo.length;i++){
      if(markerInfo[i][0] == title){
        var pos = {lat: markerInfo[i][1], lng:markerInfo[i][2] };
        return pos;
      }
    }
}

//UNIMARKER HELPERS

function setUniMarkers(){
    var i;
    var marker;
    for(i = 0; i<markerInfo.length; i++){
        marker = createUniMarkers(markerInfo[i]);
        marker.addListener('click', toggleBounce);
        marker.addListener('click', openInfo);
        uniMarkers.push(marker);
    }
}

function createUniMarkers(markerInfo){
  var marker =  new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: {lat:markerInfo[1], lng: markerInfo[2] },//location,//new google.maps.LatLng(markerInfo[i][1], markerInfo[i],[2]),
                title: markerInfo[0],
            });

  return marker;
}

function setAllUniMarkersOn(map) {
  for (var i = 0; i < uniMarkers.length; i++) {
    if(uniMarkers[i].title != checkIn){
    uniMarkers[i].setAnimation(google.maps.Animation.DROP);   
    uniMarkers[i].setMap(map);
    }
  }
}

function removeAllUniMarkers(){
  closeInfoWindows();
  setAllUniMarkersOn(null);
}

function onlyKeepCheckIn(){
  for (var i = 0; i < uniMarkers.length; i++) {
    if(uniMarkers[i].title != checkIn){
      // uniMarkers[i].setAnimation(google.maps.Animation.DROP);   
      // uniMarkers[i].setMap(null);
      // uniMarkers[i].setAnimation(google.maps.Animation.DROP);   
    uniMarkers[i].setMap(null);
    }
  }
}

function showUniMarkers(){
  closeInfoWindows();
  setAllUniMarkersOn(map);
}

//INFOWINDOW HELPERS

var favTitle;
function openInfo(){
    closeInfoWindows();
    favTitle = this.title;
    var check = setInfoWindowCheck(favTitle);
    var content; 
    if(!thisUser.elective)
      content = setInfoWindowContent(favTitle,check);
    else
      content = setElectiveInfoWindowContent(favTitle,check);
    var infowindow = makeInfoWindow(content);
    infoWindows.push(infowindow)
    infowindow.open(this.map, this);
    this.setAnimation(null);
}

function makeInfoWindow(content){
  var infowindow = new google.maps.InfoWindow({
    content: content
  });

  return infowindow;
}

function setInfoWindowContent(title,check){
  var busyness= getBusynessVal(title);
  var vote = getVoteVal(title); //* 100;
  var voteEx = "%";
  var busyEx = "/5";
  if(!(vote > 0)){
    vote = 'NO VOTES YET';
    voteEx = "";
  }
  if(!(busyness>0)){
    busyness = "NO DATA YET";
    busyEx = "";
  }
  var content = 
              '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">' + title + '</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Current Busyness Level: ' + (busyness) + busyEx +  '</b></p>'+ 
              '<p><b>Average Busyness Level: NO DATA YET</b></p>' +
              '<p><b>Busyness Level Accuracy:  ' + vote + voteEx +'</b></p>' +  
              '<button type="button" onclick="addToFsyav();" >+ Favourites</button>' +
              '<button type="button" onclick="removeFromFav()">- Favourites</button>' +
              '<p></p>' + 
              '<button id="checktype" type="button" onclick="changeCheckIcon()">' + check +'</button>' + 
              '<p></p>' + 
              '<button id="busylevel" type="button" onclick="getUpVote()">👍</button>' +
              '<button id="busylevel" type="button" onclick="getDownVote()">👎</button>';
  return content;
}

function setElectiveInfoWindowContent(title,check){
  var busyness= getBusynessVal(title);
  var vote = getVoteVal(title); //* 100;
  var voteEx = "%";
  var busyEx = "/5";
  if(!(vote > 0)){
    vote = 'NO VOTES YET';
    voteEx = "";
  }
  if(!(busyness>0)){
    busyness = "NO DATA YET";
    busyEx = "";
  }  
  var content = 
  '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">' + title + '</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Current Busyness Level: ' + (busyness) + busyEx +  '</b></p>'+ 
  '<p><b>Average Busyness Level: NO DATA YET</b></p>' +
  '<p><b>Busyness Level Accuracy:  ' + vote + voteEx +'</b></p>' +  
  '<button type="button" onclick="addToFav();" >+ Favourites</button>' +
  '<button type="button" onclick="removeFromFav()">- Favourites</button>' +
  '<p></p>' + 
  '<button id="checktype" type="button" onclick="changeCheckIcon()">' + check +'</button>' + 
  '<p></p>' + 
  '<button id="busylevel" type="button" onclick="voteOnBusyLevel()">Contribute On Busy Level</button>' +
  '<p></p>' + 
  '<button id="busylevel" type="button" onclick="getUpVote()">👍</button>' +
  '<button id="busylevel" type="button" onclick="getDownVote()">👎</button>';
return content;



}

function closeInfoWindows(){
  for (var i = 0; i < infoWindows.length; i++)
    infoWindows[i].close();
}

function setInfoWindowCheck(favTitle){
  var check = 'Check In Here'; 
    if(checkIn==favTitle)
      check = 'Check out Here';
  return check;
}

//FAVOURITE AREA HELPERS

var favOn = 0;
function showFavAreas(){
  removeAllUniMarkers();
  if(favOn == 1){
    document.getElementById('favs').style.color = "white";
    showUniMarkers();
    favOn =0;
  }
  else{
    document.getElementById('favs').style.color = "#f4ce42";
    setFavMarkers();
    favOn = 1;
    }
}

function setFavMarkers(){
  var j;
  for(j=0;j<fav.length;j++){
    for (var i = 0; i < uniMarkers.length; i++) {
      if(fav[j] == uniMarkers[i].title){
        uniMarkers[i].setAnimation(google.maps.Animation.DROP);   
        uniMarkers[i].setMap(map);
      }
    }
  }
}

function addToFav(){
  fav.push(favTitle);
  console.log(favTitle);
}

function removeFromFav(){
  for(var i = 0; i<fav.length;i++){
    if(fav[i] == favTitle){
      fav[i]= null;
      showFavAreas();
      return;
    }
  }
}

function voteOnBusyLevel(){

}

//CHECKIN HELPERS

function changeCheckIcon(){
  if(document.getElementById("checktype").innerText == 'Check In Here'){
      removeFromCheckIns();
      setCheckOutIcon();
    }
    else{
      setCheckInIcon();
    }
}

function setCheckOutIcon(){
  for(var i = 0; i<uniMarkers.length; i++){
    if(uniMarkers[i].title == favTitle){
      uniMarkers[i].setIcon('https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png');
      document.getElementById("checktype").innerText = 'Check out Here';
      checkIn = favTitle;
      return;
    }
  }
}

function setCheckInIcon(){
  for(var i = 0; i<uniMarkers.length; i++){
    if(uniMarkers[i].title == favTitle){
      uniMarkers[i].setIcon(null);
      document.getElementById("checktype").innerText = 'Check In Here';
      removeFromCheckIns();
      return;
    }
  }
}

function removeFromCheckIns(){  
  for(var j = 0; j<uniMarkers.length; j++){
    if(checkIn == uniMarkers[j].title){ 
      checkIn = null;
      uniMarkers[j].setIcon(null);
    }
  }
}

// FRIEND HELPERS

function setAllFriendMarkers(map){
  for(var i = 0; i< freindMarker.length; i++){
    freindMarker[i].setMap(map);
    freindMarker[i].setAnimation(google.maps.Animation.DROP);
  }
}

function removeFreindMarkers(){
  setAllFriendMarkers(null);
}

function showFriendMakers(){
  setAllFriendMarkers(map);
}

var freindOn=-1;
function placeFriendsMarkers(){
  switch(freindOn){
    case -1: // first call to placeFriendsMarkers (fills friendMarker)
      document.getElementById('Friends').style.color = "#f4ce42";//background-color  = #f4ce42;
      onlyKeepCheckIn();
      setFriendsMarkers();
      freindOn = 0;
      break;
    case 0:
        document.getElementById('Friends').style.color = "white";
        removeFreindMarkers();
        showUniMarkers();
        freindOn = 1;
      break;
    case 1:
        document.getElementById('Friends').style.color = "#f4ce42";
        onlyKeepCheckIn();
        showFriendMakers();
        freindOn = 0;
      break;
    default: break;
    
  }
}

function setFriendsMarkers(){
  var marker;
  for(i = 0; i<friends.length; i++){
    if(friends[i][2]!=null){
      var pos = getLatLng(friends[i][2])
      marker = makeFriendMarkers(friends[i],pos)
      freindMarker.push(marker);
      marker.addListener('click', toggleBounce);
      marker.addListener('click',FriendInfo);
    }
  }
}

function makeFriendMarkers(friend,pos){
  var marker =  new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: pos,//{lat: 51.0782, lng: -114.129424}, //pos,//location,//new google.maps.LatLng(markerInfo[i][1], markerInfo[i],[2]),
                icon:'https://img.icons8.com/color/50/000000/street-view.png',
                title: friend[0],
  });
  return marker;   
}

function makeAddFriendMarkers(friend,pos){
  var marker =  new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                position: pos,//{lat: 51.0782, lng: -114.129424}, //pos,//location,//new google.maps.LatLng(markerInfo[i][1], markerInfo[i],[2]),
                icon:'https://img.icons8.com/color/50/000000/street-view.png',
                title: friend[0],
  });
  return marker;   
}


var friendTitle;
function FriendInfo(){
    closeFriendWindows();
    friendTitle = this.title;
    var person = findPerson(friendTitle);
    var content = setFriendWindowContent(person);
    var infowindow = makeFriendWindow(content);
    infowindow.open(this.map, this);
    friendWindow.push(infowindow);
    this.setAnimation(null);
}

function makeFriendWindow(content){
  var info = new google.maps.InfoWindow({
                 content: content
  });
  return info;
}

function closeFriendWindows(){
  for (var i = 0; i < friendWindow.length; i++)
    friendWindow[i].close();
}

function setFriendWindowContent(person){
  var content = 
                '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h1 id="firstHeading" class="firstHeading">' + friendTitle + '</h1>'+
                '<div id="bodyContent">'+
                '<p><b>Studying @' +person[2] + '</b></p>'+ 
                '<p><b>'+person[0] +' Department: ' + person[1]+'</b></p>' + 
                '<button type="button" onclick="removeFriend()">Remove Friend</button>'; 
  return content;
}

function removeFriend(){
  closeFriendWindows();
  removeFriendMarker();
  for(var i = 0; i < friends.length; i++){
    if(friends[i][0] == friendTitle){
      friends.splice(i,1);// = null;
    }
  }
}

function removeFriendMarker(){
  for(var i = 0;i<freindMarker.length;i++){
    console.log(freindMarker[i].title + '?=' + friendTitle)
    if(freindMarker[i].title == friendTitle ){
      console.log(freindMarker[i].title + '?=' + friendTitle)
      freindMarker[i].setMap(null);
      freindMarker.splice(i,1);// = null;
      break;
    }
  }
}

function getLoginInfo(){
  loginUsername
  
}

function validateLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == 'poo')
        console.log("good username");
    if(password == 'poo')
        console.log("good password");
        
    newwindow=window.open('BusyCampusWebSite.html',"_self", false);
    this.window.close();
    if (window.focus) {newwindow.focus()}
    return false;
}

var showingAdd = 0;
function addFriendButtonClick(){
  if(!showingAdd){
    document.getElementById('textInput').className="show";
    document.getElementById('add').className="show";
    showingAdd = 1;
  }
  else{
    document.getElementById('textInput').className="hide";
    document.getElementById('add').className="hide";
    showingAdd = 0;
  } 

}

function addFreind(){

  var newUsername = document.getElementById('textInput').value;
  console.log(newUsername);
  var addme = checkAddUser(newUsername); 
  if(CheckAlreadyFriend(addme)) return;
  var newfriend = [addme[1], addme[2], addme[3]];
  friends.push(newfriend);
  if(freindOn != -1){
  addFriendMarker(newfriend);
  removeAllUniMarkers();
  showFriendMakers();
  }
  // freindMarker.pop();


  document.getElementById('textInput').className="hide";  //NEED TO CLEAR TEXT INPUT
  document.getElementById('add').className="hide";
  document.getElementById('textInput').value = '';
  showing = 0;
  //alert("GET SHIT ON U HAVE NO FREINDS AHA")
}

function checkAddUser(newUsername){
  for(var i = 0; i<addMe.length; i++){
    if(newUsername == addMe[i][0]){
      return addMe[i];
    }
  }
}

function CheckAlreadyFriend(addme){
  for(var i = 0; i< friends.length; i++){
    if(friends[i][0] == addme[1]){
      alert(addme[1] + " Is Already Your Friend :)");
      document.getElementById('textInput').className="hide";  //NEED TO CLEAR TEXT INPUT
      document.getElementById('add').className="hide";
      document.getElementById('textInput').value = '';
      showing = 0;
      return true;
      
    }
  }
  return false;

}

function addFriendMarker(newfriend){
  var pos = getLatLng(newfriend[2]);
  var marker = makeAddFriendMarkers(newfriend,pos);
  freindMarker.push(marker);
  marker.addListener('click', toggleBounce);
  marker.addListener('click',FriendInfo);
}

function voteOnBusyLevel(){
  document.getElementById("myForm").style.display = "block";//popitup('vote.html'); 
}

function openLogin(){
  document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm(){
  document.getElementById("loginForm").style.display = "none";
}

function openRegForm(){
  closeLoginForm();
  document.getElementById("RegisterForm").style.display = "block";

}

function closeRegForm(){
  document.getElementById("RegisterForm").style.display = "none";
}

function closeForm() {
 document.getElementById("myForm").style.display = "none";
}

function getSubmition(){
  var val = document.getElementById('submitVal').value;
  console.log(val);
  submitValue(val,favTitle);
  document.getElementById('submitVal').value = null;
  closeForm();
  closeInfoWindows();
}

function submitValue(val,Title){
  for(var i = 0; i<busynessVal.length; i++){
    console.log(busynessVal[i]);
    if(busynessVal[i][0] == Title){
       busynessVal[i][1]+=parseInt(val, 10);
       console.log(busynessVal[i][1]);
       busynessVal[i][2]+=5;
      console.log(busynessVal[i][2]);
    }
  }
}

function getBusynessVal(Title){
  console.log("in get val");
  for(var i = 0; i<busynessVal.length; i++){
    if(busynessVal[i][0] == Title && busynessVal[i][2]!=0){
      console.log(Title + busynessVal[i][1]);
      return ((busynessVal[i][1]/busynessVal[i][2])*5);
    }
    // else
    //   return 'NO DATA'
  }
}


function getUpVote(){
    for(var i = 0; i<voteVal.length; i++){
      if(voteVal[i][0] == favTitle){
        voteVal[i][1]++;
        voteVal[i][3]++;
        closeInfoWindows();
      }
  }
}

function getDownVote(){
    for(var i = 0; i<voteVal.length; i++){
      if(voteVal[i][0] == favTitle){
        voteVal[i][2]++;
        voteVal[i][3]++;
        closeInfoWindows();
      }
  }
}

function getVoteVal(title){
    for(var i = 0; i<voteVal.length; i++){
      if(voteVal[i][0] == title && voteVal[i][3]!=0){
        // console.log(Title + voteVal[1][i]);
        var rtn = ((voteVal[i][1]-voteVal[i][2])/voteVal[i][3]) * 100;
        return Math.ceil(rtn);
      }
      // else 
      //   return "NO VOTES YET"
  }
}

function avgBusyness(){

}
//SQL

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",//jdbc:mysql://localhost:3306/BOOKgang",
//   user: "root",
//   password: "Pudge.1998",
//   database: "BOOKgang",
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   // con.query("SELECT Title FROM bookgang.documents WHERE ISBN=1;", function (err, result, fields) {
//   //   if (err) throw err;
//   //   console.log(result);
//   // });
// });

// con.query("SELECT Title FROM bookgang.documents WHERE ISBN=1;", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

