import { useEffect, useState } from "react";

const useNavScroll = () => {
  const [scroll, setScroll] = useState(false);

  const prev = 124;

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = Math.floor(window.pageYOffset);

      if (prev > currentPosition) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scroll];
};

export default useNavScroll;
