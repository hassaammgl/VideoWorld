import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/videos' element={<Video/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
