import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchBooksByCategory } from "../../service/api/api";
import { Book } from "../../types/Book.types";
import { createCarousel } from "../Carousel/Carousel";

function Nonfiction() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooksByCategory("nonfiction").then((books) => {
      setTimeout(() => {
        setBooks(books);
      }, 1000);
    });
  }, []);

  return (
    <Container maxWidth="xl">
      <Box py={8}>
        <Typography variant="h4" gutterBottom align="left">
          Nonfiction
        </Typography>
        <Box px={6}>
          {createCarousel({
            books,
            category: "nonfiction",
            titleColor: "#000",
            authorColor: "#868686",
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default Nonfiction;
