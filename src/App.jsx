
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Navbar />
      <div className="min-h-screen pt-16">
        <AppRoutes />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
