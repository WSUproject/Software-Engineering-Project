import React from "react";
import Input from "../FormReuses/Input";
import Button from "@mui/material/Button";
import emailjs from "emailjs-com";
import { useRef } from "react";
import {
  Headline,
  FormWrapper,
  RowCol1,
  RowCol2,
  Column1,
  Column2,
  Icon,
  Item,
  Text,
  Message,
  SizeDiv,
} from "./ContactElements";
import { FormReuse, Form } from "../FormReuses/FormReuse";
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobileNo: "",
  message: "",
};

export default function Contact() {
  <h1>Test11</h1>;

  const validation = () => {
    let temp = {};
    if (!values.fullName.trim()) {
      temp.fullName = "Name required.";
    } else if (!/^[A-Z a-z]+$/.test(values.fullName)) {
      temp.fullName = "Alphabetical letters only.";
    }

    // temp.fullName = values.fullName?"":"This field is required."
    if (!values.email) {
      temp.email = "Email Required.";
    } else if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,4}$/.test(values.email)
    ) {
      temp.email = "Invalid Email address.";
    }
    //temp.email = (/$|.+@.+..+/).test(values.email)?"":"Email is not valid."
    if (!values.mobileNo) {
      temp.mobileNo = "Mobile number required.";
    } else if (!/^[0-9]{10,}$/.test(values.mobileNo)) {
      temp.mobileNo = "Invalid mobile Number.";
    }

    if (!values.message) {
      temp.message = "Field required.";
    }

    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, reset } =
    FormReuse(initialFieldValues);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (validation()) {
      emailjs
        .sendForm(
          "service_7chho0n",
          "template_ms7kwp8",
          form.current,
          "qolgHrZQ-8i6FyM7v"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("SUCCESS!");
          },
          (error) => {
            console.log(error.text);
            alert("FAILED...", error);
          }
        );
    }
  };

  return (
    <SizeDiv>
      {/* <Main> */}
      <form ref={form} onSubmit={sendEmail}>
        <FormWrapper>
          <Headline>Contact Us</Headline>
          <RowCol2>
            <Column1 className="formColumn">
              <RowCol1 className="formRow">
                <Input
                  label="Full Name"
                  name="fullName"
                  value={values.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                />
              </RowCol1>
              <RowCol1 className="formRow">
                <Input
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  error={errors.email}
                />
              </RowCol1>
              <RowCol1 className="formRow">
                <Input
                  label="Mobile"
                  name="mobileNo"
                  value={values.mobileNo}
                  onChange={handleInputChange}
                  error={errors.mobileNo}
                />
              </RowCol1>
              <RowCol1 className="formRow">
                <Input
                  label="Message"
                  multiline={true}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleInputChange}
                  error={errors.message}
                />
              </RowCol1>
              <RowCol1 className="formRow">
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  type="submit"
                >
                  Submit
                </Button>
              </RowCol1>
              <RowCol1 className="formRow">
                <Button
                  // sx = {mt: 1rem;}
                  variant="contained"
                  size="large"
                  color="inherit"
                  type="reset"
                  onClick={reset}
                >
                  Reset
                </Button>
              </RowCol1>
            </Column1>

            <Column2>
              <Item>
                <Icon>
                  <FaLocationArrow fontSize="large" />
                </Icon>
                <Text>Fairborn, Ohio</Text>
              </Item>
              <Item>
                <Icon>
                  <FaPhone fontSize="large" />
                </Icon>
                <Text>9876543210</Text>
              </Item>
              <Item>
                <Icon>
                  <FaMailchimp fontSize="large" />
                </Icon>
                <Text>bytecodevelocity0@gmail.com</Text>
              </Item>
              <Message>
                I hope you found something that piqued your interest here. We
                would be very happy yo answer any questions. Do check back for
                future updates.
              </Message>
            </Column2>
          </RowCol2>
        </FormWrapper>
      </form>
      {/* </Main> */}
    </SizeDiv>
  );
}
