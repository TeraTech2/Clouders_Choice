import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Pages_css/App.css";
import Home from "./pages/Home";
import Office365Home from "./Office365/pages/Home";
import Website from "./pages/Website";
import Contact from "./pages/ContactUs";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import Azure from "./pages/Azure";
import AWS from "./pages/AWS";
import GCP from "./pages/GCP";
import Consulting from "./pages/Consulting";
import Courses from './pages/Courses.js';
import Datascience from './pages/python_datascience.js';
import Python from './pages/python.js';
import ML from './pages/machinelearning.js';
import Web from './pages/webdevlop.js';
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import './sass/Theme/theme.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import { useState } from "react";
import { useEffect } from "react";

function App() {

    // detect online/offline
    const [online, setOnline] = useState(true);
    useEffect(() => {
        if (window) {
            window.addEventListener("online", () => setOnline(true));
            window.addEventListener("offline", () => setOnline(false));
        }

        return () => {
            window.addEventListener("online", () => { });
            window.addEventListener("offline", () => { });
        }
    }, [])

    return (
        <>
            <Router>
                {
                    !online && <OfflineComponent/>
                }
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path='/About' exact element={<About />} />
                    <Route path='/Webdevelopment' exact element={<Website />} />
                    <Route path='/Contact' exact element={<Contact />} />
                    <Route path='/MobileAppDevelopment' exact element={<MobileAppDevelopment />} />
                    <Route path='/MicrosoftAzure' exact element={<Azure />} />
                    <Route path='/AmazonWebServices' exact element={<AWS />} />
                    <Route path='/GoogleCloudPlatform' exact element={<GCP />} />
                    <Route path='/Consulting' exact element={<Consulting />} />
                    <Route path='/Training&Development' exact element={<Courses />} />
                    <Route path='/Datascience' exact element={<Datascience />} />
                    <Route path='/Python' exact element={<Python />} />
                    <Route path='/ML' exact element={<ML />} />
                    <Route path='/Web' exact element={<Web />} />
                    <Route path="/Office365" element={<Office365Home />}></Route>
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

const OfflineComponent = () => {
    return <div className="alert alert-danger alert-dismissible fade show d-flex justify-content-between align-items-start" role="alert">
        <div>
            <h4 className="alert-heading">Bad Network</h4>
            <p>
                Seems your internet connection is too slow, or you're Offline. Connect to a good network to make sure webapp functions properly.
            </p>
        </div>
        <button type="button" className="btn-close btn btn-lg" data-bs-dismiss="alert" aria-label="Close">
            <span aria-hidden="true"></span>
        </button>
    </div>
}

export default App;
