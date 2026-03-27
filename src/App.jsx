import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Expertise from "./pages/Expertise";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

/* 🔥 Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>

      {/* 🔥 Fix scroll position on navigation */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;