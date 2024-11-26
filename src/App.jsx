
import './App.css'
import Home from './Pages/Home/Home'
import Footer from './Pages/Shared/Footer'
import Navigation from './Pages/Shared/Navigation'

function App() {

  return (
    <div className='container mx-auto px-4'>
      <Navigation />
     <Home />
     <Footer />
    </div>
  )
}

export default App
