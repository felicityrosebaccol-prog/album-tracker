Album Tracker
Album Tracker is a web-based music discovery and collection management application built with React. It allows users to search for music albums, explore album details, listen to available previews, organize their personal music collection, and receive AI-powered album recommendations based on their saved albums and ratings.
Live Website
https://album-tracker-8jnxg7ukh-fel23.vercel.app/

Screenshots
Add screenshots of the following:
Album search results
Album details page
AI recommendations page
Features
Search for albums using the iTunes API.
View album information, cover art, and track listings.
Play available 30-second music previews.
Control playback using the mini player.
Save albums to a personal collection.
Manage album status, ratings, and personal notes.
Filter and sort saved albums.
Save collection data using browser local storage.
Access Deezer album playback when a matching album is available.
Generate AI-powered album recommendations based on saved albums and ratings.
Tech Stack
React
Vite
JavaScript
CSS
Context API
iTunes Search API
Deezer API
Google Gemini API
Local Storage
GitHub
Vercel
How to Run Locally
Clone the repository:
 git clone https://github.com/felicityrosebaccol-prog/album-tracker.git
Navigate to the project folder:
 cd album-tracker
Install dependencies:
 npm install
Create a .env.local file in the project root and add your Gemini API key:
 GEMINI_API_KEY=your_api_key_here
Start the development server:
 npm run dev
Open the local URL displayed in your terminal.
Limitations
iTunes provides 30-second previews rather than full tracks.
The personal collection is stored in the browser’s local storage.
Deezer playback may require a user login and an eligible subscription depending on the user’s country.
AI recommendations require a valid Gemini API key and available API access.
Privacy Note
The AI recommendation feature sends saved album titles, artists, ratings, and statuses to Google’s Gemini API to generate recommendations. Personal notes are not sent.
Disclaimer
This project is developed for educational purposes and is not affiliated with, endorsed by, or sponsored by Apple, Spotify, Deezer, or Google.
