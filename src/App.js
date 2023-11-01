import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Earn from './components/earn/Earn';
import Home from './components/home/Home';
import Nft from './components/other/Nft';
import Ecosystem from './components/other/Ecosystem';
import Referrals from './components/other/Referrals';
import Buy from './components/other/Buy';
import About from './components/other/About';
import Footer from './components/footer/Footer';

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
