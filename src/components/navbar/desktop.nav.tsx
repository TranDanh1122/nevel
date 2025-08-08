import React from "react";
import { MENU_ITEMS } from "@/commons/content";
import ItemNavbar from "./components/item.component";
const DesktopNavbar: React.FC = (): React.JSX.Element => {
  const menuItems = React.useMemo(() => {
    return MENU_ITEMS.map((item, index) => (
      <ItemNavbar key={index} linked={item.linked} label={item.label} />
    ));
  }, [])
  return (<ul className="flex items-center">
    {menuItems}
  </ul>
  );
}
export default React.memo(DesktopNavbar);