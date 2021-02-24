use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    Name: "Scott Dougal",
    Email: "sd@hotmail.com",
    Status: "Check in"
  },
  {
    Name: "Jennifer Wardhaugh",
    Email: "jw@gmail.com",
    Status: "Check in"
  },
  {
    Name: "Jimmy Brown",
    Email: "brown@hotmail.com",
    Status: "Check in"
  }
  
  

]);
