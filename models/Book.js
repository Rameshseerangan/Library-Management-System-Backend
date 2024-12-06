import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    available: { type: Boolean, default: true },
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    borrowDates: [{ start: Date, end: Date }]
});

const Book = mongoose.model('Book', bookSchema);

export default Book
