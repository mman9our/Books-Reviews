import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBooksByCategory } from "../../service/api/api";
import { Book } from "../../types/Book.types";
import { createCarousel } from "../Carousel/Carousel";
import CoverImage from "../../assets/images/fiction/Cover.jpg";

function Fiction() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksByCategory("fiction").then((books) => {
      setTimeout(() => {
        setBooks(books);
      }, 1000);
    });
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${CoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Container maxWidth="xl">
        <Box py={8}>
          <Typography variant="h4" gutterBottom align="left" color={"#fff"}>
            Fiction
          </Typography>
          <Box px={6}>
            {createCarousel({
              books,
              category: "fiction",
              titleColor: "#fff",
              authorColor: "#82b808",
            })}
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Fiction;
