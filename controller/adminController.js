import User from "../models/User.js";
import Book from "../models/Book.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // pwd hashing
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const viewRequests = async (req, res) => {
  try {
    const requests = await Book.find({ borrowedBy: { $ne: null } });
    res.json(requests);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const approveRequest = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).send("Book not found");
    book.available = false;
    await book.save();
    res.status(200).json({ message: "Request approved successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

export const addBook = async (req, res) => {
  try {
    const { title, author } = req.body;

    // Validate input
    if (!title || !author) {
      return res.status(400).json({ message: "Title and author are required" });
    }

    // Create a new book
    const newBook = new Book({ title, author });
    await newBook.save();

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
