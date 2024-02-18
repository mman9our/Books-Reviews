import { Book } from "./Book.types";

export interface CarouselProps {
  books: Book[];
  titleColor?: string;
  authorColor?: string;
  category?: string;
}
