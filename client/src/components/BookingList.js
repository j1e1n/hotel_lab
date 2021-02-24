import React from 'react';
import BookingDetail from './BookingDetail';

const BookingList = ({bookings, handleDelete}) => {



    const bookingListItems = bookings.map((booking, index) => {
        return (
        <>
        <BookingDetail booking={booking} handleDelete={handleDelete}></BookingDetail>
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