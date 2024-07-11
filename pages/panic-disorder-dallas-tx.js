import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import data from "../utils/tmsConditionsWeTreat.json";

const Navbar = dynamic(() => import("../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../components/Common/PageBanner"));

const AppointmentFormSideBar = dynamic(() =>
  import("../components/Appointment/AppointmentFormSideBar")
);

const PanicDisorderTreatmentDetails = dynamic(() =>
  import(
    "../components/TmsHome/TmsDetailContent/panic-disorder-treatment-details"
  )
);

const Footer = dynamic(() => import("../components/_App/Footer"));

const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>Panic Disorder Therapist Near Me in Dallas, TX</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/panic-disorder-dallas-tx/`}
        />
        <meta
          name="description"
          content="Panic disorder treatment in Dallas gives you peace of mind. Premier Pain Centers caring team uses cutting-edge therapy to deliver fast, long-term comfort."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="Panic Disorder Treatment in Dallas, TX"
        homePageUrl="/"
        homePageText="Home"
        activePageText="panic-disorder-treatment"
        bgImage="/images/tms-home/tms-banner.png"
      />

      <div className="doctor-details-area pt-4 pb-70">
        <div className="container-fluid p-lg-5">
          <div className="row">
            <div className="col-lg-4">
              <AppointmentFormSideBar />
              <div className="blog-details-item">
                <div className="blog-details-category ps-3">
                  <h3>Conditions We Treat</h3>
                  <ul>
                    {data.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link href={item.href} rel="preload">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <PanicDisorderTreatmentDetails />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
