import React from "react";
import siteData from "../../../../public/MembershipsAPI/Memberships.json";
import Face1 from "../../../assets/Pictures/MembershipPictures/Face1.png";
import Face2 from "../../../assets/Pictures/MembershipPictures/Face2.png";
import Face3 from "../../../assets/Pictures/MembershipPictures/Face3.png";
import Face4 from "../../../assets/Pictures/MembershipPictures/Face4.png";
import CrewImage from "../../../assets/Pictures/MembershipPictures/Crew.jpg";
import "./crewSection.css"


const imageMap = {
  "Face1.png": Face1,
  "Face2.png": Face2,
  "Face3.png": Face3,
  "Face4.png": Face4
};

function CrewSection() {
  return (
    <div className="crewSection">
      <div className="crewWrapper">
        {siteData.staff.map((member, index) => (
          <div key={index} className="crewCard">
            <div className="crewImage">
              <img src={imageMap[member.image.split("/").pop()]} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="crewRole">{member.role}</p>
            <p className="crewDesc">{member.description}</p>
          </div>
        ))}
      </div>
      <div className="crewBigImage">
          <img src={CrewImage} alt="Gym Crew Image" />
      </div>
    </div>
  );
}

export default CrewSection;
