## Backend: FastAPI

### Prerequisites

- Python 3.10 or higher
- FastAPI
- Uvicorn
- SQLAlchemy (for SQLite integration)

### Available Endpoints

- `GET /projects`: Retrieve a list of all projects.
- `GET /projects/{id}`: Retrieve details of a specific project by ID.

## Frontend: React

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Setting Up the Frontend

### Features

- **Project List:** Displays a list of projects fetched from the backend API.
- **Project Detail:** Individual project detail pages using React Router.
- **Search:** Functionality to filter projects by title.
- **Responsive Design:** Fully responsive layout with CSS grid and Flexbox.
- **Animations:** Includes hover effects and transitions.

## Running the Application

1. **Start the Backend:**
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
   The backend will run on `http://localhost:8000`.

2. **Start the Frontend:**
   In a separate terminal, start the React frontend:

   ```bash
   cd frontend
   npm start
   ```
   The frontend will be available at `http://localhost:3000`.

3. **Access the Application:**
   Open `http://localhost:3000` in your browser to see the list of projects and navigate to the project detail pages.
