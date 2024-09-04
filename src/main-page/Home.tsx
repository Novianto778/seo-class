import UpcomingEventTimeline from "@/components/features/events/UpcomingEventTimeline";
import Feature from "@/components/features/home/Feature";
import Hero from "@/components/features/home/Hero";
import NewsSection from "@/components/features/news/NewsSection";

type Props = {};

const Home = (props: Props) => {
  return (
    <main>
      <Hero />
      <Feature />
      <NewsSection />
      <UpcomingEventTimeline />
    </main>
  );
};

export default Home;
