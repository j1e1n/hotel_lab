import {useState, useEffect} from 'react';
import BookingForm from '../components/BookingForm'
import BookingList from '../components/BookingList'
// import BookingDetail from "../components/BookingDetail"
import BookingService from '../services/BookingService';


const HotelContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        BookingService.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const onFormSubmit = (submittedForm) => {
        // submittedForm.id = Date.now();
        const updatedBookingList = [...bookings, submittedForm];
        setBookings(updatedBookingList);
    }

    const handleDelete = (idToDelete) => {
        console.log(idToDelete)
        BookingService.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }



    return(
        <>
        <BookingForm onFormSubmit={(booking) => onFormSubmit(booking)}/>
        <BookingList bookings={bookings} handleDelete={handleDelete}/>
        </>
    )
}






export default HotelContainer;