// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import "./Pages_css/App.css";
import Home from "./Home";
import Office365Home from "./Office365/pages/Home";
import Website from "./Website";
import Footer from "./Footer";
import Contact from "./ContactUs";
import MobileAppDevelopment from "./MobileAppDevelopment";
import Azure from "./Azure";
import AWS from "./AWS";
import GCP from "./GCP";
import Consulting from "./Consulting";
import Courses from './content.js';
import Datascience from './python_datascience.js';
import Python from './python.js';
import ML from './machinelearning.js';
import Web from './webdevlop.js';
import About from "./About";
import MainOutlet from './components/MainOutlet';

<Link to='/posts'>Posts</Link>;

function App() {
    return (
        <Router>
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
