/*const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');
app.style.paddingLeft = 0;
const loading = document.querySelector('#loading');

const addBookToDOM = (item) => {
  console.log(item);
  let element = document.createElement('div');
  let title = document.createElement('h4');
  let author = document.createElement('p');
  let published = document.createElement('p');
  let pages = document.createElement('p');

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.marginTop = '20px';

  title.textContent = item.name;
  author.textContent = `by ${item.authors[0]}`;
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let li = document.createElement('li');
      li.textContent = `An error occured. Please try again.`;
      app.append(li);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);*/

const url = "https://anapioficeandfire.com/api/books/";
const $app = $("#books");
$app.css("paddingLeft", "0");
const $loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);
  let $element = $("<div></div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });
  let $title = $("<h4></h4>").text(item.name);
  let $author = $("<p></p>").text(`by ${item.authors[0]}`);
  let $published = $("<p></p>").text(item.released.substr(0, 4));
  let $pages = $("<p></p>").text(`${item.numberOfPages} pages`);

  $element.append($title, $author, $published, $pages);
  $app.append($element);
};

const fetchData = (url) => {
  $.ajax({
    url: url,
    type: "GET",
    success: (data) => {
      $.each(data, (index, item) => {
        addBookToDOM(item);
      });
    },
    error: (request, status, error) => {
      console.log(error);
      $app.append($("<li></li>").text(`An error occurred. Please try again.`));
    },
    complete: () => {
      $loading.remove();
    },
  });
};

$(document).ready(function () {
  fetchData(url);
});
