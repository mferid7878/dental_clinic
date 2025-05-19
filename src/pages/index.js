// import ServiceCard from "@/components/Services/ServiceCard";
import Welcome from "@/components/Welcome/Welcome";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import MeetOurDoctor from "@/components/MeetOurDoctor/MeetOurDoctor";
import LastestUpdates from "@/components/LastestUpdates/LastestUpdates";
import Gallery from "@/components/Gallery/Gallery";
import Recomandations from "@/components/Recomandations/Recomandations";
import Footer1 from "@/components/Footer1/Footer1";
import Footer2 from "@/components/Footer2/Footer2";
export default function Home() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Services />
      <MeetOurDoctor />
      <LastestUpdates />
      <Gallery />
      <Recomandations />
      <Footer1 />
      <Footer2 />
    </>
  );
}
