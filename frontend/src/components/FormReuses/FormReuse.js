import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
// import { useTheme } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/system";

export function FormReuse(initialFieldValues) {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const reset = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    handleInputChange,
    errors,
    setErrors,
    reset,
  };
}

const theme = createTheme({
  spacing: 4,
});

//theme.spacing(2);

const modalStyles = {
  root: {
    // display: "flex",
    // flexDirection: "column",
    // marginTop: "20px",
    // marginBottom: "15px",
    color: "red",
    ".MuiFormControl-root": {
      width: "100%",
      background: "blue",
      margin: theme.spacing(1),
    },
    "& .MuiButton-contained": {
      margin: theme.spacing(1),
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "25px",
      borderColor: "black ",
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "200px",
    },
  },
};

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFormControl-root": {
//       width: "100%",
//       //   height: "500px",
//       margin: theme.spacing(1),
//     },
//     "& .MuiButton-contained": {
//       margin: theme.spacing(1),
//     },
//     "& .MuiOutlinedInput-notchedOutline": {
//       borderWidth: "2px",
//       borderColor: "black ",
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

export function Form(props) {
  // const classes = useStyles();
  const { children, ...other } = props;
  return (
    <form sx={modalStyles.root} autoComplete="off" {...other}>
      {props.children}
    </form>
  );
}
