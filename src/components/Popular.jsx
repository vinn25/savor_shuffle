import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { categories } from "../utilities/constant";
import burger from "../utilities/image/burger.jpg";

const Popular = () => {
  return (
    <Box sx={{ bgcolor: "white", pt: "2%" }}>
      <Stack direction="column" textAlign="center" py={2} mb={2}>
        <Typography variant="h6" fontWeight="bold" color="#FF6347">
          Customer Favorites
        </Typography>
        <Typography variant="h3">Popular Categories</Typography>
      </Stack>
      <Stack direction="row">
        <Grid
          container
          mb={5}
          rowSpacing={2}
          sx={{ gap: "40px", justifyContent: "center" }}
        >
          {categories.map((category) => (
            <Grid item width="230px">
              <Card
                sx={{
                  height: "180px",
                  padding: "25px",
                  borderRadius: "30px",
                  textAlign: "center",
                  boxShadow: "1px 8px 20px 2px #888888",
                }}
              >
                <CardMedia
                  component="img"
                  height="100px"
                  image={burger}
                  sx={{ pt: "5px" }}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight={500}>
                    {category.type}
                  </Typography>
                  <Typography variant="subtitle1">{category.total}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Popular;
