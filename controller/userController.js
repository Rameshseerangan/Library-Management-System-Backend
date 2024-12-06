import Book from "../models/Book.js";

export const listBooks = async (req, res) => {
  try {
    const books = await Book.find({ available: true });
    res.json(books);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const borrowBook = async (req, res) => {
  try {
    const { title, start, end } = req.body; // Changed from bookId to title
    const book = await Book.findOne({ title }); // Find by title

    if (!book || !book.available) {
      return res.status(400).send("Book not available");
    }

    book.borrowedBy = req.user.id;
    book.available = false;
    book.borrowDates.push({ start, end });
    await book.save();

    res.status(200).json({ message: "Book borrowed successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const getBorrowHistoryByUserId = async (req, res) => {
  try {
    const { userId } = req.params; // Extract the userId from the URL

    // Find books borrowed by the user
    const books = await Book.find({ borrowedBy: userId });

    if (books.length === 0) {
      return res.status(404).json({ message: "Borrow history not found" });
    }

    const history = books.map((book) => ({
      title: book.title,
      borrowDates: book.borrowDates,
    }));

    res.status(200).send(history);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
