import { TDrawer } from "@types";
import Drawer from "../drawer/Drawer";
import HeaderLinks from "../headerLinks/HeaderLinks";

const Menu = ({ isOpen, setIsDrawerOpen, dir }: TDrawer) => {
  return (
    <Drawer
      isOpen={isOpen}
      setIsDrawerOpen={setIsDrawerOpen}
      title="Menu"
      dir={dir}
    >
      <HeaderLinks className="flex flex-col gap-2" />
    </Drawer>
  );
};

export default Menu;
