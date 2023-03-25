const mapElement = document.getElementById("map");

const map = new google.maps.Map(mapElement, {
  center: { lat: 0, lng: 0 },
  zoom: 2,
});

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      localStorage.setItem(
        "position",
        JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      );

      map.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });

      const marker = new google.maps.Marker({
        position: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        map: map,
      });
    },
    () => {
      console.error("we're unabl to get the data...");
    }
  );
} else {
  console.error("Geolocation is not supported by your browser");
}
