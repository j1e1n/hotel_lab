use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Scott Dougal",
    email: "sd@hotmail.com",
    status: "Check in"
  },
  {
    name: "Jennifer Wardhaugh",
    email: "jw@gmail.com",
    status: "Check in"
  },
  {
    name: "Jimmy Brown",
    email: "brown@hotmail.com",
    status: "Check in"
  }
  
  

]);
