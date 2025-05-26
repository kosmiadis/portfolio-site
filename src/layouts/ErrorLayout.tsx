import Header from "@components/layout/Header/Header";
import Footer from "@components/layout/Footer/Footer";
import type { ReactNode } from "react";


type ErrorLayoutProps = { children: ReactNode }
export default function ErrorLayout ({children}: ErrorLayoutProps) {
    return <div className="min-h-full star_sky  flex flex-col">
      {/* desktop:h-full desktop:min-h-screen */}
    <div className="max-w-(--max-width) w-full min-h-screen m-auto  flex-col-between">
      <Header />
        <div className="text-foreground-primary min-h-full p-4">
            {children}
        </div>
        <Footer />
    </div>
  </div>
}