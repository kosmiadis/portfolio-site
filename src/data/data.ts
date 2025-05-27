import { getIcon } from "@util/getIcons";
import { getProjectImages } from "@util/imageLoader";

export type ProjectI = { 
    id: number, 
    title: string, 
    description: string, 
    techStack: string[], 
    featuredImg: string, 
    images: string[],
    github: string, 
}



type APP_DATA_TYPE = {
    MainContent: { navigation: { label: string, to: string }[] },
    ProjectsPage: { projects: ProjectI[] },
    SkillsPage: { technologies: { techStack: {tag: string, icon: string}[], frontend: {tag: string, icon: string}[] , backend: {tag: string, icon: string}[], experienceIn: {tag: string, icon: string}[] }},
}

export const APP_DATA: APP_DATA_TYPE = {
    MainContent: {
        navigation: [
            { label: 'Projects', to: '/projects'},
            { label: 'Skills', to: '/skills'},
            { label: 'About', to: '/about'},
            { label: 'CV', to: '/cv'},
            { label: 'Contact', to: '/contact'},
        ]
    },
    ProjectsPage: {
        projects: [{ 
           id: 1,
           title: 'Realtime Chat Application', 
           description: 'A modern, full-stack realtime chat application featuring user authentication, live messaging, and online/offline presence detection. Built with Socket.IO for bi-directional communication and Radix UI for a polished interface, the app supports theming (light/dark mode), responsive design, and smooth user feedback through Sonner toasts. TanStack Query handles data fetching and caching, ensuring a seamless and reactive user experience. Users can send messages, see others’ online status in real time, and enjoy a sleek, highly interactive interface.', 
           techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Typescript', 'Socket.io'],
           featuredImg: getProjectImages('chat-app')[0], 
           images: getProjectImages('chat-app'),
           github: 'https://github.com/kosmiadis/ChatAppFrontend',
        },
        { 
            id: 2,
            title: 'Url Shortener', 
            description: 'A full-stack URL shortener application with real-time analytics and secure user interaction. Each generated URL includes detailed usage statistics visualized through interactive charts. Users can manage their links with visibility toggles, enabling or disabling access. The project emphasizes both frontend interactivity and backend security, incorporating features like JWT authentication and encrypted user data.', 
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Typescript'],
            featuredImg: getProjectImages('url_shortener')[0], 
            images: getProjectImages('url_shortener'),
            github: 'https://github.com/kosmiadis/short-it',
        },
        { 
            id: 3,
            title: 'Furniture Restoration Landing Page', 
            description: 'A simple landing page built for a local furniture restoration business. Developed using EJS templating and Express.js, the site includes a functional contact form with real-time email validation and integrated email delivery via Nodemailer. This project emphasizes clean design for small business needs.', 
            techStack: ['Express.js', 'EJS', 'Node.js'],
            featuredImg: getProjectImages('chalk59')[0], 
            images: getProjectImages('chalk59'),
            github: 'https://github.com/kosmiadis/chalk59_website',
        },
        { 
            id: 4,
            title: 'MyLibrary', 
            description: 'A full-stack digital bookshelf where users can manage the books they own and track those they plan to buy in a dedicated wishlist section. The application features authentication, form validation, and persistent state using cookies. The frontend offers a responsive and animated UI built with NextUI and Framer Motion, while the backend ensures secure data handling and user authentication using JWT and encrypted credentials.', 
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            featuredImg: getProjectImages('my_library')[0], 
            images: getProjectImages('my_library'),
            github: 'https://github.com/kosmiadis/MyLibrary',
            
        },
        { 
            id: 5,
            title: 'Simple Landing Page', 
            description: 'A pixel-perfect recreation of a pre-built WordPress theme, developed to sharpen my CSS and UI implementation skills. The design was replicated using React and TailwindCSS, with state handled via Zustand.', 
            techStack: ['React.js', 'TailwindCSS', 'Zustand'],
            featuredImg: getProjectImages('renovation_site')[0], 
            images: getProjectImages('renovation_site'),
            github: 'https://github.com/kosmiadis/Renovation-Site/tree/main',
        }],
    },
    SkillsPage: {
        technologies: {
            techStack: [
                {tag: 'React', icon: getIcon('react')},
                {tag: 'TailwindCSS', icon: getIcon('tailwindcss')},
                {tag: 'MongoDB', icon: getIcon('mongodb')},
                {tag: 'Redux', icon: getIcon('redux')},
                {tag: 'Node', icon: getIcon('nodejs')},
                {tag: 'Express', icon: getIcon('express')},
                {tag: 'Typescript', icon: getIcon('typescript')},
            ],

            frontend: [
                { tag: 'HTML5', icon: getIcon('html5')}, 
                { tag: 'CSS3', icon: getIcon('css3')}, 
                { tag: 'JavaScript', icon: getIcon('javascript')}, 
                { tag: 'React', icon: getIcon('react')}, 
                { tag: 'TailwindCSS', icon: getIcon('tailwindcss')}, 
                {tag: 'SASS', icon: getIcon('sass')},
                {tag: 'Typescript', icon: getIcon('typescript')},
            ],
            backend: [
                {tag: 'Node', icon: getIcon('nodejs')},
                {tag: 'Express', icon: getIcon('express')},
                {tag: 'Typescript', icon: getIcon('typescript')},
                {tag: 'EJS', icon: getIcon('ejs')},

            ], 
            experienceIn: [
                {tag: 'Python' , icon: getIcon('python')},
                {tag: 'Django' , icon: getIcon('django')},
                {tag: 'Java' , icon: getIcon('java')},
                {tag: 'Docker' , icon: getIcon('docker')},
                {tag: 'Bootstrap' , icon: getIcon('bootstrap')},
                {tag: 'Wordpress', icon: getIcon('wordpress')}
            ]
        }
    },
    // AboutPage: {
    //     hero: 'A few words about me...',
    //     about: {
    //         summary: "I'm a self-taught web developer with a passion for building interactive, user-focused applications. I started learning programming at 14, fueled by curiosity and YouTube tutorials. Since then, I've developed a range of projects from real-time chat apps to full-stack tools like URL shorteners and digital bookshelves.",
    //         techStack: "My main stack includes <b>React, Node.js, MongoDB, and TypeScript</b>, and I love working on both the <b>frontend and backend</b>. I’m especially interested in modern UI libraries, real-time communication with WebSockets, and building tools that are not just functional, but enjoyable to use.",
    //         goals: "I'm currently preparing for the National Exams to <b>study Computer Science at the University of Thessaloniki</b>. When I'm not coding, I enjoy exploring design inspiration, reading tech blogs, working out, reading books or listening to music.",
    //         closing: "I'm always open to feedback, collaboration, or just connecting with other developers!"
    //     }
    // }
}