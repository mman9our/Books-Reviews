import { CircularProgress, ThemeProvider } from "@mui/material";
import theme from "./themes";
import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./layout/Layout";
import SearchScreen from "./screens/SearchScreen/SearchScreen";

const NewsScreen = lazy(() => import("./screens/NewsScreen/NewsScreen"));
const BooksScreen = lazy(() => import("./screens/BooksScreen/BooksScreen"));
const BookDetailScreen = lazy(
  () => import("./screens/BookDetailScreen/BookDetailScreen")
);
const ReviewsScreen = lazy(
  () => import("./screens/ReviewsScreen/ReviewsScreen")
);
const ContactsScreen = lazy(
  () => import("./screens/ContactsScreen/ContactsScreen")
);
const NotFoundScreen = lazy(
  () => import("./screens/NotFoundScreen/NotFoundScreen")
);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<CircularProgress />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/books" />} />
              <Route path="/books" element={<BooksScreen />} />
              <Route
                path="/books/:category/:id"
                element={<BookDetailScreen />}
              />
              <Route path="/news" element={<NewsScreen />} />
              <Route path="/reviews" element={<ReviewsScreen />} />
              <Route path="/contact" element={<ContactsScreen />} />
              <Route path="/search" element={<SearchScreen />} />
              <Route
                path="/books/:category/:id"
                element={<BookDetailScreen />}
              />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </Layout>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
