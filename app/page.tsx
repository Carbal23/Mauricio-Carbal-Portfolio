// Home.tsx
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Experiences from "@/components/Experiences";
import { useTranslations } from "next-intl";


export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <About />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
