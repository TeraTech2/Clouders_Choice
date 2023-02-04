// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import "./Pages_css/App.css";
import Home from "./pages/Home";
import Office365Home from "./Office365/pages/Home";
import Website from "./pages/Website";
import Footer from "./components/Footer";
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
import MainOutlet from './components/MainOutlet';
import ScrollToTop from "./components/ScrollToTop";

<Link to='/posts'>Posts</Link>;

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                {/* Nested + Shared routes */}
                <Route path="/" element={<MainOutlet/>}>
                    <Route index element={<Home/>} />
                    <Route path='/About' exact element={<About/>} />
                    <Route path='/Webdevelopment' exact element={<Website/>} />
                    <Route path='/Contact' exact element={<Contact />} />
                    <Route path='/MobileAppDevelopment' exact element={<MobileAppDevelopment />} />
                    <Route path='/MicrosoftAzure' exact element={<Azure />} />
                    <Route path='/AmazonWebServices' exact element={<AWS />} />
                    <Route path='/GoogleCloudPlatform' exact element={<GCP />} />
                    <Route path='/Consulting' exact element={<Consulting />} />
                    <Route path='/Training&Development' exact element={<Courses/>} />
                    <Route path='/Datascience' exact element={<Datascience />} />
                    <Route path='/Python' exact element={<Python />} />
                    <Route path='/ML' exact element={<ML />} />
                    <Route path='/Web' exact element={<Web />} />
                    <Route path="/Office365" element={<Office365Home/>}></Route>
                </Route>

            </Routes>

            <Footer />

        </Router>
    );
}

export default App;
