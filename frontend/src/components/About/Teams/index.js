import React from "react";
import icon1 from "../Images/rohan.jpg";
import icon2 from "../Images/dummyProfile.svg";
import icon3 from "../Images/dummyProfile.svg";
import icon4 from "../Images/dummyProfile.svg";
import {
  TeamsContainer,
  TeamsH1,
  TeamsWrapper,
  TeamsCard,
  TeamsIcon,
  TeamsH2,
  TeamsP,
} from "./TeamElements";

const Teams = () => {
  return (
    <TeamsContainer>
      <TeamsH1>Our Team</TeamsH1>
      <TeamsWrapper>
        <TeamsCard>
          <TeamsIcon src={icon1} />
          <TeamsH2>Rohan Rajbhandari</TeamsH2>
          <TeamsP>Something about yourself.</TeamsP>
        </TeamsCard>
        <TeamsCard>
          <TeamsIcon src={icon2} />
          <TeamsH2>Saurav Sitoula</TeamsH2>
          <TeamsP>Something about yourself.</TeamsP>
        </TeamsCard>
        <TeamsCard>
          <TeamsIcon src={icon3} />
          <TeamsH2>Aashik Dev Bhattarai</TeamsH2>
          <TeamsP>Something about yourself.</TeamsP>
        </TeamsCard>
        <TeamsCard>
          <TeamsIcon src={icon4} />
          <TeamsH2>Chris Young</TeamsH2>
          <TeamsP>Something about yourself.</TeamsP>
        </TeamsCard>
      </TeamsWrapper>
    </TeamsContainer>
  );
};

export default Teams;
