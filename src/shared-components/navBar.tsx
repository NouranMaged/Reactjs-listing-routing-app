import React from "react";
import "./shared-components.scss";

interface Props {
  name: string;
  href: string;
  current: boolean;
}
const navigation: Props[] = [
  { name: "Movies", href: "/movies", current: true },
  { name: "Series", href: "/series", current: false },
  { name: "Cartoons", href: "/Cartoons", current: false },
];

class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="topnav">
        {navigation?.map((tab, i) => {
          return (
            <a
              className={tab.current === true ? "active" : ""}
              href={tab.href}
              key={i}
            >
              {tab.name}
            </a>
          );
        })}
      </div>
    );
  }
}
export default NavBar;
