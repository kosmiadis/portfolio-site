import Footer from "@components/layout/Footer/Footer";
import Header from "@components/layout/Header/Header";
import { Outlet } from "react-router-dom";

export default function CoreLayout () {
    return <div className="min-h-full lines flex flex-col">
    <div className="max-w-(--max-width) w-full laptop:m-auto min-h-screen flex-col-between">
      <Header />
        <div className="text-foreground-primary h-full p-4">
            <Outlet />
        </div>
        <Footer />
    </div>
  </div>
}