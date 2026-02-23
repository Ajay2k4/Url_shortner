# URL Shortener Application

A full-stack URL Shortener application that converts long URLs into short links and redirects users to the original destination. The project follows a clean client–server architecture with separate frontend and backend services.

---

## Live Demo

Frontend: (Add deployed link here)
Backend API: (Add backend deployed link here)
GitHub Repository: https://github.com/Ajay2k4/Url_shortner

---

## Technologies Used

Frontend:

* React (Vite)
* JavaScript (ES6)
* HTML5, CSS3
* Axios

Backend:

* Node.js
* Express.js
* NanoID

Database:

* MongoDB with Mongoose

Tools:

* Git
* GitHub
* REST API Design

---

## Features

* Generate short URLs from long links
* Redirect short URL to original URL
* Click counter tracking
* Optional expiry time support
* Copy to clipboard functionality
* Modular backend structure

---

## System Architecture

The application follows a client–server architecture:

React Frontend → Express Backend → MongoDB Database

1. The user submits a long URL from the frontend.
2. The backend generates a unique short code.
3. URL mapping is stored in MongoDB.
4. Opening the short URL triggers a redirect.
5. Click count is updated during redirection.

---

## Project Structure

```
Url_shortner/
 ├── backend/
 │    ├── controllers/
 │    ├── models/
 │    ├── routes/
 │    ├── utils/
 │    └── server.js
 └── frontend/
      └── src/
          └── App.jsx
```

---

## Local Setup

### Clone Repository

```
git clone https://github.com/Ajay2k4/Url_shortner.git
cd Url_shortner
```

### Backend Setup

```
cd backend
npm install
node server.js
```

Backend runs at: http://localhost:5000

### Frontend Setup

```
cd frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

---

## API Endpoints

Create Short URL
POST `/api/url/shorten`

Example Body:

```
{
  "originalUrl": "https://example.com"
}
```

Redirect
GET `/:shortCode`

---

## AI Usage

ChatGPT was used as a development assistant for planning, debugging, and integration guidance. Final implementation and testing were done manually.

---

## Future Improvements

* Analytics dashboard
* Improved UI/UX
* Enhanced error handling
* Unit testing
* Deployment monitoring

---

## Author

Ajay S S
GitHub: https://github.com/Ajay2k4
