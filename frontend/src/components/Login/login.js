import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MdLockOutline } from "react-icons/md";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const { setAuth, auth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post("http://127.0.0.1:3000/auth/login", {
      email,
      password,
    });
    console.log(data);
    const authData = {
      token: data.data.token,
      user: data.data.user,
    };
    setAuth(authData);
    console.log("the context auth ddata is, ");
    console.log(auth);
    // console.log(data1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MdLockOutline />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

// import React, { useState } from "react";

// function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === "") {
//       return "Email is required.";
//     } else if (!emailRegex.test(email)) {
//       return "Please enter a valid email address.";
//     }
//     return "";
//   };

//   const validatePassword = (password) => {
//     if (password.trim() === "") {
//       return "Password is required.";
//     } else if (password.length < 8) {
//       return "Password must be at least 8 characters long.";
//     }
//     return "";
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const emailErrorMsg = validateEmail(email);
//     const passwordErrorMsg = validatePassword(password);

//     setEmailError(emailErrorMsg);
//     setPasswordError(passwordErrorMsg);

//     if (!emailErrorMsg && !passwordErrorMsg) {
//       console.log("Form submitted:", { email, password });
//     } else {
//       console.error("Validation errors:", { emailErrorMsg, passwordErrorMsg });
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <form noValidate onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="emailInput" className="form-label">
//             Email address
//           </label>
//           <input
//             type="email"
//             className={`form-control ${emailError ? "is-invalid" : ""}`}
//             id="emailInput"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {emailError && <div className="invalid-feedback">{emailError}</div>}
//         </div>
//         <div className="mb-3">
//           <label htmlFor="passwordInput" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className={`form-control ${passwordError ? "is-invalid" : ""}`}
//             id="passwordInput"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {passwordError && (
//             <div className="invalid-feedback">{passwordError}</div>
//           )}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
