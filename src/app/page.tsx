import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import LatestWorks from "@/components/latest-works/LatestWorks";

export default function Home() {
  return (
    <main>
      <Banner/>
      <About/>
      <LatestWorks/>
    </main>
  )
}
