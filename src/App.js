import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Sidebar />
        <Footer />
    </div>
  );
}

export default App;
