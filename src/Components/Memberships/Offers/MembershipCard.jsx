import React from "react";
import siteData from "../../../../public/MembershipsAPI/Memberships.json";
/* Material UI  */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./cardSection.css"

function MembershipSection() {
  return (
    <div className="CardSection">
      <div className="membershipText">
        <h1>Our Memberships</h1>
        <p>Train hard. Stay strong.</p>
      </div>  
      <div className="cardsWrapper">
        {siteData.memberships.map((plan, index) => (
          <div className="MembershipCard" key={index}>
            <div className="UpperMembershipCard">
              <h3>{plan.title}</h3>
              <span className="price">{plan.price}</span>
            </div>

            <ul className="featuresList">
              {plan.features.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Button
              variant="contained"
              className="cardButton"
              startIcon={<WhatsAppIcon />}
              onClick={()=> {
                  window.open("https://wa.me/1234567890", "_blank")
                }
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Button>

          </div>
        ))}
      </div>
     </div>
  );
}

export default MembershipSection;

