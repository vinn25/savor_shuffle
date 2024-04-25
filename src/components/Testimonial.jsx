import { Avatar, AvatarGroup, Box, Stack, Typography } from "@mui/material";
import chef from "../utilities/image/chef.jpg";
import StarIcon from "@mui/icons-material/Star";

const Testimonial = () => {
  return (
    <Box sx={{ bgcolor: "white", mb: "7%", pt: "7%" }}>
      <Stack
        direction="row"
        p={3}
        px={20}
        sx={{ justifyContent: "space-between" }}
      >
        <img src={chef} style={{ height: "500px" }} />
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" color="#FF6347" pb={3}>
            Testimonials
          </Typography>
          <Typography variant="h3">
            What Our Customers <br /> Say About Us
          </Typography>
          <Typography variant="body1" color="#555555">
            “I had the pleasure of dining at Savor{" "}
            <span style={{ fontWeight: "bold" }}>Shuffle</span> last <br />{" "}
            night, and I'm still raving about the experience! The <br />{" "}
            attention to detail in presentation and service was <br />{" "}
            impeccable”
          </Typography>
          <Stack direction="row" spacing={4}>
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://xsgames.co/randomusers/assets/avatars/male/16.jpg"
              />
              <Avatar
                alt="Travis Howard"
                src="https://xsgames.co/randomusers/assets/avatars/male/2.jpg"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://xsgames.co/randomusers/assets/avatars/male/49.jpg"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://xsgames.co/randomusers/assets/avatars/male/37.jpg"
              />
              <Avatar
                alt="Trevor Henderson"
                src="https://xsgames.co/randomusers/assets/avatars/male/24.jpg"
              />
              <Avatar
                alt="Michel Puskarich"
                src="https://xsgames.co/randomusers/assets/avatars/male/40.jpg"
              />
              <Avatar
                alt="Daryl Carolan"
                src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg"
              />
            </AvatarGroup>
            <Stack direction="column">
              <Typography variant="body1" fontWeight="bold">
                Customer Feedback
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <StarIcon fontSize="small" sx={{ color: "yellow" }} />
                <Typography variant="body2" fontWeight={500}>
                  4.9
                </Typography>
                <Typography variant="body2" fontWeight={500} color="#555555">
                  (18.6k Reviews)
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Testimonial;
