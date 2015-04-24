// initialize event listeners for the tabs
window.addEventListener('load', function()
{
    document.getElementById('home').addEventListener('click', activateTab);;
    document.getElementById('thoughts').addEventListener('click', activateTab);;
    document.getElementById('about').addEventListener('click', activateTab);;
    document.getElementById('txt').innerHTML = "<br>This is home";
    
    // listens for the google map event
    document.addEventListener('DOMContentLoaded', activateMap);
});

// activate tab function
function activateTab(event)
{
    // store the current id in currID
    var currID = this.id;
    
    // reset all the active links
    document.getElementById('home').className = '';
    document.getElementById('thoughts').className = '';
    document.getElementById('about').className = '';
    
    // sets the current tab to active
    document.getElementById(currID).className = 'active';
    
    // empty the map div when not being used
    document.getElementById('map-canvas').innerHTML = '';
    document.getElementById('map-canvas').className = '';
    
    // set the text under the tabs based on which tab it is
    if(currID === 'home')
        document.getElementById('txt').innerHTML = "<br>This is home";
    else if(currID === 'thoughts')
        document.getElementById('txt').innerHTML = "<br>This is thoughts";
    else if(currID === 'about')
    {
        document.getElementById('txt').innerHTML = "<br>This is about";
        
        // activate the map and set the class name to activate the css as well
        document.getElementById('map-canvas').className = 'map';
        activateMap();
    }
}

// activates the map using Google API
function activateMap()
{
    // location of dalhousie university in a variable
    var dal = new google.maps.LatLng(44.634814, -63.592964);
    
    // sets up the maps variables
    var mapOptions = {
        center: dal,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    // draws the map in the div 'map-canvas'
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    // string for the info window
    var string = '<b>Dalhousie University</b><br>';
        string += '6299 South St<br>';
        string += 'Halifax, NS B3H 4R2';
    
    // info window for the marker
    var infowindow = new google.maps.InfoWindow({
        content: string
    });
    
    // create a marker in the center
    var marker = new google.maps.Marker({
        position: dal,
        map: map,
        title: 'Dalhousie University'
    });
    
    // info window event listener
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}