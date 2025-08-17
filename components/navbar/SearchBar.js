import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/constants/data";

export default function SearchBar({ setShowSearch }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value) {
      setSuggestions([]);
      return;
    }
    const matches = services.filter((s) =>
      s.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(matches);
  };

  const handleSuggestionClick = (service) => {
    const slug = service.toLowerCase().replace(/ /g, "-").replace(/[&…]/g, "");
    router.push(service.toLowerCase().includes("team") ? "/team-services" : `/services/${slug}`);
    resetSearch();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const match = services.find((s) =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (match) {
      handleSuggestionClick(match);
    } else {
      alert("No matching service found!");
    }
  };

  const resetSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
    setShowSearch(false);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="flex flex-col relative">
      <input
        type="text"
        placeholder="Search services..."
        value={searchQuery}
        onChange={handleInputChange}
        className="px-2 py-1 rounded text-white border border-white w-64"
      />
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white text-black rounded shadow mt-1 max-h-60 overflow-y-auto z-50">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(s)}
              className="px-2 py-1 cursor-pointer hover:bg-gray-200"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
      <button type="submit" className="hidden">Search</button>
    </form>
  );
}
