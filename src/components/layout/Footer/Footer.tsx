import { Link, useLocation } from "react-router-dom";

export default function Footer () {
    const { pathname } = useLocation();

    return <footer className="text-foreground-primary font-mono flex-row-between">
        <Link viewTransition={true} to={pathname === '/' ? '/blog' : '/'} className="hover:underline font-semibold decoration-2 decoration-accent primary-paragraph">{pathname === '/' ? 'Blog' : 'Home'}</Link>
        <p className="text-foreground-primary primary-paragraph">Built & Designed by <span className="text-foreground-secondary font-semibold">Vagelis Kosmiadis</span></p>
    </footer>
}