import React from 'react';

const BookingDetail = ({booking, handleDelete}) => {

    const handleDeleteBooking = () => {
        console.log("handleDeleteBooking called")
        handleDelete(booking._id)
    }

    return(
        <>
        <div className="booking-detail">
        <p>{booking.name}</p>
        <p>{booking.email}</p>
        <p>{booking.status}</p>
        <button onClick={handleDeleteBooking}>Delete</button>
        </div>
        </>
    )
};


export default BookingDetail;