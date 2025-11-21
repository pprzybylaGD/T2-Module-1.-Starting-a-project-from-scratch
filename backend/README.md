# Express MongoDB API

A Node.js REST API built with Express.js and MongoDB.

## Project Structure

```
backend/
├── models/
│   └── User.js          # MongoDB User schema
├── routes/
│   └── users.js         # User routes (GET, POST, PUT, DELETE)
├── server.js            # Main server file
├── package.json         # Dependencies
├── .env                 # Environment variables
└── .gitignore          # Git ignore file
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance like MongoDB Atlas)
- npm or yarn

## Installation

1. Install dependencies:

```bash
npm install
```

2. Configure MongoDB connection in `.env`:

```
MONGODB_URI=mongodb://localhost:27017/express-mongodb-api
PORT=5000
NODE_ENV=development
```

3. Start MongoDB:

```bash
# If using MongoDB locally
mongod
```

## Running the Server

### Development mode (with auto-reload):

```bash
npm run dev
```

### Production mode:

```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Users

- **GET** `/api/users` - Get all users
- **GET** `/api/users/:id` - Get user by ID
- **POST** `/api/users` - Create a new user
- **PUT** `/api/users/:id` - Update user
- **DELETE** `/api/users/:id` - Delete user

### Example Request

```bash
# Create a user
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "age": 30}'

# Get all users
curl http://localhost:5000/api/users
```

## Technologies Used

- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing
- **Dotenv** - Environment variable management
- **Nodemon** - Development server auto-reload

## Next Steps

1. Uncomment the user routes in `server.js` to enable API endpoints
2. Add more models and routes as needed
3. Implement authentication and validation
4. Add error handling and logging
5. Write tests for your API

## License

ISC
