
import { getHeroApi } from "@/apiServices/apiServices";
import HeroComponent from "./home/Hero";
import OurTeamComponent from "./home/OurTeam";
import TestimonialComponent from "./home/Testimonial";


export default async function Home() {
  const heroData = await getHeroApi();
  return (
    <div className="">
        <HeroComponent heroData={heroData}/>
        <OurTeamComponent/>
        <TestimonialComponent/>
    </div>
  );
}
