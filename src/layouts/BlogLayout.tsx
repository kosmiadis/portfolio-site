import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import { Outlet } from "react-router-dom";

export default function BlogLayout () {
    return <div className="min-h-screen squares flex flex-col">
    <div className="max-w-(--max-width) w-full m-auto min-h-screen flex flex-col-between">
      <Header />
        <div className="text-foreground-primary min-h-full">
            <Outlet />
        </div>   
        <Footer />
    </div>
  </div>
}