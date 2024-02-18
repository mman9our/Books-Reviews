import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Skeleton } from "@mui/material";
import "./CustomSlider.css";
import { CarouselProps } from "../../types/Carousel.types";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1390,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};
const itemHeight = 400;

const StyledFigure = styled("figure")({
  display: "flex",
  flexDirection: "column",
  height: itemHeight,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "left",
});

export const createCarousel = ({
  books,
  category,
  titleColor = "#000",
  authorColor = "#868686",
}: CarouselProps): JSX.Element => {
  if (!books || books.length === 0) {
    return (
      <div role="list">
        <Slider {...settings}>
          {[...Array(6)].map((_, index) => (
            <div key={index}>
              <StyledFigure>
                <Skeleton variant="rectangular" width={200} height={270} />
                <Box mt={1} width={200} textAlign={"left"}>
                  <Skeleton variant="text" width={180} height={20} />
                  <Skeleton variant="text" width={100} height={15} />
                  <Skeleton variant="text" width={140} height={15} />
                </Box>
              </StyledFigure>
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return (
    <div role="list">
      <Slider {...settings}>
        {books.map((book) => (
          <div key={book.id} role="listitem">
            <Link
              to={`/books/${category}/${book.id}`}
              style={{ textDecoration: "none", color: "inherit" }}>
              <StyledFigure>
                <img
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={270}
                />
                <Box mt={1} width={200} textAlign={"left"}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{ color: titleColor }}>
                    {book.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    style={{
                      textTransform: "uppercase",
                      fontSize: "12px",
                      color: authorColor,
                    }}>
                    By {book.author}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      textTransform: "uppercase",
                      fontSize: "12px",
                      color: authorColor,
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}>
                    Reviewed By {book.reviewedBy}
                  </Typography>
                </Box>
              </StyledFigure>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};
