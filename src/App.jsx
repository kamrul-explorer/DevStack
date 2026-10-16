
import Navbar from './components/Navbar';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
    return (
        <div>
            <Navbar />
            <h2>Body</h2>
            <h2>Footer</h2>
            <Toaster />
        </div>
    );
}

export default App;
