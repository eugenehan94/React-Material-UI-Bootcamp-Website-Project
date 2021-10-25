import React from "react";

/*React component imports */
import Navbar from "../components/Navbar";
import AdmissionHero from "../components/AdmissionHero";
import AdmissionWeLookFor from "../components/AdmissionWeLookFor";
import AdmissionProcess from "../components/AdmissionProcess";
import AdmissionAlumni from "../components/AdmissionAlumni";

import Footer from "../components/Footer";
const Admission = () => {
  return (
    <div>
      <Navbar />
      <AdmissionHero />
      <AdmissionWeLookFor />
      <AdmissionProcess />
      <AdmissionAlumni />
      <Footer />
    </div>
  );
};

export default Admission;
