// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollTop from "./components/ScrollTop";
import Book from './components/Books';
import Home from './pages/Homepage';
import Projects from './pages/Projects';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css'
import './index.css'; // or './styles.css' depending on your file name


function App() {
  return (
    <>
      <Router>
        <ScrollTop /> {/* Place it here, outside <Routes> */}
        <Navbar />
        <Routes>
           <Route path="/admin/login" element={<AdminLogin />} />
  <Route
    path="/admin/dashboard"
    element={
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    }
  />
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path='/home' element={<Navigate to='/' />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
