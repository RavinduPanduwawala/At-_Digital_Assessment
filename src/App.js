import Navbar from './components/Navbar'
import Accordion from './components/Accordion'
import Home from './Pages/Home'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className="flex justify-center mb-14">
        <div className="w-2/3">
          <Accordion />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
