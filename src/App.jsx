
import Navbar from './components/Navbar';
import './App.css';
import { Toaster } from 'react-hot-toast';
import MainLayout from './components/MainLayout';
import { Suspense } from 'react';


function App() {

    const dataPromise=async()=>{
        const res = await fetch('/technology_stack.json');
        const data = await res.json();
        return data;
    }
    return (
        <div>
            <Navbar />
            <Suspense fallback={<p>Loading....</p>}>
                <MainLayout dataPromise = {dataPromise()}/>
            </Suspense>            
            <h2>Footer</h2>
            <Toaster />
        </div>
    );
}

export default App;
