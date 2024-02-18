import { Box, Button, Grid, Typography } from "@mui/material";
import Lottie from "react-lottie";
import MaintenanceLottieFile from "../../assets/lottie/BuildPage.json";
import { useNavigate } from "react-router-dom";

function ReviewsScreen() {
  const navigate = useNavigate();

  const maintenanceOptions = {
    loop: true,
    autoplay: true,
    animationData: MaintenanceLottieFile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
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
              <Lottie options={maintenanceOptions} width="100%" />
            </div>
            <Typography color={"#000"} variant="h4" fontWeight={"bold"}>
              Page under Maintenance!
            </Typography>
            <Typography color={"#596080"} variant="body1">
              We're currently performing maintenance on this page. Please check
              back later.
            </Typography>
            <Button onClick={() => navigate("/")}>Go to Book Page</Button>
          </Box>{" "}
        </Grid>
      </Grid>
    </>
  );
}

export default ReviewsScreen;
