"use client";

import { useEffect, useState } from "react";
import { getApi } from "@/apiServices/apiServices";
import HeroComponent from "./home/Hero";
import OurTeamComponent from "./home/OurTeam";
import TestimonialComponent from "./home/Testimonial";

export default function Home() {
  const [heroData, setHeroData] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [heroRes, teamRes, testimonialRes] = await Promise.all([
          getApi(`/heroes?populate=*`),
          getApi(`/team-lists?populate=*`),
          getApi(`/clients?populate=*`),
        ]);
        setHeroData(heroRes?.data);
        setTeamData(teamRes?.data);
        setTestimonialData(testimonialRes?.data);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div>
      <HeroComponent heroData={heroData} />
      <OurTeamComponent teamData={teamData} />
      <TestimonialComponent testimonialData={testimonialData} />
    </div>
  );
}
