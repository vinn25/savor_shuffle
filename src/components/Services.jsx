import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { typesOfServices } from "../utilities/constant";

const Services = () => {
  return (
    <Box sx={{ bgcolor: "white", pt: "2%" }}>
      <Typography variant="h3" textAlign="center" py={3}>
        Services
      </Typography>
      <Stack direction="row">
        <Grid
          container
          mb={5}
          rowSpacing={2}
          sx={{ gap: "40px", justifyContent: "center" }}
        >
          {typesOfServices.map((service) => (
            <Grid item width="230px">
              <Card
                sx={{
                  height: "320px",
                  padding: "25px",
                  borderRadius: "30px",
                  textAlign: "center",
                  boxShadow: "1px 8px 20px 2px #888888",
                }}
              >
                <CardMedia component="img" image={service.logo} />
                <CardContent>
                  <Typography variant="h6">{service.title}</Typography>
                  <Typography variant="subtitle2">
                    {service.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Services;
