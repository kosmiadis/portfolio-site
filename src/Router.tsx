import Blog from "@pages/Blog";
import Main from "@pages/Main";
import BlogLayout from "@layouts/BlogLayout";
import CoreLayout from "@layouts/CoreLayout";
import { createBrowserRouter } from "react-router-dom";
import Projects from "@pages/Projects";
import NotFound from "@pages/NotFound";
import ErrorLayout from "@layouts/ErrorLayout";
import Skills from "@pages/Skills";
import About from "@pages/About";
import CV from "@pages/CV";
import Contact from "@pages/Contact";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        { path: '', element: <Main />},
        { path: 'projects', element: <Projects />},
        { path: 'skills', element: <Skills />},
        { path: 'about', element: <About />},
        { path: 'cv', element: <CV />},
        { path: 'contact', element: <Contact />},

    ], errorElement: <ErrorLayout><NotFound /></ErrorLayout>},
    { path: '/blog', element: <BlogLayout />, children: [
        { path: '', element: <Blog />}
    ], errorElement: <ErrorLayout><NotFound /></ErrorLayout>},
])