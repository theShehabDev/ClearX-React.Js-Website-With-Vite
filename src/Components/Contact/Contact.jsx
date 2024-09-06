import React, { useState, useEffect } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import email_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = useState("");
    const [services, setServices] = useState({
        'residential-exterior': 0,
        'residential-interior': 0,
        'commercial': 0,
        'gutter': 0,
        'hardstain': 0
    });
    const [price, setPrice] = useState(0);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [messageError, setMessageError] = useState('');

    useEffect(() => {
        calculatePrice();
    }, [services]);

    const calculatePrice = () => {
        let newPrice = 0;
        
        newPrice += services['residential-exterior'] * 9;
        newPrice += services['residential-interior'] * 8;
        newPrice += services['commercial'] * 12;
        newPrice += services['hardstain'] * 10;
        
        if (services['gutter'] > 0) {
            newPrice += 100;
        }

        setPrice(newPrice);
    };

    const handleServiceChange = (service, value) => {
        const count = value === '' ? '' : parseInt(value) || 0;
        setServices(prev => ({
            ...prev,
            [service]: count
        }));
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        if (value.length <= 10) {
            e.target.value = value;
            setPhoneError('');
        } else {
            setPhoneError('Please enter exactly 10 digits');
        }
    };

    const handleNameChange = (e, setError) => {
        const value = e.target.value;
        if (/^[a-zA-Z]*$/.test(value)) {
            setError('');
        } else {
            setError('Please enter only letters');
        }
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        if (value.length <= 500) {
            setMessageError('');
        } else {
            setMessageError('Message should not exceed 500 characters');
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (firstNameError || lastNameError || phoneError || messageError) {
            setResult("Please correct the errors before submitting.");
            return;
        }
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "YOUR-ACCESS-KEY");
        formData.append("estimatedPrice", price.toFixed(2));

        // Append selected services and their counts
        Object.entries(services).forEach(([service, count]) => {
            if (count > 0) {
                formData.append(`service_${service}`, count);
            }
        });

        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (data.success) {
          setResult("Email Sent Successfully");
          event.target.reset();
          // Reset services state
          setServices({
            'residential-exterior': 0,
            'residential-interior': 0,
            'commercial': 0,
            'gutter': 0,
            'hardstain': 0
          });
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
    };



  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Contact Us Today to Schedule Your Cleaning <img src={msg_icon} alt="" /></h3>
            <p>At ClearX, we make it easy for you to schedule your window cleaning services. 
                Whether you need Residential Window Cleaning, Commercial Window Cleaning, Gutter Cleaning, or Hardstain Water Removal, we've got you covered.
                </p>
                <ul>
                    <li><img src={email_icon} alt="" />clearexwindows@gmail.com </li>
                    <li><img src={phone_icon} alt="" />801-931-1001 & 385-315-1704 </li>
                    <li><img src={location_icon} alt="" />Utah, USA</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your First Name</label>
                <div className="input-container">
                    <input 
                        type="text" 
                        name='firstName' 
                        placeholder='Please Enter Your First Name' 
                        onChange={(e) => handleNameChange(e, setFirstNameError)}
                        pattern="[A-Za-z]+"
                        required
                    />
                    {firstNameError && <span className="error-bubble">{firstNameError}</span>}
                </div>
                <label>Your Last Name</label>
                <div className="input-container">
                    <input 
                        type="text" 
                        name='lastName' 
                        placeholder='Please Enter Your Last Name' 
                        onChange={(e) => handleNameChange(e, setLastNameError)}
                        pattern="[A-Za-z]+"
                        required
                    />
                    {lastNameError && <span className="error-bubble">{lastNameError}</span>}
                </div>
                <label>Phone Number</label>
                <div className="input-container">
                    <input 
                        type="tel" 
                        name='phone' 
                        placeholder='Please Enter Your Mobile Number (10 digits)' 
                        pattern="[0-9]{10}"
                        onInput={handlePhoneChange}
                        required
                    />
                    {phoneError && <span className="error-bubble">{phoneError}</span>}
                </div>
                <label>Select Services and Window Count</label>
                <div className="service-inputs">
                    <div className="service-input">
                        <label>Residential Exterior ($9/window)</label>
                        <input 
                            type="number" 
                            min="0" 
                            max="50" 
                            value={services['residential-exterior']}
                            onChange={(e) => handleServiceChange('residential-exterior', e.target.value)}
                        />
                    </div>
                    <div className="service-input">
                        <label>Residential Interior ($8/window)</label>
                        <input 
                            type="number" 
                            min="0" 
                            max="50" 
                            value={services['residential-interior']}
                            onChange={(e) => handleServiceChange('residential-interior', e.target.value)}
                        />
                    </div>
                    <div className="service-input">
                        <label>Commercial ($12/window)</label>
                        <input 
                            type="number" 
                            min="0" 
                            max="50" 
                            value={services['commercial']}
                            onChange={(e) => handleServiceChange('commercial', e.target.value)}
                        />
                    </div>
                    <div className="service-input">
                        <label>Hardstain Water Removal ($10/window)</label>
                        <input 
                            type="number" 
                            min="0" 
                            max="50" 
                            value={services['hardstain']}
                            onChange={(e) => handleServiceChange('hardstain', e.target.value)}
                        />
                    </div>
                    <div className="service-input">
                        <label>Gutter Cleaning (Flat $100 fee)</label>
                        <input 
                            type="checkbox" 
                            checked={services['gutter'] > 0} 
                            onChange={(e) => handleServiceChange('gutter', e.target.checked ? 1 : 0)}
                        />
                    </div>
                </div>
                <label>Estimated Price</label>
                <input type="text" value={`$${price.toFixed(2)}`} readOnly />
                <label>Write Your Message Here</label>
                <div className="input-container">
                    <textarea name="message" rows="6" placeholder='Enter Your Message' onChange={handleMessageChange} maxLength={500} required></textarea>
                    {messageError && <span className="error-bubble">{messageError}</span>}
                </div>
                <button type='submit' className='btn dark-btn'>Submit <img src={white_arrow} alt="" /></button>
        
            </form>
            <span>{result}</span>
        </div>


    </div>
  )
}

export default Contact