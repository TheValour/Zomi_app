import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { 
  Navbar, Dashboard, Home, 
  Earn, Ecosystem, Buy, About, 
  Nft, Referrals, Footer
} from './components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/earn' element={<Earn />} />
          <Route path='/nft' element={<Nft />} />
          <Route path='/ecosystem' element={<Ecosystem />} />
          <Route path='/referrals' element={<Referrals />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
