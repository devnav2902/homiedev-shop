import { useState } from "react";

export const useDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleDialog() {
    setIsOpen(!isOpen);
  }

  return [isOpen, toggleDialog] as [boolean, () => void];
};
