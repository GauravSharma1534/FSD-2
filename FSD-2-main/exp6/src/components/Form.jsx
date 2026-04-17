import { useState } from "react";
import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Container,
  Box
} from "@mui/material";

export default function FormExample() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactPattern = /^[0-9]{10}$/;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      age === "" ||
      contact === ""
    ) {
      setError("All fields are required");
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (age <= 0) {
      setError("Please enter a valid age");
      return;
    }

    if (!contactPattern.test(contact)) {
      setError("Contact number must be 10 digits");
      return;
    }

    if (!agree) {
      setError("You must accept the terms");
      return;
    }

    setError("");
    alert("Form submitted successfully!");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 3,
          p: 3,
          backgroundColor: "transparent"
        }}
      >
        <h3>Registration Form</h3>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextField
            label="Age"
            type="number"
            fullWidth
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <TextField
            label="Contact Number"
            fullWidth
            margin="normal"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />

          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            sx={{ mt: 2 }}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel
              value="transgender"
              control={<Radio />}
              label="Transgender"
            />
          </RadioGroup>

          <FormControlLabel
            control={
              <Checkbox
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            }
            label="I agree to terms and conditions"
          />

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
