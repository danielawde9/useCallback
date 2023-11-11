# Exercise: Bookstore Manager

You're tasked with creating a Bookstore Manager using React. The manager should allow users to:

1. Add books to the list.
1. Search for a book by title.
1. Filter books by their release year.
1. Toggle between different themes (Light and Dark).
1. To add to the complexity:

Every book has a title, author.
The filtering for books should be an expensive operation to simulate a more realistic use case.

**Requirements:**

1. **Function to Add Books to the Books State:**

- The addBook function allows you to add a new book to your list of books.
- Within this function:

  - You use the setBooks method to update the list of books.
  - You're taking the current list (prev) and adding a new book to it.
  - For each new book, you generate a unique ID using the current time (Date.now()). This ensures each book has a distinct identifier.
  - After adding the new book, you clear the input fields by resetting the newBook state.

2. **Function WITHOUT useMemo:**

- In this scenario, every time any part of the component re-renders (like when you toggle the theme), the book search/filter operation runs again.
- You can confirm this by adding a console.log inside the filter function. This will show you that the search function is executed every time the component updates, even if the search term or the book list hasn't changed.

3. **Function WITH useMemo:**

- By using useMemo, you can optimize the search function so it only runs when there's an actual change to the searchTerm or the list of books.
- Inside the useMemo, you can add a console.log to observe its behavior. You'll notice that even if you toggle the theme (or make other unrelated changes), the search operation won't re-run unless the searchTerm or the book list changes. This demonstrates the efficiency and optimization useMemo brings.
