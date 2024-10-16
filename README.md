
# Comic Book Management API

A backend API for managing a comic book inventory, allowing you to create, read, update, and delete (CRUD) comic book data. This project is built using Node.js, Express, and MongoDB.

## Features

### Comic Book Management:
- **Create a Comic Book:** Add new comic books with details like name, author, price, condition, etc.
- **Edit a Comic Book:** Modify existing comic book information.
- **Delete a Comic Book:** Remove comic books from the inventory.
  
### Comic Book List:
- Fetch the list of all comic books with pagination.
- Filter by author, year, price, condition, etc.
- Sort by attributes like price, year, or alphabetically.

### Comic Book Details:
- Retrieve full details of a specific comic book by ID.

## Project Structure

```
📁 ComicBookManagementAPI
├── 📁 config
│   └── db.js            # MongoDB connection setup
├── 📁 controllers
│   └── comicController.js  # API logic for managing comics
├── 📁 models
│   └── comicModel.js     # Mongoose schema for comics
├── 📁 routes
│   └── comicRoutes.js    # Route definitions for APIs
├── 📁 postman
│   └── ComicBookCollection.json  # Postman collection for API testing
├── app.js                # Main application file
├── package.json          # Project metadata and dependencies
└── .gitignore            # Files and directories to be ignored in Git
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 12.x or higher)
- **MongoDB** (local or cloud instance)

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/String-slicer/comic-book-management-api.git
   cd comic-book-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up MongoDB:**
   - Create a `.env` file in the root directory with the following:
     ```
     MONGO_URI=mongodb://localhost:27017/comicbooks
     PORT=5000
     ```

4. **Run the server:**
   ```bash
   npm start
   ```

The server will start at `http://localhost:5000`.

## API Endpoints

### Comic Book Management

- **Create Comic**: `POST /api/comics`
- **Edit Comic**: `PUT /api/comics/:id`
- **Delete Comic**: `DELETE /api/comics/:id`

### Comic Book List

- **Get All Comics**: `GET /api/comics`
- **Get Comic by ID**: `GET /api/comics/:id`

## Testing with Postman

- Import the Postman collection file (`postman/ComicBookCollection.json`) to test the API endpoints.
- You can use Postman to interact with the API for adding, updating, and deleting comic books.

## Error Handling

All errors are handled and returned in a format suitable for a React frontend. Example response for an error:
```json
{
  "message": "Comic not found",
  "status": 404
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
