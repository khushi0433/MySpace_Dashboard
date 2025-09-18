# MySpace - Personal Dashboard App
A modern, responsive personal dashboard application built with React and Node.js. MySpace provides a centralized hub for managing your profile, checking weather, generating quotes, and taking notes.

## Features

- **Profile Card**: Display your personal information and social links
- **Weather Widget**: Get current weather information
- **Quote Generator**: Generate inspirational quotes
- **Notes Manager**: Create and manage personal notes with API integration
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS for a clean, modern interface

## Technologies Used

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Router DOM** - Declarative routing for React

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **CORS** - Cross-origin resource sharing middleware
- **File System** - For data persistence (JSON file storage)

##  Project Structure

```
my_space/
├── backend/
│   ├── app.js              # Main Express server
│   ├── package.json        # Backend dependencies
│   ├── package-lock.json   # Lock file for dependencies
│   └── note.json           # Notes data storage
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── MainComponent.jsx    # Sidebar navigation
│   │   │   ├── ProfileCard.jsx      # Profile display
│   │   │   ├── WeatherWidget.jsx    # Weather component
│   │   │   ├── QuoteGenerator.jsx   # Quote generator
│   │   │   └── NotesManager.jsx     # Notes management
│   │   ├── App.js          # Main React app
│   │   ├── App.css         # App styles
│   │   └── index.js        # App entry point
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend-specific documentation
└── README.md               # Project documentation (this file)
```

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

##  Installation

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:4000`

### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

##  Usage

1. **Profile**: View your personal information and social media links
2. **Weather**: Check current weather conditions
3. **Quote**: Generate random inspirational quotes
4. **Notes**: Create, read, and manage your personal notes
5. **Theme Toggle**: Switch between light and dark themes using the moon/sun icon

## API Endpoints

The backend provides the following REST API endpoints:

### GET /api/note
Retrieves the current note from storage.

**Response:**
```json
{
  "note": "Your saved note content"
}
```

### POST /api/note
Saves a new note to storage.

**Request Body:**
```json
{
  "note": "Your note content here"
}
```

**Response:**
```json
{
  "message": "Note saved successfully!"
}
```

### GET /
Welcome endpoint for the API.

**Response:** Welcome message with usage instructions.

## 🚀 Deployment

### Backend Deployment
The backend can be deployed to any Node.js hosting service like Heroku, Vercel, or Railway.

### Frontend Deployment
The React app can be built and deployed to services like Netlify, Vercel, or GitHub Pages.

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your hosting service.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

##  Author

**Khushbu Baloch**
- Full Stack Developer
- Email: fatimahbaloch917@gmail.com
- GitHub: [khushi0433](https://github.com/khushi0433)
- LinkedIn: [Khushi Baloch](https://www.linkedin.com/in/khushi-baloch-789013365/)
- Upwork: [Khushbu Baloch](https://www.upwork.com/freelancers/~01626b34fb15c459c0)

## Acknowledgments

- React community for the amazing framework
- Tailwind CSS for the utility-first approach
- Express.js for the robust backend framework
- All contributors and supporters

---

**Happy coding!**
