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

function App() {
    return (
        <>
            <Router>
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

export default App;
