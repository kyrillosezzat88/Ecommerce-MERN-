export type TDrawer = {
  isOpen: boolean;
  setIsDrawerOpen: (value: boolean) => void;
  dir?: "rtl" | "ltr";
};
