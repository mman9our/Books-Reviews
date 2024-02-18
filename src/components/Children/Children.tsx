import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBooksByCategory } from "../../service/api/api";
import { Book } from "../../types/Book.types";
import { createCarousel } from "../Carousel/Carousel";

function Children() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksByCategory("children").then((books) => {
      setTimeout(() => {
        setBooks(books);
      }, 1000);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Box py={8}>
        <Typography variant="h4" gutterBottom align="left">
          Children's
        </Typography>
        <Box px={6}>
          {createCarousel({
            books,
            category: "children",
            titleColor: "#000",
            authorColor: "#868686",
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Children;
