"use client";
import { Twitter, Facebook } from "lucide-react";

const SocialLinks = () => (
  <div className="flex items-center gap-3">
    <a href="#" className="text-white hover:text-gray-300 transition" aria-label="Twitter">
      <Twitter className="w-5 h-5" />
    </a>
    <a href="#" className="text-white hover:text-gray-300 transition" aria-label="Facebook">
      <Facebook className="w-5 h-5" />
    </a>
    <a href="#" className="text-white hover:text-gray-300 transition text-lg font-bold" aria-label="Google Plus">
      G+
    </a>
  </div>
);

export default SocialLinks;
