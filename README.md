# Book-search

![](https://img.shields.io/npm/v/react?label=React&style=flat-square) ![](https://img.shields.io/npm/v/sass?label=sass&style=flat-square) ![](https://img.shields.io/npm/v/react-redux?label=React-redux&style=flat-square) ![](https://img.shields.io/npm/v/axios?label=axios&style=flat-square) ![](https://img.shields.io/npm/v/typescript?label=typescript&style=flat-square):sunglasses:

**The client part**<br /><br />
The application contains several pages and implements the following mechanism:
1. The user enters text in the search field, presses the "Search" button or Enter. Selects the required filters.
2. The request is sent to the Google Books API.
3. Search results are displayed on the page.

To go to the detailed page, the user must click on the picture or title of the book.

## Functions⚡

1. Text field and search button.
2. Filtering by categories.
3. Sorting.
4. Found books are displayed as cards, each of which consists of a book cover image, book title, category name, and author names.
5. Above the block with cards, the number of books found by request is displayed.
6. Pagination is implemented according to the 'load more' principle. **Pagination step - 28. I did this because 4 cards in a row look better.**
7. When you click on the card, you go to the detailed page of the book.

## Screenshots

![screenshot](https://github.com/Getmenn/Book-search/blob/master/src/assets/Screenshot_2.jpg)

## Site

link: https://getmenn.github.io/Book-search/
