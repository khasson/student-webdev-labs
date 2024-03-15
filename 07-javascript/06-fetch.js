const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    // Display loader initially
    const loader = document.getElementById("loading");
    loader.style.display = "block";

    // Fetch data from the API
    const response = await fetch(url);
    const books = await response.json();

    // Clear the loader after fetching the data
    loader.style.display = "none";

    // Iterate through the books and create elements for each
    books.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.classList.add("my-3", "p-3");
      bookDiv.style.textAlign = "center";

      //Construct the book information
      const title = document.createElement("h2");
      title.textContent = `${book.name}`;
      const author = document.createElement("p");
      author.textContent = `by ${book.authors.join(", ")}`;
      const year = document.createElement("p");
      year.textContent = `${book.released.split("-")[0]}`;
      const pages = document.createElement("p");
      pages.textContent = `${book.numberOfPages} pages`;

      bookDiv.append(title, author, year, pages);

      app.appendChild(bookDiv);
    });
  } catch (error) {
    console.error("Error fetching data:", error);

    loader.style.display = "none";
    app.textContent = "Failed to load book data.";
  }
};

// Call fetchData function to get the books and display them
fetchData(url);
