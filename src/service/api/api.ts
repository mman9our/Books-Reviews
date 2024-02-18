export const fetchPopularCategories = () =>
  fetch("/src/data/categories.json")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching categories:", error);
    });

export const fetchBooksByCategory = async (category: string) => {
  try {
    const response = await fetch(`/src/data/categories/${category}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();
    return data.books || [];
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};
