import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Releases from "../components/Releases";
import VideoSection from "../components/VideoSection";
import Shows from "../components/Shows";
import SmsSignup from "../components/SmsSignup";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Releases />
      <VideoSection />
      <Shows />
      <SmsSignup />
      <Footer />
    </main>
  );
}
