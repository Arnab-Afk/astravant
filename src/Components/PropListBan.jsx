import React, { useState, useEffect } from "react";
import "./stylecon.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const PropListBan = () => {
  const [show, setShow] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [propertyLocation, setPropertyLocation] = useState('');
  const [propertyAcres, setPropertyAcres] = useState('');
  const [numberOfBHK, setNumberOfBHK] = useState('');
  const [googleMapsLink, setGoogleMapsLink] = useState('');
  const [expectedSaleAndRent, setExpectedSaleAndRent] = useState('');
  const [description, setDescription] = useState('');
  const [parking, setParking] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = {
      firstName,
      lastName,
      email,
      propertyLocation,
      propertyAcres,
      numberOfBHK,
      googleMapsLink,
      expectedSaleAndRent,
      description,
      parking,
    };
    try {
      const response = await fetch('https://nodemail-4m16.onrender.com/proplistban', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setSubmitted(true);
      } else {
        alert('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPropertyLocation('');
    setPropertyAcres('');
    setNumberOfBHK('');
    setGoogleMapsLink('');
    setExpectedSaleAndRent('');
    setDescription('');
    setParking('');
    setSubmitted(false);
  };

  return (
    <div className="relative bg-[#000000] text-white p-4 sm:p-8 mt-1 mx-auto flex flex-col w-full min-h-screen">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('proplistban.png')" }} ></div>
      <div className="relative z-10">
        {show && (
          <div className="mt-14 text-center lg:text-left text-4xl lg:text-7xl font-medio">
            <p>Want your property to get</p>
            <p>listed by us?</p>
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:pt-24 pt-10 gap-10 lg:gap-56">
          <div className="flex flex-col gap-4 text-xl lg:text-3xl text-center lg:text-left">
            <p>Just fill up the form and sit back and relax.</p>
            <p>We will be in touch with you shortly.</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="First Name" />
              <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} className="w-full p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Last Name" />
            </div>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Email Address" />
            <input type="text" value={propertyLocation} onChange={(event) => setPropertyLocation(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Property Location" />
            <input type="text" value={propertyAcres} onChange={(event) => setPropertyAcres(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Property Acres" />
            <input type="text" value={numberOfBHK} onChange={(event) => setNumberOfBHK(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Number of BHK" />
            <input type="text" value={googleMapsLink} onChange={(event) => setGoogleMapsLink(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Google Maps Link" />
            <input type="text" value={expectedSaleAndRent} onChange={(event) => setExpectedSaleAndRent(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Expected Sale and Rent" />
            <textarea value={description} onChange={(event) => setDescription(event.target.value)} name="" id="" rows="8" placeholder="Description" className="p-3 outline-none border-2 text-white border-white bg-transparent resize-none placeholder-white" ></textarea>
            <input type="text" value={parking} onChange={(event) => setParking(event.target.value)} className="p-3 outline-none border-2 border-white bg-transparent placeholder-white" placeholder="Parking" />
            <div className="flex gap-4">
              <button
                className={`border-2 border-[#E79700] p-3 w-full sm:w-32 font-semibold ${submitted ? 'opacity-50 cursor-not-allowed' : ''}`}
                type='submit'
                onClick={handleSubmit}
                disabled={loading || submitted} 
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <ClipLoader color="#ffffff" size={24} /> {/* Loading animation */}
                  </div>
                ) : (
                  submitted ? "Submitted" : "Submit"
                )}
              </button>
              {submitted && (
                <button
                  className="border-2 border-[#E79700]  w-full sm:w-32 font-semibold"
                  onClick={resetForm}
                >
                  Submit Another Response
                </button>
                )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropListBan;
