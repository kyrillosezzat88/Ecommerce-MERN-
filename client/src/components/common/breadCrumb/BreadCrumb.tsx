import { Link } from "react-router-dom";
import { type TBreadCrumb } from "@types";

const BreadCrumb = ({ title, links }: TBreadCrumb) => {
  return (
    <div className="mt-20 bg-Ivory">
      <div className="container">
        <div className="flex justify-center items-center h-full flex-col gap-3 min-h-52">
          <h1 className="font-bold text-3xl uppercase">{title}</h1>
          <ul className="flex gap-2">
            {links.map((link, idx) => (
              <li
                key={`${link.title}-${idx}`}
                className="flex items-center gap-2"
              >
                {link.link ? (
                  <Link to={link.link} className="hover:underline">
                    {link.title}
                  </Link>
                ) : (
                  <span>{link.title}</span>
                )}
                {idx < links.length - 1 && <span>/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
