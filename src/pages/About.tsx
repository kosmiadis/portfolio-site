import Page from "@components/ui/Page/Page"
import MyImage from '@assets/me.jpg';
import ParagraphSection from "@components/about/ParagraphSection";
import AnimateChidren from "@components/ui/AnimateChildren/AnimateChildren";

export default function About () {
    return <Page>
        <div className="flex flex-col mt-20 gap-10 px-5">
            <h2 className="page-hero-text text-4xl font-cal-sans ">About Me</h2>
    
            <div className="flex flex-col min-w-full">
                <div className="text-xl min-w-full flex flex-col gap-10 laptop:gap-6">
                    <AnimateChidren>
                        <ParagraphSection title="Who Am I?">
                            <p>
                                I'm a self-taught web developer with a passion for building interactive, user-focused applications.
                                I started learning programming at 14, fueled by curiosity and YouTube tutorials. 
                                Since then, I've developed a website for a local furniture shop, and a few projects from real-time chat apps to full-stack tools like a URL shortener.
                            </p>
                        </ParagraphSection>

                        <ParagraphSection title="What technologies do I use?">
                            <p>
                                My main stack includes <b>React, Node.js, MongoDB, and TypeScript</b>, and I love working on both the&nbsp;
                                <b>frontend and backend</b>. I’m especially interested in building full stack interactive web applications and tools that are not just functional, but enjoyable to use.
                            </p>
                        </ParagraphSection>

                        <ParagraphSection title="What are my current goals?">
                           <p>
                                I am currently in the second semester of my studies, maintaining an average grade of 8.6/10.
                                I am competing in the <a className="hover:text-accent border-b-1 border-b-accent hover:border-b-0" target="_blank" href="https://netcompany.com/hackathon-thessaloniki-2026/">Netcompany Thessaloniki AI Hackathon</a>&nbsp;
                                as part of a four-member team, where we focus on applying AI to real-world problems.
                                Through my studies and projects, I’m deepening my skills in modern web technologies and efficient development workflows.
                                Long-term, I aspire to build and lead my own software company.
                            </p>   
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