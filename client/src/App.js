import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import DashboardScreen from './Screens/DashboardScreen';
import HomeScreen from './Screens/HomeScreen';

function App() {

    return (
        <>
            <Router>
                <div className="App relative h-screen">
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<HomeScreen />} />
                        <Route exact path="/dashboard" element={<DashboardScreen />} />
                    </Routes>
                    <Footer />

                </div>
            </Router>
        </>
    );
}

export default App;