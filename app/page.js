
import { getApi } from "@/apiServices/apiServices";
import HeroComponent from "./home/Hero";
import OurTeamComponent from "./home/OurTeam";
import TestimonialComponent from "./home/Testimonial";


export default async function Home() {
  const heroData = await getApi(`/heroes?populate=*`);
  const teamData = await getApi(`/team-lists?populate=*`);
  const testimonialData = await getApi(`/clients?populate=*`);
  return (
    <div className="">
      <HeroComponent heroData={heroData?.data} />
      <OurTeamComponent teamData={teamData?.data} />
      <TestimonialComponent testimonialData={testimonialData?.data}/>
    </div>
  );
}
