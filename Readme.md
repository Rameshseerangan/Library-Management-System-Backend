# Library Management System API

This is a simple Library Management System API that allows users and admins to perform basic operations such as user registration, login, book management, borrowing, and viewing borrowing history. The system uses JWT for authentication and MongoDB for data storage.

## Features

- **User Registration & Login**: Users can register and log in to the system.
- **Admin Authentication**: Admins can log in, manage books, and approve borrowing requests.
- **Book Management**:
  - Admin can add new books.
  - Users can borrow available books.
  - Admin can approve book borrow requests.
  - Users can view their borrowing history.
  - Users can search for books.
  
## API Endpoints

### 1. Authentication

#### POST /api/auth/register
- Register a new user or admin.
- **Body Parameters**:
  - `name` (String)
  - `email` (String, must be unique)
  - `password` (String)
  - `role` (String: "user" or "admin")

#### POST /api/auth/login
- Log in to the system and receive a JWT token for authentication.
- **Body Parameters**:
  - `email` (String)
  - `password` (String)

### 2. User Operations

#### POST /api/user/borrow
- Borrow a book by providing book ID, start, and end dates.
- **Body Parameters**:
  - `bookId` (String)
  - `start` (String, Date format)
  - `end` (String, Date format)

#### GET /api/user/borrow/history/self
- Get the borrowing history of the logged-in user.
- **Authorization**: Bearer token required.

#### GET /api/user/borrow/history/user/:userId
- Admin can view the borrow history of a specific user.
- **Authorization**: Bearer token required.

#### GET /api/user/borrow/history/book/:bookId
- View the borrowing history of a specific book.
- **Authorization**: Bearer token required.

#### GET /api/user/books
- Search for books in the system.
- **Query Parameters**:
  - `title` (String, optional)
  - `author` (String, optional)

### 3. Admin Operations

#### POST /api/admin/book
- Add a new book to the library.
- **Body Parameters**:
  - `title` (String)
  - `author` (String)
  - `available` (Boolean, default: true)

#### GET /api/admin/book/approve/:bookId
- Approve a book borrow request by a user.
- **Authorization**: Admin Bearer token required.

#### GET /api/admin/books
- View all books in the library.
- **Authorization**: Admin Bearer token required.

---

## Authentication and Authorization

- **JWT**: The system uses JWT (JSON Web Token) for authentication.
  - Register/Login to receive a token.
  - Add the token in the **Authorization** header of your requests: `Bearer <JWT_TOKEN>`

---

## Postman Documentation

You can explore and test the API using the following [Postman Documentation Link](https://documenter.getpostman.com/view/39168739/2sAYBbeUqY).

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
