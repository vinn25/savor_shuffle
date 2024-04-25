import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";
import { useState } from "react";

import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Sidebar from "./Sidebar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenSidebar(newOpen);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#00BFFF",
          boxShadow: "none",
        }}
      >
        <StyledToolbar>
          <List sx={{ p: "0" }}>
            <ListItem>
              <ListItemIcon onClick={(e) => setOpenSidebar(true)}>
                <IconButton sx={{ mr: "10px" }}>
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
              </ListItemIcon>
              <ListItemText>
                <Link href="/" sx={{ textDecoration: "none", color: "white" }}>
                  <Typography variant="h5" fontWeight={300}>
                    Savor{" "}
                    <span style={{ color: "#FF6347", fontWeight: "bold" }}>
                      Shuffle
                    </span>
                  </Typography>
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Button
            variant="outlined"
            sx={{
              display: { xs: "none", sm: "block" },
              mr: "40px",
              borderColor: "#FF6347",
              color: "white",
              "&:hover": { borderColor: "#FF6347" },
            }}
            disableRipple
            onClick={() => setOpen(true)}
          >
            Sign Up
          </Button>
        </StyledToolbar>
      </AppBar>
      <Drawer open={openSidebar} onClose={toggleDrawer(false)}>
        <Sidebar toggleDrawer={toggleDrawer} setOpen={setOpen} />
      </Drawer>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box
          width={400}
          height={440}
          p={3}
          bgcolor="background.default"
          color="text.primary"
          borderRadius={5}
        >
          <Typography variant="h6" color="grey" textAlign="center">
            Sign Up
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight={400}
            textAlign="center"
            color="#5A5A5A"
            mb={2}
          >
            Welcome! Create your account here.
          </Typography>
          <Stack direction="column" spacing={1.5} alignItems="center">
            <TextField
              variant="outlined"
              label="Name"
              size="small"
              sx={{ width: "80%", mt: "15px" }}
            />
            <TextField
              variant="outlined"
              label="Email"
              size="small"
              sx={{ width: "80%", mt: "15px" }}
            />
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              size="small"
              sx={{ width: "80%", mt: "15px" }}
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
            <Button variant="contained" sx={{ width: "80%", mb: "2%" }}>
              Sign Up
            </Button>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="#" color="primary" sx={{ textDecoration: "none" }}>
                Log In
              </Link>{" "}
            </Typography>
            <Typography variant="body2" my={3}>
              Or
            </Typography>
            <Button
              variant="outlined"
              sx={{
                width: "80%",
                mb: "2%",
              }}
              startIcon={<GoogleIcon />}
            >
              Sign Up with Google
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
