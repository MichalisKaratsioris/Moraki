import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Alejandra Mantiñan ${title}`;
  });

  return null;
};
