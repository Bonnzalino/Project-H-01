import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Hidden } from "@mui/material";
import Layout from './Navbar/Layout'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Everlastings
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const btnstyles = {
  backgroundColor: "#ef4b3f", // replace with your desired color
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
};

export default function SignInSide() {
  
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const handleSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("*Your email is Required"),
    password: Yup.string().required("*Password is Required"),
  });

  return (
    <Layout>
    <ThemeProvider theme={theme}>
      <Grid className="page-box" container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={8}
          sx={{
            backgroundImage:
              "url(https://images-ext-2.discordapp.net/external/bT6V0jwFFVR_6YUYExqatSt6wCGOIurJpxANr26SGkM/%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1770%26q%3D80/https/images.unsplash.com/photo-1477332552946-cfb384aeaf1c?width=1620&height=1080)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <img src="./src/images/logot.png" width={40} />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            {/* <Box
              component="form"
              noValidate
              autocomplete="off"
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            > */}
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  {console.log(props)}
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={props.isSubmitting}
                    sx={{ mt: 3, mb: 2 }}
                    style={btnstyles}
                  >
                    {props.isSubmitting ? "Loading" : "Sign In"}
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
          {/* </Box> */}
        </Grid>
        <Grid
          item
          xs={false}
          sm={false}
          md={8}
          sx={{
            position: "absolute",
            color: "#ffffff",
            textShadow: "1px 1px #000000",
            display: { xs: "none", sm: "block" },
            backgroundColor: "rgba(210, 210, 210, 0.3)",
            backdropFilter: "blur(1px)",
            padding: "15px",
            width:"50%",
            height:"auto",
            top: '25%'
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginBottom: "10px", 
            fontSize: {sm:"2.5rem", md:"3.55rem", lg:"5rem"} , 
            fontWeight: 900,
            textAlign: "left",
            width: "100%",
             }}
          >
            Stay Active
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginBottom: "10px", 
            fontSize: {sm:"2.5rem", md:"3.55rem", lg:"5rem"} ,
            fontWeight: 900, 
            textAlign: "left",
            width: "100%",}}
          >
            Stay Independent
          </Typography>
          <Typography
            variant="h2"
            sx={{ marginBottom: "10px", 
            fontSize: {sm:"2.5rem", md:"3.55rem", lg:"5rem"} ,
            fontWeight: 900,
            textAlign: "left",
            width: "100%", }}
          >
            That never ends
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
    </Layout>
  );
}
