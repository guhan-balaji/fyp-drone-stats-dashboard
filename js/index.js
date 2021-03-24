const URL = "";

setInterval(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        console.log("no data");
      } else {
        console.log(data);
        document.getElementById("alt_gps").innerText = data.alt_gps;
        document.getElementById("alt_baro").innerText = data.alt_baro;
        document.getElementById("latitude").innerText = data.latitude;
        document.getElementById("longitude").innerText = data.longitude;
        document.getElementById("velocity_x").innerText = data.velocity_x;
        document.getElementById("velocity_y").innerText = data.velocity_y;
        document.getElementById("velocity_z").innerText = data.velocity_z;
        document.getElementById("pitch").innerText = data.pitch;
        document.getElementById("yaw").innerText = data.yaw;
        document.getElementById("roll").innerText = data.roll;
        document.getElementById("groundSpeed").innerText = data.groundSpeed;
        document.getElementById("airSpeed").innerText = data.airSpeed;
      }
    })
    .catch((err) => console.log({ error: err }));
}, 1000);
