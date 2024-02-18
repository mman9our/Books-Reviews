import Lottie from "react-lottie";
import { useNavigate } from "react-router";
import NotFoundLottieFile from "../../assets/lottie/NotFound.json";
import { Box, Button, Grid, Typography } from "@mui/material";

const NotFoundScreen = () => {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFoundLottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          p={1}
          gap={2}>
          <div style={{ width: "100%" }}>
            <Lottie options={defaultOptions} width="100%" />
          </div>
          <Typography color="#000" variant="h4" fontWeight="bold">
            Oops, Page not found!
          </Typography>
          <Typography color="#596080" variant="body1">
            Nobody's here! Are you looking for me?
          </Typography>
          <Button onClick={() => navigate("/")}>Go to Book Page</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NotFoundScreen;
