import Blog from "@pages/Blog";
import Main from "@pages/Main";
import BlogLayout from "@layouts/BlogLayout";
import CoreLayout from "@layouts/CoreLayout";
import { createBrowserRouter } from "react-router-dom";
import Projects from "@pages/Projects";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        { path: '', element: <Main />},
        { path: 'projects', element: <Projects />}
    ]},
    { path: '/blog', element: <BlogLayout />, children: [
        { path: '', element: <Blog />}
    ]}
])