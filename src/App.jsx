import './App.css'; // Importing the main CSS file for styling
import Home from './Pages/Home/Home'; // Importing the Home page component
import Footer from './Pages/Shared/Footer'; // Importing the Footer component
import Navigation from './Pages/Shared/Navigation'; // Importing the Navigation bar component

function App() {

  return (
    <div className='container mx-auto px-4'> 
      {/* Main container with responsive styling */}
      <Navigation /> {/* Navigation bar at the top */}
      <Home /> {/* Main content of the application */}
      <Footer /> {/* Footer section at the bottom */}
    </div>
  );
}

export default App; // Exporting the App component as the default export
