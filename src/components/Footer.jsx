import { Box, Fab, Link, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#00BFFF", height: "100%", pb: "0" }}>
      <Stack direction="column" p={5} px={20} pb={5}>
        <Stack direction="row" spacing={28}>
          <Stack direction="column" spacing={5}>
            <Typography variant="h5" fontWeight={300} color="white">
              Savor{" "}
              <span style={{ color: "#FF6347", fontWeight: "bold" }}>
                Shuffle
              </span>
            </Typography>
            <Typography variant="body2" color="#5A5A5A">
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </Typography>
          </Stack>
          <Stack direction="row" pt="20px" spacing={20}>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Useful links
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#about-us"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  About us
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#events"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Events
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#blogs"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Blogs
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#faq"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  FAQ
                </Link>
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Main Menu
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#home"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Home
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#offer"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Offer
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#menus"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Menus
                </Link>
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#resevation"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Reservation
                </Link>
              </Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" fontWeight="bold">
                Contact Us
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                example@email.com
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                +62 123 456 789
              </Typography>
              <Typography variant="body2" color="#5A5A5A">
                <Link
                  href="#social-media"
                  sx={{ textDecoration: "none", color: "#5A5A5A" }}
                >
                  Social media
                </Link>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" pt={6} alignItems="center" spacing={20}>
          <Stack direction="row" spacing={2}>
            <Fab
              color="grey"
              aria-label="add"
              sx={{
                "&:hover": { backgroundColor: "#FF6347", color: "white" },
              }}
              disableRipple
            >
              <FacebookIcon />
            </Fab>
            <Fab
              color="grey"
              aria-label="add"
              sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
              disableRipple
            >
              <InstagramIcon />
            </Fab>
            <Fab
              color="grey"
              aria-label="add"
              sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
              disableRipple
            >
              <XIcon />
            </Fab>
          </Stack>
          <Typography variant="body2" color="#5A5A5A">
            Copyright 2023 Dscode | All rights reserved
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
