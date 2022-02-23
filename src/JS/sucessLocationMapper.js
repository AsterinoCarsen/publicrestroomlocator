function mapPoints(data)
{
    console.log("Plotting map");
    result = Array(data);

    // Center the map at the home point determined
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: { lat: 0, lng: 0 },
        disableDefaultUI: true,
    });

    // Init all the locations inside of data
    for (let i = 0; i < result[0].length; i++)
    {
        let loc = { lat: result[0][i].lati, lng: result[0][i].long };

    const marker = new google.maps.Marker({
        position: loc,
        map: map,
        icon: 'src/toilet-icon.png'
    });
  }
}