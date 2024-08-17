"use client";
import React, { useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Field } from "formik";
import CustomSnackBar from "../../components/Toaster";
import signupSchema from "../../utils/signup-validation";
import Loader from "../../components/Loader";
import Copyright from "../../components/CopyRigths";
import Cookies from "js-cookie";

const defaultTheme = createTheme();

export default function SignUp() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Network Error");
  const URL = process.env.NEXT_PUBLIC_INTERNAL_API;

  const handleSubmit = async (values: any) => {
    axios
      .post(`${URL}/api/signup`, values)
      .then((response) => {
        setLoading(false);
        if (response.data.token) {
          Cookies.set("token", response.data.token);
          Cookies.set("externalToken", response.data.externalApiToken);
          window.location.href = "/login";
        }
      })
      .catch((error: any) => {
        setLoading(false);
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, 2000);
        setMessage(error.response.data.error);
      });
  };
  const handleLoading = (error: boolean) => {
    if (!error) {
      setLoading(true);
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        sx={{
          backgroundColor: "#f7f7f4",
        }}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
          }}
        >
          {({ errors, touched, values }) => (
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
                Sign up
              </Typography>
              <Form className="mt-6" noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      value={values.firstName}
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      error={errors.firstName && touched.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      value={values.lastName}
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      error={errors.lastName && touched.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      value={values.email}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={errors.email && touched.email}
                      helperText={touched.email && errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      required
                      fullWidth
                      value={values.password}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      error={errors.password && touched.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  onClick={() =>
                    handleLoading(
                      Boolean(errors.email) ||
                        Boolean(errors.password) ||
                        Boolean(errors.firstName) ||
                        Boolean(errors.lastName)
                    )
                  }
                  fullWidth
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
                  {loading ? <Loader size={25} color="white" /> : "Sign Up"}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            </Box>
          )}
        </Formik>
        <Copyright sx={{ mt: 5 }} />
        <CustomSnackBar openSnackBar={open} message={message} type="error" />
      </Container>
    </ThemeProvider>
  );
}
