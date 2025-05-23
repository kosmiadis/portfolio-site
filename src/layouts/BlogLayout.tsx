import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import { Outlet } from "react-router-dom";

export default function BlogLayout () {
    return <div className="h-[100vh] bg-main-bg flex flex-col">
    <div className="max-w-(--max-width) w-full m-auto h-full flex flex-col">
      <Header />
        <div className="text-foreground-primary h-full">
            <Outlet />
        </div>   
        <div className='py-4'>
          <Footer />
        </div>
    </div>
  </div>
}