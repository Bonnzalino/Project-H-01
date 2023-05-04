import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Hidden } from "@mui/material";
import './MUi.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Everlasting
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
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

export default function SignIn() {
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
    <div className="signinbox">
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="sm" className='middlebox' >
        <CssBaseline />
        <Box 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}
          <img src="./src/images/logot.png" width={40} />
          <Typography component="h1" variant="h5" fontWeight={900}>
            Sign in
          </Typography>
          {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> */}
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
                    className="inputbox"
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
                    className="inputbox"
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
                    sx={{ mt: 3 }}
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
          {/* </Box> */}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}