import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import LatestWorks from "@/components/latest-works/LatestWorks";
import Skills from "@/components/skills/Skills";
import Stats from "@/components/stats/Stats";

export default function Home() {
    return (
        <main>
            <Banner />
            <Stats />
            <About />
            <Skills />
            <LatestWorks />
        </main>
    )
}
