const baseURL = 'http://localhost:5000/api/bookings';

const BookingService = {
    getBookings() {
        return fetch(baseURL)
        .then(res => res.json())
    },




    postBookings(payload) {
        return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
        .then(res => res.json())
  },


    deleteBooking(id) {
       return fetch(baseURL + id, {
       method: "DELETE",
    });
  
  }
}
export default BookingService;

