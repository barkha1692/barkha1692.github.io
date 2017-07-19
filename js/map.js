 var parliament = new google.maps.LatLng(51.576158, 0.090479);
var marker;
    
  function initialize() {
    var myOptions = {
      zoom: 12,
      center: parliament ,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
    
     var marker = new google.maps.Marker({
      position: parliament, 
      map: map, 
      title:"Hello World!"
  });   
  }