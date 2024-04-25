import { Box } from "@mui/material";

import { Navbar, Feed, Footer } from "./components/index";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Feed />
      <Footer />
    </Box>
  );
};

export default App;
