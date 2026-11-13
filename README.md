# Book Service

A RESTful API for managing books, authors, and publishers, built with Node.js, Express, Sequelize, and PostgreSQL.

The application supports relational data management, including many-to-many relationships between books and authors.

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express 5** — REST API framework
- **Sequelize** — ORM and database operations
- **PostgreSQL 17** — relational database
- **Docker** — local database environment

## Features

- Create books with authors and publishers
- Retrieve books by ISBN
- Update book titles
- Delete books
- Search books by author or publisher
- Retrieve authors associated with a book
- Retrieve publishers associated with an author
- Delete authors
- Manage database relationships using Sequelize
- Use database transactions for related operations

## Database Structure

The application uses four database tables:

| Table | Description |
|---|---|
| `books` | Stores book information |
| `authors` | Stores author information |
| `publishers` | Stores publisher information |
| `books_authors` | Connects books and authors |

### Relationships

- One publisher can publish multiple books.
- One book belongs to one publisher.
- One book can have multiple authors.
- One author can be associated with multiple books.

## Getting Started

### Prerequisites

- Node.js
- npm
- Docker Desktop

### 1. Clone the Repository

```bash
git clone https://github.com/KupitmanIL/book-service.git
cd book-service
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start PostgreSQL

Run PostgreSQL 17 in Docker:

```bash
docker run -d --name book-postgres -e POSTGRES_USER=bookuser -e POSTGRES_PASSWORD=bookpass123 -e POSTGRES_DB=bookdb -p 127.0.0.1:5433:5432 -v book_postgres_data:/var/lib/postgresql/data postgres:17
```

This creates a local PostgreSQL database with persistent storage.

The example credentials are intended for local development only.

### 4. Configure Environment Variables

Copy `.env.example` to `.env`.

Example configuration:

```dotenv
PORT=8080
NODE_ENV=development

DB_NAME=bookdb
DB_USER=bookuser
DB_PASSWORD=bookpass123
DB_HOST=localhost
DB_PORT=5433
DB_DIALECT=postgres
```

Do not commit `.env` files containing credentials.

### 5. Start the Application

```bash
npm start
```

The application will be available at:

`http://localhost:8080`

Sequelize automatically synchronizes the database models when the application starts.

## API Endpoints

### Books

| Method | Endpoint | Description |
|---|---|---|
| POST | `/book` | Create a book |
| GET | `/book/:isbn` | Get a book by ISBN |
| DELETE | `/book/:isbn` | Delete a book |
| PATCH | `/book/:isbn/title/:title` | Update a book title |
| GET | `/books/author/:authorName` | Find books by author |
| GET | `/books/publisher/:publisherName` | Find books by publisher |

### Authors

| Method | Endpoint | Description |
|---|---|---|
| GET | `/authors/book/:isbn` | Get authors of a book |
| DELETE | `/author/:authorName` | Delete an author |

### Publishers

| Method | Endpoint | Description |
|---|---|---|
| GET | `/publishers/author/:authorName` | Get publishers associated with an author |

## API Examples

### Create a Book

**POST** `/book`

```json
{
  "isbn": "9780132350884",
  "title": "Clean Code",
  "publisher": "Prentice Hall",
  "authors": [
    {
      "name": "Robert C. Martin",
      "birth_date": "1952-12-05"
    }
  ]
}
```

Successful response:

```text
201 Created
```

### Get a Book

**GET** `/book/9780132350884`

Example response:

```json
{
  "isbn": "9780132350884",
  "title": "Clean Code",
  "publisher": "Prentice Hall",
  "authors": [
    {
      "name": "Robert C. Martin",
      "birthDate": "1952-12-05"
    }
  ]
}
```

### Delete a Book

**DELETE** `/book/9780132350884`

Returns the deleted book information.

A subsequent GET request for the deleted ISBN returns `404 Not Found`.

## Development

Start the application in watch mode:

```bash
npm run dev
```

The server automatically restarts when source files change.

## API Testing

The repository includes `requests.http`, containing example HTTP requests that can be executed using the built-in HTTP Client in JetBrains IDEs.

The following operations have been manually verified against PostgreSQL:

- Book creation
- Book retrieval
- Book deletion
- Verification that a deleted book returns HTTP 404

## Future Improvements

- Request validation
- Automated integration tests
- Database migrations
- Docker Compose configuration
- API documentation using OpenAPI

## Author

**Ilia Kupitman**

GitHub: KupitmanIL

## License

ISC