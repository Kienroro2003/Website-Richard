
// create time
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    let session = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
     }
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s + " " + session;
    setTimeout(startTime, 1000);
  }
  // create date
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
    var d = new Date();
    var day = ["Sunday" , "Monday", "Tuesday" ,"Wednesday" ,"Thursday" ,"Friday" ,"Saturday" ];

    var month = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] ;
    document.getElementById("date").innerHTML = "Today, " +  day[d.getDay()] 
    + " Day    " +  d.getDay() + ',' + "  Month   " + month[d.getMonth()] + ','
    + " Year   " + d.getFullYear();

// create map

    function showMap() {
			document.getElementById("map").style.display = "block";
			var mapOptions = {
				center: { lat: 10.762622, lng: 106.660172 },
				zoom: 15
			};
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
			var marker = new google.maps.Marker({
				position: { lat: 10.762622, lng: 106.660172 },
				map: map,
				title: "Hello World!"
			});
		}