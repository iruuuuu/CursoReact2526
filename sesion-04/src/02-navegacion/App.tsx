import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className='min-h-screen bg-slate-50'>
        <Navbar/>
        <main className="max-w-7xl mx-auto mt-10 bg-white p-6 rounded shadow-md border border-slate-200">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
        </div>
    );
};

export default App;