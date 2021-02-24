import React, { useState } from 'react';

const BookingForm = ({onFormSubmit}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleEmailChange = (evt) => {
        setEmail(evt.target.value);
    }

    const handleStatusChange = (evt) => {
        setStatus(evt.target.value);
    }


    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const nameToSubmit = name.trim();
        const emailToSubmit = email.trim();
        const statusToSubmit = status.trim();
        if (!nameToSubmit || !emailToSubmit || !statusToSubmit){
            return
        }

        onFormSubmit({
            name: nameToSubmit,
            email: emailToSubmit,
            status: statusToSubmit
        });

        setName("");
        setEmail("");
        setStatus("");
    }

    return(
        <>
          <div className="booking-form">
             <form onSubmit={handleFormSubmit}>
                <input
                type='text'
                placeholder="Guest Name"
                value={name}
                onChange={handleNameChange}
                />

                <input
                type='text'
                placeholder='Email Address'
                value={email}
                onChange={handleEmailChange}
                />
                <input
                type='text'
                placeholder='Status'
                value={status}
                onChange={handleStatusChange}
                />
                
                <input
                type='submit'
                value='Add Booking'
                />
              </form>
          </div>
        </>
    )
}

export default BookingForm;

