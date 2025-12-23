import React from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import CardSection from "../../Components/Memberships/Offers/MembershipCard.jsx";
import StaffSection from "../../Components/Memberships/Staff/MembershipStaff.jsx";
import PersonalTrainingSection from "../../Components/Memberships/Training/MembershipTraining.jsx";


export default function Memberships(){
  return(
    <>
      <Header/>
      <CardSection/>
      <StaffSection/>
      <PersonalTrainingSection/>
      <Footer/>
    </>
  )
}
