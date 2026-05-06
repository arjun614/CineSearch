🎬 CineSearch
CineSearch is a dynamic web application built with React and Vite that allows users to search for their favorite movies and TV series. It fetches real-time data from the OMDb API to provide instant details including posters, release years, and media types.

✨ Features
Real-time Search: Instantly find movies or series by title.

Dynamic Data Fetching: Integrates with the OMDb API for up-to-date information.

Responsive UI: Clean and modern movie grid layout.

Smart Poster Handling: Automatically provides a "No Poster" placeholder if the official artwork is missing.

🚀 Tech Stack
Frontend: React.js

Build Tool: Vite

Styling: CSS3 (Flexbox/Grid)

API: OMDb API

🛠️ Installation & Setup
Clone the repository:
1. git clone https://github.com/your-username/CineSearch.git
2. **Navigate to the project folder:**
   ```bash
   cd CineSearch
3. **Install dependencies:**
   ```bash
   npm install
4. **Run the development server:**
   ```bash
   npm run dev

🔑 Environment Variables
To run this project, you will need to add an API key from OMDb API to your fetch requests or a .env file:
VITE_OMDB_API_KEY=your_api_key_here
