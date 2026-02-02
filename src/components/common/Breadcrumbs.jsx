//src/components/common/Breadcrumbs.jsx

import { Link } from "react-router-dom";

function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav className="mb-6 text-sm text-white/50">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              {!isLast ? (
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              ) : (
                <span className="text-white">{item.label}</span>
              )}

              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
