const express = require("express");
const { getData , insertData} = require("../DB/Database");

const app = express();
const PORT = 3000;

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var bookings = [
  {
    name: "Corey",
    email: "Corey@gmail.com",
    phoneNumber: "07979797979",
    id: "Corey",
  },
  {
    name: "Tom",
    email: "Tom@gmail.com",
    phoneNumber: "07979797979",
    id: "Tom",
  },
  {
    name: "James",
    email: "James@gmail.com",
    phoneNumber: "07979797979",
    id: "James",
  },
];
/* const newBooking = new Booking(name, number, email, id); */

/* if (reservations.length === 5) {
  waitList.push(newBooking);
} else {
  reservations.push(newBooking);
} */

//  Create a new character - takes in JSON input

app.get("/api/tables", function (req, res) {
  getData().then(function(dbData){
    console.log("dbData 1 =", dbData);
    res.json(dbData);
  })
  .catch(function(err){
    console.log("woops", err);
  });
  
  
});


app.post("/api/reserve", function (req, res) {
  const newBooking = req.body;
  insertData(newBooking).then(function(){
    res.json({"sucess": true});
  }).catch(function(err){
    res.json({"sucess": false});
  });
});

app.use("/", express.static("../Client"));

app.listen(PORT, function () {
  console.log("Server is listening on Port ", PORT);
});

module.exports = bookings;
