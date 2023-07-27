import React from "react";
import Navbar from "../../components/_App/Navbar";
import PageBanner from "../../components/Common/PageBanner";
import ContactInfo from "../../components/Contact/ContactInfo";
import Footer from "../../components/_App/Footer";
import AppointmentForm from "../../components/Appointment/AppointmentForm";

const Contact = () => {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Pain Management Services in Fort Worth"
        homePageUrl="/"
        homePageText="Home"
        activePageText="fort-worth"
        bgImage="/images/location.jpg"
      />

      <ContactInfo loc1={"1111 5th Ave,"} loc2={"Fort Worth, TX 76104"} />

      <AppointmentForm />

      <div className="map-area">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.243262101187!2d-97.34084202377528!3d32.732730686247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e71771d6b8841%3A0x2e5780731023b25a!2s1111%205th%20Ave%2C%20Fort%20Worth%2C%20TX%2076104%2C%20USA!5e0!3m2!1sen!2sil!4v1685525426032!5m2!1sen!2sil"
          height="550"
        ></iframe>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
