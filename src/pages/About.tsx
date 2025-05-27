import Page from "@components/ui/Page/Page"
import MyImage from '@assets/pfp.png';
import ParagraphSection from "@components/about/ParagraphSection";
import AnimateChidren from "@components/ui/AnimateChildren/AnimateChildren";

export default function About () {
    return <Page>
        <div className="flex flex-col mt-20 gap-10 px-5">
            <h2 className="page-hero-text text-4xl font-cal-sans ">About Me</h2>

            <div className="flex flex-col">
                <div className="text-justify text-xl flex flex-col gap-10 laptop:gap-6">
                    <AnimateChidren>
                    <ParagraphSection title="Who Am I?">
                        <p>I'm a self-taught web developer with a passion for building interactive, user-focused applications. I started learning programming at 14, fueled by curiosity and YouTube tutorials. Since then, I've developed few projects from real-time chat apps to full-stack tools like a URL shortener.</p>
                    </ParagraphSection>
                    
                    <ParagraphSection title="What technologies do I use?">
                        <p>My main stack includes <b>React, Node.js, MongoDB, and TypeScript</b>, and I love working on both the <b>frontend and backend</b>. I’m especially interested in modern UI libraries, real-time communication with WebSockets, and building tools that are not just functional, but enjoyable to use.</p>
                    </ParagraphSection>
                
                    <ParagraphSection title="What are my current goals?">
                        <p>I'm currently preparing for the National Exams to <b>study Computer Science at the University of Thessaloniki</b>. My other goals are to improve my Web Development skills, including getting myself into microservices structured apps. When I'm not coding, I enjoy exploring design inspiration, reading tech blogs, working out, reading books or listening to music.</p>    
                    </ParagraphSection>
                    </AnimateChidren>
                </div>
                
                <AnimateChidren>
                    <div className="flex items-center flex-wrap justify-center laptop:justify-start laptop:flex-nowrap gap-6 my-20">
                        <img className="w-[300px] laptop:w-[250px] rounded-full shadow-[0px_0px_20px] shadow-accent" src={MyImage}/>
                        <p className="text-4xl font-cal-sans text-center laptop:text-left"> "I'm always open to feedback, collaboration, or just connecting with other developers!" </p>
                    </div>
                </AnimateChidren>
            </div>
        </div>

    </Page>
}