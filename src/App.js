import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Promotions from "./Pages/Promotions";
import Stock from "./Pages/Stock";
import Workers from "./Pages/Workers";
function App() {
    return (
                    <BrowserRouter>
                        <div className="App">
                            <Header />
                            <Routes>
                                <Route exact path="/" element={<Stock />} />
                                <Route path="/stock" element={<Stock />} />
                                <Route path="/promotions" element={<Promotions />} />
                                <Route path="/caissiers" element={<Workers />} />
                            </Routes>
                            <Sidebar />
                            <Footer />
                        </div>
                    </BrowserRouter>


    );
}

export default App;
