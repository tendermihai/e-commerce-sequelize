import db from "../../config/db.js";
import asyncHandler from "express-async-handler";

let getAllBooks = asyncHandler(async (req, res) => {
  let data = await db.models.Book.findAll();
  res.status(200).json(data);
});

const addBook = asyncHandler(async (req, res) => {
  try {
    const { bookName, price, publisher, publicationDate } = req.body;

    await db.models.Book.create({
      bookName: bookName,
      price: price,
      publisher: publisher,
      publicationDate: publicationDate,
    });
    res.status(200).json({
      type: "success",
      payload: "Book has been added successfully",
    });
  } catch (error) {
    console.error("An error has occured while adding this book.");

    res.status(500).json({
      type: "error",
      payload: "An error has occured while adding this book.",
    });
  }
});

const deleteBook = asyncHandler(async (req, res) => {
  let { id } = req.params;

  let delBook = await db.models.Book.findByPk(id);

  if (delBook) {
    await delBook.destroy();
    res.status(200).json({ message: "Book has been successfully deleted." });
  } else {
    res.status(400).json({ message: "Could not delete this book." });
  }
});

const updateBook = asyncHandler(async (req, res) => {
  let { id } = req.params;
  console.log(id, "this is id");

  let book = await db.models.Book.findByPk(id);
  console.log(book, "this is book");

  let obj = req.body.book;
  if (obj.bookName != "") {
    book.bookName = obj.bookName;
  }

  if (obj.price != "") {
    book.price = obj.price;
  }

  if (obj.publisher != "") {
    book.publisher = obj.publisher;
  }

  if (obj.publicationDate != "") {
    book.publicationDate = obj.publicationDate;
  }

  await book.save();

  res.status(200).json("Book has been successfully updated.");
});

export { getAllBooks, addBook, deleteBook, updateBook };
