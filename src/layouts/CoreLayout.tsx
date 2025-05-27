import Footer from "@components/layout/Footer/Footer";
import Header from "@components/layout/Header/Header";
import PreLoadImages from "@components/PreLoadImages/PreLoadImage";
import { Outlet } from "react-router-dom";

export default function CoreLayout () {
    return <div className="min-h-full star_sky  flex flex-col">
      {/* desktop:h-full desktop:min-h-screen */}
    <div className="max-w-(--max-width) w-full min-h-screen m-auto  flex-col-between">
      <Header />
        <div className="text-foreground-primary min-h-full p-4">
            <Outlet />
        </div>
        <Footer />
    </div>
    <PreLoadImages />
  </div>
}