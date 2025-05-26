export type ProjectI = { 
    id: number, 
    title: string, 
    description: string, 
    techStack: string[], 
    featuredImg: string, 
    images: string[], 
    github: string, 
    tags: { 
        frontend?: string[], 
        backend?: string[] 
    }
    to: string;
}



type APP_DATA_TYPE = {
    MainContent: { navigation: { label: string, to: string }[] },
    ProjectsPage: { projects: ProjectI[] },
    SkillsPage: { technologies: [] },
    
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
           featuredImg: '/chat-app/chat_1.png', 
           images: [
               '/chat-app/chat_1.png',
               '/chat-app/chat_2.png',
               '/chat-app/chat_3.png',
               '/chat-app/chat_4.png',
               '/chat-app/chat_5.png',
           ],
           github: 'https://github.com/kosmiadis/ChatAppFrontend',
           tags: {
               frontend: ['redix-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'tailwindcss', 'socket.io-client', 'react-router-dom', 'lucide-react', 'sonner'],
               backend: ['express', 'socket.io', 'mongoose', 'bcrypt', 'jwt', 'multer', 'cookie-parser', 'validator', 'crypto']
           },
           to: '/projects/real-time-chat-application'
        },
        { 
            id: 2,
            title: 'Url Shortener', 
            description: 'A full-stack URL shortener application with real-time analytics and secure user interaction. Each generated URL includes detailed usage statistics visualized through interactive charts. Users can manage their links with visibility toggles, enabling or disabling access. The project emphasizes both frontend interactivity and backend security, incorporating features like JWT authentication and encrypted user data.', 
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Typescript'],
            featuredImg:'/url_shortener/url_1.png', 
            images: [
                '/url_shortener/url_1.png',
                '/url_shortener/url_2.png',
                '/url_shortener/url_3.png',
                '/url_shortener/url_4.png',
                '/url_shortener/url_5.png',
                '/url_shortener/url_6.png',
                '/url_shortener/url_7.png',
                '/url_shortener/url_8.png',
                '/url_shortener/url_9.png',
           ],
            github: 'https://github.com/kosmiadis/short-it',
            tags: {
                frontend: ['tanstack-query', 'framer-motion', 'react-icons', 'react-router-dom', 'recharts.js', 'tailwindcss'],
                backend: ['express', 'mongodb', 'bcrypt', 'cookie-parser', 'crypto', 'jwt']
            },
           to: '/projects/url-shortener'
        },
        { 
            id: 3,
            title: 'Furniture Restoration Landing Page', 
            description: 'A simple landing page built for a local furniture restoration business. Developed using EJS templating and Express.js, the site includes a functional contact form with real-time email validation and integrated email delivery via Nodemailer. This project emphasizes clean design for small business needs.', 
            techStack: ['Express.js', 'EJS', 'Node.js'],
            featuredImg: '/chalk59/chalk59_1.png',
            images: [
                '/chalk59/chalk59_1.png',
                '/chalk59/chalk59_2.png',
                '/chalk59/chalk59_3.png',
                '/chalk59/chalk59_4.png',
                '/chalk59/chalk59_5.png',
            ],
            github: 'https://github.com/kosmiadis/chalk59_website',
            tags: {
                frontend: ['ejs', 'css3'],
                backend: ['express', 'nodemailer', 'cookie-parser', 'crypto']
            },
           to: '/projects/furniture-restoration-landing-page'
        },
        { 
            id: 4,
            title: 'MyLibrary', 
            description: 'A full-stack digital bookshelf where users can manage the books they own and track those they plan to buy in a dedicated wishlist section. The application features authentication, form validation, and persistent state using cookies. The frontend offers a responsive and animated UI built with NextUI and Framer Motion, while the backend ensures secure data handling and user authentication using JWT and encrypted credentials.', 
            techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
            featuredImg: '/my_library/library_1.png', 
            images: [
                '/my_library/library_1.png',
                '/my_library/library_2.png',
                '/my_library/library_3.png',
                '/my_library/library_4.png',
                '/my_library/library_5.png',
            ],
            github: 'https://github.com/kosmiadis/MyLibrary',
            tags: {
                frontend: ['next-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'framer-motion', 'react-router-dom', 'uuid', 'react-cookie'],
                backend: ['express', 'mongodb', 'bcrypt', 'express-validator', 'cookie-parser', 'jwt', 'uui']
            },
           to: '/projects/my-library'
            
        },
        { 
            id: 5,
            title: 'Simple Landing Page', 
            description: 'A pixel-perfect recreation of a pre-built WordPress theme, developed to sharpen my CSS and UI implementation skills. The design was replicated using React and TailwindCSS, with state handled via Zustand.', 
            techStack: ['React.js', 'TailwindCSS', 'Zustand'],
            featuredImg: '/renovation_site/renovation_1.png', 
            images: [
                '/renovation_site/renovation_1.png',
                '/renovation_site/renovation_2.png',
                '/renovation_site/renovation_3.png',
                '/renovation_site/renovation_4.png',
                '/renovation_site/renovation_5.png',
                '/renovation_site/renovation_6.png',
                '/renovation_site/renovation_7.png',
                '/renovation_site/renovation_8.png',
            ],
            github: 'https://github.com/kosmiadis/Renovation-Site/tree/main',
            tags: {
                frontend: ['next-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'framer-motion', 'react-router-dom', 'uuid', 'react-cookie'],
            },
           to: '/projects/simple-landing-page'
        }],
    },
    SkillsPage: {
        technologies: []
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