function mapPoints(data)
{
    result = Array(data);

    // Center the map at the home point determined
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: { lat: result[0][0].lati, lng: result[0][0].long },
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

    const listItem = document.createElement("div");
    listItem.className = 'bth';
    listItem.innerHTML = i;

    document.getElementById('sidebar-container').append(listItem);
  }
}