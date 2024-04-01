import Header from "@/components/Header/Header";
import FeaturedProperties from "@/components/Featured Properties/FeaturedProperties";
import Properties from "@/components/Properties/Properties";
import LatestNews from "@/components/Latest News/LatestNews";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <FeaturedProperties />
        <Properties context="home" />
        <LatestNews />
      </main> 
    </>
    
  );
}
