import React from "react";
import {
  HeadlineContainer,
  Headline,
  Description,
  TextWrapper,
} from "./HeadlineElements";

const index = () => {
  return (
    <div>
      <HeadlineContainer>
        <TextWrapper>
          <Headline>Headline</Headline>
          <Description>
            We are SMV team of Three awesome Software Engineers. This is the
            first applciation of our team which is done under the course
            Distributed Enigeer. The stacktract application is created in order
            to centralize the organization of business as well as a user
            friendly interface is provided for the users to add items to cart
            and checkout at the end. !!!!!!!!!THIS IS JUST THE PROTOTYPE OF OUR
            CONCEPT THERE IS STILL MORE TO COME.!!!!!!!!
          </Description>
        </TextWrapper>
      </HeadlineContainer>
    </div>
  );
};

export default index;
