import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchPopularCategories } from "../../service/api/api";
import { useTheme } from "@mui/material/styles";
import { CategoryType } from "../../types/Category.types";

function PopularCategories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const itemHeight = 100;

  useEffect(() => {
    fetchPopularCategories().then((res) => {
      setTimeout(() => {
        setCategories(res.categories || []);
      }, 1000);
      setLoading(false);
    });
  }, []);

  return (
    <section style={{ backgroundColor: theme.palette.background.paper }}>
      <Container component="article" maxWidth="xl">
        <Box py={8}>
          <Typography component="h2" variant="h4" gutterBottom>
            <b>Browse</b> Our Most Popular Categories
          </Typography>
          <Grid container spacing={3}>
            {loading || categories.length === 0
              ? Array.from(Array(8).keys()).map((index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Box
                      component="div"
                      height={itemHeight}
                      p={3}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                      alignItems={"start"}>
                      <Skeleton variant="circular" width={50} height={50} />
                      <Box pl={3} flexGrow={1}>
                        <Skeleton variant="text" width="20%" />
                        <Skeleton variant="text" width="80%" />
                        <Skeleton variant="text" width="60%" />
                      </Box>
                    </Box>
                  </Grid>
                ))
              : categories.map((category) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
                    <Box
                      component="div"
                      height={itemHeight}
                      p={3}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"start"}
                      alignItems={"start"}>
                      <img
                        src={category.image}
                        alt={category.title}
                        width={50}
                        height={50}
                        style={{ userSelect: "none" }}
                      />
                      <Box pl={3}>
                        <Typography
                          component="h3"
                          variant="subtitle1"
                          gutterBottom>
                          {category.title}
                        </Typography>
                        <Typography
                          component="p"
                          variant="body1"
                          sx={{ color: theme.palette.text.disabled }}>
                          {category.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

export default PopularCategories;
