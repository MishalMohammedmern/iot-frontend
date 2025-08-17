import { notFound } from "next/navigation";
import Hero from "./components/Hero";
import LegalConsultationPage from "./components/Content";

const servicesData = {
    "legal-consultation-services": {
        title: "Legal Consultation Services",
        content: "We provide comprehensive legal consultation services for individuals and businesses...",
    },
    "foreign-investment-services": {
        title: "Foreign Investment Services",
        content: "Helping investors establish and grow their business in new markets...",
    },
    "contracts": {
        title: "Contracts",
        content: "Drafting and reviewing contracts with legal expertise...",
    },
};

export default async function ServiceDetail({ params }) {
    const { slug } = params; 
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="">
            <Hero />
            <LegalConsultationPage />
        </div>
    );
}
