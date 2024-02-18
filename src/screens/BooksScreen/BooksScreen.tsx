import PopularCategories from "../../components/PopularCategories/PopularCategories";
import Nonfiction from "../../components/Nonfiction/Nonfiction";
import Fiction from "../../components/Fiction/Fiction";
import Children from "../../components/Children/Children";
import SelfImprovement from "../../components/SelfImprovement/SelfImprovement";

function BooksScreen() {
  return (
    <>
      <PopularCategories />
      <Nonfiction />
      <Fiction />
      <Children />
      <SelfImprovement />
    </>
  );
}

export default BooksScreen;
