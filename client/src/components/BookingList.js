import React from 'react';
// import BookingDetail from './BookingDetail';

const BookingList = ({bookings, handleDelete}) => {

    console.log(bookings)
    const bookingListItems = bookings.map((booking, index) => {
        return (
        <>
        <li key={index}>Name:{booking.name},  E-mail: {booking.email},  Status: {booking.status}</li>
        <button onClick={handleDelete}>Delete</button>
        </>
        )
    })
    console.log(bookingListItems)
    return(
        <>
        <div className="booking-list">
        <h2>Booking List</h2>
            <ul>
                {bookingListItems}
            </ul>
            
        </div>
        </>
        
    )
};


export default BookingList;