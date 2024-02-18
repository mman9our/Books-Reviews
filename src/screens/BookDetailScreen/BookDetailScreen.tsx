import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBooksByCategory } from "../../service/api/api";
import { Book } from "../../types/Book.types";
import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Rating,
  Skeleton,
  Typography,
} from "@mui/material";
import StarIcon from "../../assets/icons/star.svg";
import AvatarIcon from "../../assets/icons/user.svg";

const BookDetailScreen = () => {
  const { category, id } = useParams();
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const [value, setValue] = useState<number | null>(2);

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (!category || !id) {
        return;
      }

      try {
        const data = await fetchBooksByCategory(category);
        if (!data) {
          return;
        }
        const book = data.find((book: Book) => book.id === parseInt(id));
        if (!book) {
          return;
        }
        setTimeout(() => {
          setBookDetails(book);
        }, 1000);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookDetails();
  }, [category, id]);

  if (!bookDetails) {
    return (
      <Container
        maxWidth="lg"
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          p={2}>
          <Grid item xs={12} sm={6} md={4} lg={4} maxWidth={"300"} mt={5}>
            <Skeleton
              variant="rectangular"
              width={"100%"}
              height={500}
              sx={{ borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                borderRadius: "8px",
                height: "100%",
              }}>
              <Skeleton variant="text" width="50%" height={40} />
              <Box
                display={"flex"}
                justifyContent={"start"}
                gap={1}
                alignItems={"center"}>
                <Skeleton variant="circular" width={24} height={24} />
                <Skeleton variant="text" width="50%" />
              </Box>
              <Skeleton variant="text" width="100%" height={200} />
              <Box
                display={"flex"}
                pb={2}
                justifyContent={"start"}
                gap={1}
                alignItems={"center"}>
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="text" width="50%" />
              </Box>
              <Skeleton variant="rectangular" width="50%" height={30} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }

  return (
    <>
      <Container
        maxWidth="lg"
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          p={2}>
          <Grid item xs={12} sm={6} md={4} lg={4} maxWidth={"300"} mt={5}>
            <img
              src={bookDetails?.image}
              alt={bookDetails?.title}
              style={{
                display: "block",
                borderRadius: "8px",
                width: "100%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                borderRadius: "8px",
                height: "100%",
              }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                {bookDetails?.title}
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"start"}
                gap={1}
                alignItems={"start"}>
                <img src={StarIcon} width={24} height={24} />
                <Typography variant="subtitle1" gutterBottom>
                  Reviewed By: {bookDetails?.reviewedBy}
                </Typography>
              </Box>

              <Typography variant="body1" py={3}>
                {bookDetails?.description}
              </Typography>

              <Box
                display={"flex"}
                pb={2}
                justifyContent={"start"}
                gap={1}
                alignItems={"center"}>
                <Avatar alt={bookDetails?.author} src={AvatarIcon} />
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ color: "#0098D2" }}>
                  {bookDetails?.author}
                </Typography>
              </Box>

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BookDetailScreen;
