"use client";

const FooterLinks = ({ language, translations }) => {
  const t = translations[language] || translations.en;
  const isRTL = language === "ar";

  const links = [
    { href: "/about", label: t.about },
    { href: "/our-strategy", label: t.ourStrategy },
    { href: "/our-advantages", label: t.ourAdvantages },
    { href: "/social-responsibility", label: t.socialResponsibility },
    { href: "/our-services", label: t.ourServices },
  ];

  return (
    <nav className={`flex flex-wrap gap-8 text-white justify-center ${isRTL ? "md:order-2" : ""}`}>
      {links.map((link, idx) => (
        <a key={idx} href={link.href} className="hover:text-gray-300 transition-colors duration-200">
          {link.label}
        </a>
      ))}
    </nav>
  );
};

export default FooterLinks;
