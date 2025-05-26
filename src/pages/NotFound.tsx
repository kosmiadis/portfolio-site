import Page from "@components/ui/Page/Page";
import { motion } from 'motion/react';
import { animationVariants } from '@animations/variants.ts';
import Button from "@components/ui/Button/Button";
import HtmlTag from "@components/ui/HtmlTag/HtmlTag";
import { useNavigate } from "react-router-dom";

export default function NotFound () {

    const navigate = useNavigate();

    function handleClickGoHome () {
        navigate('/', { viewTransition: true });
    }

    return <Page>
        <div className="flex-col-between items-center text-center">
            <motion.h1 
                initial={animationVariants.fadeOut} 
                animate={animationVariants.fadeIn} 
                transition={animationVariants.transitions} 
                className="important-heading ">
                    <HtmlTag tag="h1">Oopps! 404 Page Error</HtmlTag>
            </motion.h1>

            <motion.p 
                initial={animationVariants.fadeOut} 
                animate={animationVariants.fadeIn} 
                transition={{ ...animationVariants.transitions, delay: 0.2 } } 
                className="secondary-paragraph">
                    <HtmlTag tag="p">This means that the page you are looking for does not exist!</HtmlTag>
            </motion.p>
        
            <div className="mt-5">
                <Button onClick={handleClickGoHome}>Go Home</Button>
            </div>
        </div>
    </Page>
}