import TextField from "@mui/material/TextField";
// import InputLabel from "@mui/material/InputLabel";
import React from "react";

export default function Input(props) {
  const {
    name,
    type,
    InputLabelProps,
    label,
    multiline,
    rows,
    error = null,
    value,
    onChange,
  } = props;
  return (
    <TextField
      variant="outlined"
      multiline={multiline}
      rows={rows}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      InputLabelProps={InputLabelProps}
      {...(error && { error: true, helperText: error })}
    />
  );
}
