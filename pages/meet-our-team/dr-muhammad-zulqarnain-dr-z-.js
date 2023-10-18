import React from "react";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../../components/_App/Navbar"));

const PageBanner = dynamic(() => import("../../components/Common/PageBanner"));

const AppointmentForm = dynamic(() =>
  import("../../components/Appointment/AppointmentForm")
);

const Footer = dynamic(() => import("../../components/_App/Footer"));

const conditionsWeTreat = {
  heaging: "Conditions We Treat",
  treatment: [
    { url: "/conditions-we-treat/shoulder-pain", name: "Shoulder Pain" },
    { url: "/conditions-we-treat/sports-injury", name: "Sports Injury" },
    { url: "/conditions-we-treat/headaches", name: "Headaches" },
    { url: "/conditions-we-treat/back-pain", name: "Back Pain" },
    { url: "/conditions-we-treat/neck-pain", name: "Neck Pain" },
    { url: "/conditions-we-treat/knee-pain", name: "Knee Pain" },
    { url: "/conditions-we-treat/joint-pain", name: "Joint Pain" },
    { url: "/conditions-we-treat/leg-pain", name: "Leg Pain" },
  ],
};
const DoctorDetails = () => {
  return (
    <>
      <Head>
        <title>MUHAMMAD ZULQARNAIN, MD: Pain Management Physician</title>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_URL_DOMAIN}/meet-our-team/dr-muhammad-zulqarnain-dr-z-/`}
        />
        <meta
          name="description"
          content="Dr. Muhammad Zulqarnain is a pain management physician serving in Dallas and the surrounding communities. Schedule an appointment today."
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="initial-scale=1" name="viewport" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Navbar />

      <PageBanner
        pageTitle="MUHAMMAD ZULQARNAIN MD (DR. Z)"
        homePageUrl="/"
        homePageText="Home"
        activePageText="dr-muhammad-zulqarnain-dr-z-"
        bgImage="/images/doctor.webp"
      />

      <div className="doctor-details-area pt-5 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="doctor-details-item doctor-details-left">
                <img src="/images/doctors/doctor2.webp" alt="Doctor" />
                <div className="blog-details-item">
                  <div className="blog-details-category ps-3">
                    <h3>{conditionsWeTreat.heaging}</h3>
                    <ul>
                      {conditionsWeTreat.treatment.map((item, i) => {
                        return (
                          <li key={i}>
                            <Link href={item.url} rel="preload">
                              {item.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="doctor-details-item">
                <div className="doctor-details-right">
                  <div className="doctor-details-biography">
                    <h3>
                      <b>MUHAMMAD ZULQARNAIN MD (DR. Z)</b>
                    </h3>
                    <h4>(Pain Management Physician)</h4>
                  </div>
                  <div className="doctor-details-biography">
                    <h3>Biography</h3>

                    <p>
                      Dr. Muhammad Zulqarnain aka Dr. Z is a pain management
                      physician serving in Dallas,{" "}
                      <Link href="/contact-locations/richardson/" rel="preload">
                        Richardson
                      </Link>
                      ,{" "}
                      <Link
                        href="/contact-locations/north-richland-hills/"
                        rel="preload"
                      >
                        North Richland Hills
                      </Link>
                      ,{" "}
                      <Link href="/contact-locations/waxahachie/" rel="preload">
                        Waxahachie
                      </Link>
                      , Texas, and the surrounding communities.
                    </p>

                    <p>
                      Dr. Zulqarnain received his medical degree from King
                      Edward Medical University. He completed his internship in
                      general surgery and residency training in anesthesiology
                      at Boston Medical Center and fellowship in pain management
                      at the world renowned Texas Tech University Health
                      Sciences Center in Lubbock which is one of the most
                      competitive and prestigious centers for pain fellowship in
                      the country.
                    </p>

                    <p>
                      He is BOARD certified by American Board of Anesthesiology
                      and Sub-Specialty American Board in pain management He is
                      an expert in interventional pain procedures including
                      Epidurals, Nerve Blocks, Radio-frequency Ablation,{" "}
                      <Link href="/treatments/joint-injections/" rel="preload">
                        Joint Injections
                      </Link>
                      , Kyphoplasty, Discectomy,{" "}
                      <Link
                        href="/treatments/spinal-cord-stimulation/"
                        rel="preload"
                      >
                        Spinal cord stimulator
                      </Link>{" "}
                      trial, and implantation and Intrathecal pumps,{" "}
                      <Link
                        href="/treatments/si-joint-injection/"
                        rel="preload"
                      >
                        SI joint Injection
                      </Link>
                      . He loves reading and traveling and learning state of the
                      art cutting edge technology in pain management.
                    </p>
                    <p></p>
                  </div>
                  <div className="doctor-details-contact">
                    <h3>Contact info</h3>
                    <ul>
                      <li style={{ marginLeft: "-5px" }}>
                        <i
                          className="icofont-ui-call"
                          style={{ fontSize: "30px" }}
                        ></i>

                        <a href="tel:+14695624188">( +1 ) 469-562-4188</a>
                      </li>
                      <li>
                        <i
                          className="icofont-ui-message"
                          style={{ fontSize: "25px" }}
                        ></i>
                        <a href="mailto:admin@mypremierpain.com">
                          admin@mypremierpain.com
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="doctor-details-biography"></div>
                  <div className="doctor-details-work">
                    <h3>Working hours</h3>
                    <div className="appointment-item-two-right">
                      <div className="appointment-item-content">
                        <ul>
                          <li>
                            Monday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Tuesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Wednesday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Thursday <span>9:00 AM - 5:00 PM</span>
                          </li>
                          <li>
                            Friday <span>9:00 AM - 5:00 PM</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-5">
        <AppointmentForm />
      </div>

      <Footer />
    </>
  );
};

export default DoctorDetails;
