import { Link, useLocation } from "react-router-dom";

export default function Footer () {
    const { pathname } = useLocation();

    return <footer className="p-4 flex flex-col laptop:flex-row text-foreground-primary font-mono flex-row-between secondary-paragraph laptop:primary-paragraph">
        <Link viewTransition={true} to={pathname === '/' ? '/blog' : '/'} className="text-xl laptop:2xl hover:underline font-semibold decoration-2 decoration-accent">{pathname === '/' ? 'Blog' : 'Home'}</Link>
        <p className="text-foreground-primary text-center ">Built & Designed by <span className="text-foreground-secondary font-semibold">Vagelis Kosmiadis</span></p>
    </footer>
}