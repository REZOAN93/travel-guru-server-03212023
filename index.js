const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const hotel = require("./data/hotel.json");

app.get("/", (req, res) => {
  res.send("Api is responding");
});

app.get("/hotel", (req, res) => {
  res.send(hotel);
});

app.get("/hotel/:id", (req, res) => {
  const id = req.params.id;
  const spacifiedHotel = hotel.find((n) => n._id === id);
  res.send(spacifiedHotel);
  res.send(hotel);
});

app.listen(port, function () {
  console.log("CORS-enabled web server listening on port 80");
});
