import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Category from './pages/Category/Category'
import Details from './pages/Details/Details'
import Searches from './pages/Searches/Searches'
import Footer from './components/Footer/Footer'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/movies-app' element={<Home />} />
        <Route path='/movies-app/:category' element={<Category />} />
        <Route path='/movies-app/:category/:element' element={<Details />} />
        <Route path='/movies-app/search/:keyword' element={<Searches />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
