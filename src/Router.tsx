import Blog from "@pages/Blog";
import Main from "@pages/Main";
import BlogLayout from "@layouts/BlogLayouts";
import CoreLayout from "@layouts/CoreLayout";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
    { path: '/', element: <CoreLayout />, children: [
        { path: '', element: <Main />},
    ]},
    { path: '/blog', element: <BlogLayout />, children: [
        { path: '', element: <Blog />}
    ]}
])