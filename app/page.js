"use client"
import HeroComponent from "./home/Hero";
import OurTeamComponent from "./home/OurTeam";
import TestimonialComponent from "./home/Testimonial";

export default function Home() {
  return (
    <div className="">
        <HeroComponent/>
        <OurTeamComponent/>
        <TestimonialComponent/>
    </div>
  );
}
