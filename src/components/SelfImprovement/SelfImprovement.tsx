import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBooksByCategory } from "../../service/api/api";
import { Book } from "../../types/Book.types";
import { createCarousel } from "../Carousel/Carousel";
import CoverImage from "../../assets/images/self_improvement/Cover2.jpg";

function SelfImprovement() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksByCategory("self_improvement").then((books) => {
      setTimeout(() => {
        setBooks(books);
      }, 1000);
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${CoverImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Container component="article" maxWidth="xl">
        <Box py={8}>
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            align="left"
            color="#fff">
            Self Improvement
          </Typography>
          <Box px={6}>
            {createCarousel({
              books,
              category: "self_improvement",
              titleColor: "#fff",
              authorColor: "#82b808",
            })}
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default SelfImprovement;
