"use client";
import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import validationSchema from "../../utils/login-validation";
import CustomSnackBar from "../../components/Toaster";
import Loader from "../../components/Loader";
import { Formik, Form } from "formik";
import Copyright from "../../components/CopyRigths";
import Cookies from "js-cookie";

export default function SignInSide() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Network Error");
  const URL = process.env.NEXT_PUBLIC_INTERNAL_API;

  const handleSubmit = async (values: any) => {
    setLoading(true);
    await axios
      .post(`${URL}/api/login`, values)
      .then((response) => {
        setLoading(false);
        if (response.data.token) {
          // Set tokens in cookies
          Cookies.set("token", response.data.token);
          Cookies.set("externalToken", response.data.externalApiToken);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        setMessage(error.response.data.error);
        setLoading(false);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      });
  };

  const handleLoading = (error: boolean) => {
    if (!error) {
      setLoading(true);
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f7f7f4",
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#BCB90E" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{
            color: "#272343",
            fontWeight: 500,
          }}
        >
          Sign in
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
            // resetForm();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={values.email}
                  autoComplete="email"
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  value={values.password}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Button
                  type="submit"
                  fullWidth
                  onClick={() =>
                    handleLoading(
                      Boolean(errors.email) || Boolean(errors.password)
                    )
                  }
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    backgroundColor: "#BCA60E",
                    "&:hover": {
                      backgroundColor: "#BCA60E",
                    },
                  }}
                >
                  {loading ? <Loader size={25} color="white" /> : "Sign In"}
                </Button>
                <Grid container>
                  <Grid item xs>
                    {/* Optionally add a 'Forgot password?' link here */}
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 5 }}>
                  {/* Replace this with your copyright component */}
                  <Copyright />
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <CustomSnackBar openSnackBar={open} message={message} type="error" />
    </Grid>
  );
}
