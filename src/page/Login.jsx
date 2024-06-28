import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  return (
    <Container maxWidth="sm" sx={{ margin: "50px 40% 50px 35%" }}>
      <Box
        width="60%"
        height={440}
        p={3}
        bgcolor="#00BFFF"
        color="white"
        borderRadius="20px"
      >
        <Typography variant="h6" textAlign="center">
          Log In
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          mb={2}
        >
          Welcome Again!.
        </Typography>
        <Stack direction="column" spacing={1.5} alignItems="center">
          <TextField
            variant="outlined"
            label="Email"
            size="small"
            sx={{
              width: "80%",
              mt: "15px",
              bgcolor: "white",
              borderRadius: "5px",
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            size="small"
            sx={{
              width: "80%",
              mt: "15px",
              bgcolor: "white",
              borderRadius: "5px",
            }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <VisibilityIcon sx={{ fontSize: "20px" }} />
                </IconButton>
              ),
            }}
          />
        </Stack>
        <Stack direction="column" mt={4} mb={3} alignItems="center">
          <Button
            variant="contained"
            sx={{
              width: "80%",
              mb: "2%",
              bgcolor: "#FF6347",
              "&:hover": { bgcolor: "#FF6347" },
            }}
          >
            Log In
          </Button>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Link href="#" color="#FF6347" sx={{ textDecoration: "none" }}>
              Sign Up
            </Link>{" "}
          </Typography>
          <Typography variant="body2" my={3}>
            Or
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "80%",
              mb: "2%",
              bgcolor: "#FF6347",
              color: "white",
              "&:hover": { bgcolor: "#FF6347" },
            }}
            startIcon={<GoogleIcon />}
          >
            Log In with Google
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default Login;
