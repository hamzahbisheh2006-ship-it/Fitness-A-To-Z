import siteData from "../../../containers/Memberships/Memberships.json";
import Coach1 from "../../../assets/Pictures/MembershipPictures/coach1.png"
import Coach2 from "../../../assets/Pictures/MembershipPictures/coach2.png"


import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Stack from '@mui/material/Stack';
import "./trainingSection.css"

const imageMap = {
  "Coach1.png": Coach1,
  "Coach2.png": Coach2
};

function PersonalTrainingSection() {
  return (
    <section className="personalTrainingSection">
      <div className="personalTrainingHeader">
        <h2>Personal Training</h2>
        <p>Train with elite coaches tailored to your goals</p>
      </div>

      <div className="personalTrainingCards">
        {siteData.personalTraining.map((coach, index) => (
          <div key={index} className="personalTrainingCard">
            <div className="personalTrainingImage">
              <img
                src={imageMap[coach.image] || Coach1}
                alt={coach.name}
              />
            </div>

            <div className="coachInfo">
              <h3>{coach.name}</h3>
              <span className="coachRole">{coach.role}</span>

              <ul>
                <li>{coach.experience}</li>
                <li>{coach.specialty}</li>
              </ul>

              <p>{coach.description}</p>

              <Button 
                variant="outlined"
                className="coachButton"
                startIcon={<WhatsAppIcon />}
                href={coach.phone ? `https://wa.me/${coach.phone.replace(/\D/g, "")}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                >
                Contact
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PersonalTrainingSection;
