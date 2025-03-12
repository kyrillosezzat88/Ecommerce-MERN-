import { NavLink } from "react-router-dom";
import MenuLinks from "./Menu.json";

const HeaderLinks = ({ className }: { className?: string }) => {
  return (
    <ul className={className}>
      {MenuLinks.map((link, idx) => (
        <NavLink
          key={idx}
          to={link.url}
          className={({ isActive }) =>
            `uppercase text-sm font-bold pb-1 border-b-2 transition-all ${
              isActive ? "border-black" : "border-white"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </ul>
  );
};

export default HeaderLinks;
