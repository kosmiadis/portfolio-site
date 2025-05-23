import Header from "@components/layout/Header/Header";
import { Outlet } from "react-router-dom";

export default function BlogLayout () {
    return <div className="h-[100vh] bg-main-bg flex flex-col">
    <div className="max-w-(--max-width) w-full m-auto h-5/6">
      <Header />
        <div>
            <Outlet />
        </div>      
    </div>

  </div>
}