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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            sollicitudin tempor nunc, ut tristique odio interdum vitae.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Cras iaculis erat lectus, non consequat
            nunc convallis eget. Nam quis magna ut nulla luctus hendrerit.
            Nullam fermentum nulla eget lacus congue, vitae suscipit sapien
            sollicitudin. Praesent dapibus sed eros et congue. Praesent cursus
            ultrices nunc, sed ultricies turpis dictum eget.
          </Description>
        </TextWrapper>
      </HeadlineContainer>
    </div>
  );
};

export default index;
