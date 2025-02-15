export default function Rbutton({ children }) {
    return <button className="bg-greenFg text-white px-4 py-2 rounded-md">{children || "Click Me"}</button>;
}