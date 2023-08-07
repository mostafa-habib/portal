import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {
  CssBaseline,
  Grid,
  Input,
  TextField,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import axios from "axios";

const steps = [
  {
    id: 1,
    label: "Forget Password",
    description: `Enter the mobile number associated with your account and we'll send you a SMS with your account information.`,
  },
  {
    id: 2,
    label: "Verify Code",
    description: "Reset Password",
  },
  {
    id: 3,
    label: "Change Password",
    description: `Enter New Password`,
  },
];

export default function VerticalLinearStepper() {
  const defaultTheme = createTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [mobile, setMobile] = React.useState("");
  const [validMobile, setValidMobile] = React.useState(true);
  const [code, setCode] = React.useState("");
  const [validCode, setValidCode] = React.useState(true);
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [validNewPassword, setValidNewPassword] = React.useState(true);
  const [validConfirmPassword, setValidConfirmPassword] = React.useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // try {
    //   const response = axios.post(
    //     'https://api.twilio.com/2010-04-01/Accounts/your_account_sid/Messages.json',
    //     {
    //       Body: 'Your SMS message goes here',
    //       From: '01207300696',
    //       To: mobile
    //     },
    //     {
    //       auth: {
    //         username: 'your_account_sid',
    //         password: 'your_auth_token'
    //       }
    //     }
    //   );

    //   console.log('SMS sent successfully:', response.data);
    // } catch (error) {
    //   console.error('Error sending SMS:', error);
    // }
    // Validate mobile number
    const mobileRegex = /^[0-9]\d{10}$/; // Regex pattern for a 10-digit mobile number

    if (mobileRegex.test(mobile)) {
      // Mobile number is valid
      setValidMobile(true);
      // Send SMS logic goes here
      handleNext();
      console.log("Sending SMS to:", mobile);
    } else {
      // Mobile number is invalid
      setValidMobile(false);
      console.log("Invalid mobile number");
    }
  };

  const handleChangeMobile = (event) => {
    setMobile(event.target.value);
  };
  const handleChangeCode = (event) => {
    setCode(event.target.value);
  };

  const handleResendCode = () => {
    console.log("Resend code");
  };

  const handleChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();

    // Validate new password and confirm password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/; // Regex pattern for a strong password

    let isNewPasswordValid = passwordRegex.test(newPassword);
    let isConfirmPasswordValid = newPassword === confirmPassword;

    setValidNewPassword(isNewPasswordValid);
    setValidConfirmPassword(isConfirmPasswordValid);

    if (isNewPasswordValid && isConfirmPasswordValid) {
      // New password and confirm password are valid
      console.log('New Password:', newPassword);
      console.log('Confirm Password:', confirmPassword);
      // Done logic goes here
    } else {
      // New password or confirm password is invalid
      console.log('Invalid new password or confirm password');
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    {step.id == 1 && (
                      <form onSubmit={handleSubmit}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="mobile"
                          label="Mobile"
                          name="mobile"
                          autoComplete="mobile"
                          autoFocus
                          value={mobile}
                          onChange={handleChangeMobile}
                          error={!validMobile}
                        />
                        {!validMobile && (
                          <p>Please enter a valid mobile number.</p>
                        )}
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Send SMS
                        </Button>
                      </form>
                    )}
                    {step.id == 2 && (
                      <>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="code"
                          label="Code"
                          name="code"
                          autoComplete="code"
                          value={code}
                          onChange={handleChangeCode}
                          error={!validCode}
                        />
                        {!validCode && (
                          <p>Please enter a valid 6-digit code.</p>
                        )}

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          onClick={handleNext}
                        >
                          Next
                        </Button>

                        <Button
                          fullWidth
                          variant="outlined"
                          onClick={handleResendCode}
                          sx={{ mt: 1, mb: 2 }}
                        >
                          Resend Code
                        </Button>
                      </>
                    )}
                    {step.id == 3 && (
                      <form onSubmit={handlePasswordSubmit}>
                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="new-password"
                          label="New Password"
                          name="new-password"
                          type="password"
                          autoComplete="new-password"
                          value={newPassword}
                          onChange={handleChangeNewPassword}
                          error={!validNewPassword}
                        />
                        {!validNewPassword && (
                          <p>
                            Please enter a strong password with at least 6
                            characters, including at least one digit, one
                            lowercase letter, and one uppercase letter.
                          </p>
                        )}

                        <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="confirm-password"
                          label="Confirm New Password"
                          name="confirm-password"
                          type="password"
                          autoComplete="confirm-password"
                          value={confirmPassword}
                          onChange={handleChangeConfirmPassword}
                          error={!validConfirmPassword}
                        />
                        {!validConfirmPassword && (
                          <p>Please enter the same password as above.</p>
                        )}

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Done
                        </Button>
                      </form>
                    )}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
