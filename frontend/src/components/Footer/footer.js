import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  MediaIcons,
  MediaWrap,
  Logo,
  Rights,
  SocialIcons,
  SocialIconLink,
  Message,
} from "./footerElements";

const footer = () => {
  return (
    <div>
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to="/about" activeStyle>
                  About Us
                </FooterLink>
                <FooterLink to="/events" activeStyle>
                  Events
                </FooterLink>
                <FooterLink to="/jobs" activeStyle>
                  Jobs
                </FooterLink>
                <FooterLink to="/accommodations" activeStyle>
                  Accommodations
                </FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Legal</FooterLinkTitle>
                <FooterLink to="/terms" activeStyle>
                  Terms
                </FooterLink>
                <FooterLink to="/policies" activeStyle>
                  Policies
                </FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                <FooterLink>Bytecode@gmail.com</FooterLink>
                <FooterLink>9876543210</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Follow Us</FooterLinkTitle>
                <SocialIcons>
                  <SocialIconLink
                    href="https://www.facebook.com/"
                    target="blank"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.instagram.com/"
                    target="blank"
                    aria-label="Facebook"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.youtube.com/"
                    target="blank"
                    aria-label="Facebook"
                  >
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink
                    href="https://www.linkedin.com"
                    target="blank"
                    aria-label="Facebook"
                  >
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <MediaIcons>
            <MediaWrap>
              <Logo>
                <img
                  src="/Images/Logo/logo_NoBG.png"
                  style={{ width: "200px" }}
                  alt="Logo"
                />
              </Logo>
              <Rights>
                Bytecode © {new Date().getFullYear()} All rights reserved.
              </Rights>
              <Message>Visit Again.</Message>
            </MediaWrap>
          </MediaIcons>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default footer;
