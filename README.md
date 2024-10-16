# Comic Book Management API

This project is a RESTful API built with Node.js and MongoDB to manage a collection of comic books. The API allows you to perform CRUD operations (Create, Read, Update, Delete) on comic book records, with additional features like pagination, filtering, and sorting.

## Features

- **Create a Comic Book**: Add a new comic book to the inventory by providing details such as name, author, year, price, condition, etc.
- **Edit a Comic Book**: Update existing comic book information like price, condition, or discount.
- **Delete a Comic Book**: Remove a comic book from the inventory.
- **Fetch Comic Book List**: Retrieve all available comic books with pagination, filtering, and sorting options.
- **Get Comic Book Details**: View detailed information about a specific comic book.

## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Express**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing comic book data.
- **Mongoose**: ODM for MongoDB to manage relationships and schema validation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/String-slicer/ComicBookManagement
   cd ComicBookManagementAPI
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Make sure you have MongoDB installed and running locally. You can start MongoDB using:
   ```bash
   mongod
   ```

4. Start the server:
   ```bash
   node app.js
   ```

5. The server will run on `http://localhost:5000` by default.

## API Endpoints

### Comic Book Routes

- **POST /api/comics**: Create a new comic book.
- **PUT /api/comics/:id**: Update an existing comic book by ID.
- **DELETE /api/comics/:id**: Delete a comic book by ID.
- **GET /api/comics**: Retrieve all comic books with pagination, filtering, and sorting.
- **GET /api/comics/:id**: Get details of a specific comic book by ID.

## Postman Collection

You can find the Postman collection for testing the API in the `postman` directory.

## Error Handling

All API endpoints include error handling to ensure meaningful error messages are returned for invalid requests or operations.

