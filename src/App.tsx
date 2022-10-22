import { Routes, Route, HashRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';


function App() {

  return (
    <HashRouter>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </HashRouter>
  )
};

export default App;
