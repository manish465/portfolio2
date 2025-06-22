import { Link } from "react-router-dom";
import MenuContentCard from "./MenuContentCard";

const menuItemList = [
  {
    title: "Overview",
    backgroundClassList: "background-pic pic-1",
    isDownloadable: false,
    path: "/",
  },
  {
    title: "Projects",
    backgroundClassList: "background-pic pic-2",
    isDownloadable: false,
    path: "/projects",
  },
  {
    title: "Resume",
    backgroundClassList: "background-pic pic-3",
    isDownloadable: true,
  },
];

const MenuContent = () => {
  return (
    <section id='menu-content'>
      {menuItemList.map((menuItem, key) => {
        return menuItem.isDownloadable ? (
          <a href={require("../assets/Manish_Sahu_Software_Engineer.pdf")}>
            <MenuContentCard key={key} menuItem={menuItem} />
          </a>
        ) : (
          <Link key={key} to={menuItem.path}>
            <MenuContentCard key={key} menuItem={menuItem} />
          </Link>
        );
      })}
    </section>
  );
};

export default MenuContent;
