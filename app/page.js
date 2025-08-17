import { getApi } from "@/apiServices/apiServices";
import HeroComponent from "./home/Hero";
import OurTeamComponent from "./home/OurTeam";
import TestimonialComponent from "./home/Testimonial";

export const dynamic = "force-dynamic"; // 🚀 Always fetch fresh data (SSR, no cache)

export default async function Home() {
  const heroData = await getApi(`/heroes?populate=*`, { cache: "no-store" });
  const teamData = await getApi(`/team-lists?populate=*`, { cache: "no-store" });
  const testimonialData = await getApi(`/clients?populate=*`, { cache: "no-store" });

  return (
    <div>
      <HeroComponent heroData={heroData?.data} />
      <div id="our-team">
      <OurTeamComponent teamData={teamData?.data} />
      </div>
      <div id="blogs">
      <TestimonialComponent testimonialData={testimonialData?.data}/>
      </div>
    </div>
  );
}
