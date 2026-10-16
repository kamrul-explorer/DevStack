
import Navbar from './components/Navbar';
import './App.css';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';

function App() {
    return (
        <div>
            <Navbar />
            <MainLayout/>
            <h2>Body</h2>
            <h2>Footer</h2>
            <Toaster />
        </div>
    );
}

export default App;
