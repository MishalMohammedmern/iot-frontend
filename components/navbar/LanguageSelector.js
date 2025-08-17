export default function LanguageSelector({ language, onChange, small }) {
  return (
    <select
      value={language}
      onChange={(e) => onChange(e.target.value)}
      className={`bg-transparent rounded px-2 py-1 cursor-pointer ${
        small ? "text-xs" : "text-sm border border-transparent hover:border-yellow-300 transition"
      }`}
    >
      <option value="en" className="text-black">EN</option>
      <option value="ar" className="text-black">AR</option>
    </select>
  );
}
