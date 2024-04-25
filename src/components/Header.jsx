import {
  Box,
  Button,
  List,
  ListItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import image from "../utilities/image/Rectangle-5.jpg";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        height: "70vh",
      }}
    >
      <Stack sx={{ pt: "12%", pl: "4%" }}>
        <Typography variant="h3" fontWeight={400}>
          Taste the Flavorful Selections
        </Typography>
        <List>
          <ListItem>
            <TextField
              placeholder="Enter your delivery address"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: "400px",
                mr: "25px",
              }}
            />
            <Button
              variant="contained"
              sx={{
                height: "55px",
                backgroundColor: "#FF6347",
                "&:hover": { backgroundColor: "#FF6347" },
              }}
              disableRipple
            >
              See what's nearby
            </Button>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Header;
