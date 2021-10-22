import React from "react";

/*React component imports */
import Navbar from "../components/Navbar";
import AdmissionHero from "../components/AdmissionHero";
import AdmissionWeLookFor from "../components/AdmissionWeLookFor";
const Admission = () => {
  return (
    <div>
      <Navbar />
      <AdmissionHero />
      <AdmissionWeLookFor />
    </div>
  );
};

export default Admission;
