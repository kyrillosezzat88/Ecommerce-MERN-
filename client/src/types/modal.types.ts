import { ReactNode } from "react";

export type TModal = {
  title?: string;
  content: ReactNode;
  onClose: () => void;
  isOpen: boolean;
  actionBtn?: boolean;
  classes?: string;
};
