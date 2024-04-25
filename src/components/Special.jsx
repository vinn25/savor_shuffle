import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { specialDishes } from "../utilities/constant";
import StarIcon from "@mui/icons-material/Star";

const Special = () => {
  return (
    <Box sx={{ bgcolor: "white", pt: "2%" }}>
      <Stack
        px={20}
        py={2}
        mb={2}
        direction="row"
        justifyContent="space-between"
      >
        <Stack direction="column" textAlign="left">
          <Typography variant="h6" fontWeight="bold" color="#FF6347">
            Special Dishes
          </Typography>
          <Typography variant="h3">
            Standout Dishes <br /> from Our Menu
          </Typography>
        </Stack>
        <Stack direction="row" pt={10} spacing={2}>
          <Fab
            color="grey"
            aria-label="add"
            sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
            disableRipple
          >
            <ArrowBackIosIcon />
          </Fab>
          <Fab
            color="grey"
            aria-label="add"
            sx={{ "&:hover": { backgroundColor: "#FF6347", color: "white" } }}
            disableRipple
          >
            <ArrowForwardIosIcon />
          </Fab>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Grid
          container
          mb={5}
          rowSpacing={2}
          sx={{ gap: "40px", justifyContent: "center" }}
        >
          {specialDishes.map((special) => (
            <Grid item width="320px">
              <Card
                sx={{
                  height: "300px",
                  padding: "25px",
                  borderRadius: "30px",
                  textAlign: "left",
                  boxShadow: "1px 8px 20px 2px #888888",
                }}
              >
                <CardMedia
                  component="img"
                  image={special.logo}
                  sx={{ pt: "5px", width: "180px", pl: "15%" }}
                />
                <CardContent sx={{ pb: "0" }}>
                  <Typography variant="h5" fontWeight={500}>
                    {special.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {special.subtitle}
                  </Typography>
                </CardContent>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="body1" fontWeight={500}>
                    <span style={{ color: "#FF6347" }}>$</span>
                    {special.price}
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <StarIcon fontSize="small" sx={{ color: "yellow" }} />
                    <Typography variant="subtitle1">
                      {special.rating}
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Special;
