import React, { useState } from "react";
import Input from "../FormReuses/Input";
import Button from "@mui/material/Button";
import {
  Headline,
  FormWrapper,
  RowCol1,
  RowCol2,
  RowCol4,
  Column1,
  Column2,
  Column3,
  Column4,
  RowCol6,
} from "../ContactUs/ContactElements";
import { FormReuse, Form } from "../FormReuses/FormReuse";
import axios from "axios";

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobileNo: "",
  message: "",
  roomType: "",
};

export default function CreateEvent() {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    axios

      .get("https://localhost:44332/api/Auth/user", { withCredentials: true })
      .then((response) => {
        setUser(response.data.userID);
        console.log(response.data.userID);
      });
  }, []);

  const validation = () => {
    let temp = {};
    if (!values.roomType) {
      temp.roomType = "Name required.";
    } else if (!/^[A-Z a-z]+$/.test(values.roomType)) {
      temp.roomType = "Alphabetical letters only.";
    }
    if (!values.rent) {
      temp.rent = "Rent required.";
    } else if (!/^[0-9]+$/.test(values.rent)) {
      temp.rent = "Numbers Only.";
    }
    if (!values.moveIn) {
      temp.moveIn = "Status required.";
    } else if (!/^[A-Z a-z]+$/.test(values.moveIn)) {
      temp.moveIn = "Alphabetical letters only.";
    }
    if (!values.street) {
      temp.street = "Street required.";
    }
    if (!values.city) {
      temp.city = "City required.";
    }
    if (!values.state) {
      temp.state = "State required.";
    }
    if (!values.houseNumber) {
      temp.houseNumber = "House Number required.";
    } else if (!/^[0-9]+$/.test(values.houseNumber)) {
      temp.houseNumber = "Numbers Only.";
    }
    if (!values.space) {
      temp.space = "Space required.";
    }
    if (!values.amenities) {
      temp.amenities = "Amenities required.";
    }
    if (!values.roommateRules) {
      temp.roommateRules = "Roommate Rules required.";
    }
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, reset } =
    FormReuse(initialFieldValues);

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  var bannerPath = "\\Images\\AccommodationImages\\" + fileName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      console.log(file);
      console.log(fileName);

      var bannerPath = "\\Images\\AccommodationImages\\" + fileName;

      console.log(bannerPath);

      const formData = new FormData();
      formData.append("roomType", values.roomType);
      formData.append("rent", values.rent);
      formData.append("moveIn", values.moveIn);
      formData.append("state", values.state);
      formData.append("city", values.city);
      formData.append("street", values.street);
      formData.append("houseNumber", values.houseNumber);
      formData.append("space", values.space);
      formData.append("amenities", values.amenities);
      formData.append("roommateRules", values.roommateRules);
      formData.append("userID", user);
      formData.append("formFile", file);
      formData.append("fileName", fileName);

      console.log(values.rent);

      await axios
        .post(
          "https://localhost:44332/api/Accommodation/SaveAccommodations",
          formData
        )
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const [value, setValue] = React.useState(null);

  return (
    <div className="SizeDiv">
      {/* <Main> */}
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <Headline>Accommodation Registration Form</Headline>
          <RowCol1>
            <Column1>
              <Input
                label="Room Type"
                name="roomType"
                value={values.roomType}
                onChange={handleInputChange}
                error={errors.roomType}
              />
            </Column1>
          </RowCol1>
          <RowCol2>
            <Column1>
              <Input
                label="Rent"
                name="rent"
                value={values.rent}
                onChange={handleInputChange}
                error={errors.rent}
              />
            </Column1>
            <Column2>
              <Input
                label="Move In Status"
                name="moveIn"
                value={values.moveIn}
                onChange={handleInputChange}
                error={errors.moveIn}
              />
            </Column2>
          </RowCol2>
          <RowCol4>
            <Column1>
              <Input
                label="State"
                name="state"
                value={values.state}
                onChange={handleInputChange}
                error={errors.state}
              />
            </Column1>
            <Column2>
              <Input
                label="City"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                error={errors.city}
              />
            </Column2>
            <Column3>
              <Input
                label="Street"
                name="street"
                value={values.street}
                onChange={handleInputChange}
                error={errors.street}
              />
            </Column3>
            <Column4>
              <Input
                label="House Number"
                name="houseNumber"
                value={values.houseNumber}
                onChange={handleInputChange}
                error={errors.houseNumber}
              />
            </Column4>
          </RowCol4>
          <RowCol1>
            <Column1>
              <Input
                label="Talk about the Space"
                multiline={true}
                name="space"
                rows={5}
                value={values.space}
                onChange={handleInputChange}
                error={errors.space}
              />
            </Column1>
          </RowCol1>
          <RowCol1>
            <Column1>
              <Input
                label="Amenities"
                multiline={true}
                name="amenities"
                rows={5}
                value={values.amenities}
                onChange={handleInputChange}
                error={errors.amenities}
              />
            </Column1>
          </RowCol1>
          <RowCol1>
            <Column1>
              <Input
                label="Roommate Rules"
                multiline={true}
                name="roommateRules"
                rows={5}
                value={values.roommateRules}
                onChange={handleInputChange}
                error={errors.roommateRules}
              />
            </Column1>
          </RowCol1>
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={saveFile} />
          </Button>
          <RowCol6>
            <Column1>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                type="submit"
              >
                Submit
              </Button>
            </Column1>
            <Column2>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                type="reset"
                onClick={reset}
              >
                Reset
              </Button>
            </Column2>
          </RowCol6>
        </FormWrapper>
      </Form>
    </div>
  );
}
