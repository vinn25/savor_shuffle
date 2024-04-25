import { Box } from "@mui/material";
import { Header, Services, Popular, Special, Testimonial } from "./index";

const Feed = () => {
  return (
    <Box sx={{ bgcolor: "lightblue" }}>
      <Header />
      <Services />
      <Popular />
      <Special />
      <Testimonial />
    </Box>
  );
};

export default Feed;
