import GlobalStore from "@/stores";
import { observer } from "mobx-react-lite";
import LogoIcon from '@@/images/svg/logo.svg?react';
import { useEffect, useState } from "react";
import { clsx } from "@/utils";
import SaleButton from "./saleButton";
import TryButton from "./tryButton";

export default observer(() => {
  const { isMobile } = GlobalStore;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={clsx(
      "px-4 md:py-6 py-4 fixed top-0 left-0 w-full z-100 transition-background-color duration-300",
      isScrolled ? "bg-black/50 backdrop-blur-[10px]" : "bg-transparent"
    )}>
      <div className="flex justify-between items-center gap-8 max-w-7xl mx-auto">
        <div className="flex flex-1 min-w-0 justify-between items-center">
          <LogoIcon />
          {/* <a href="" target='_blank' className="text-base text-white">Docs</a> */}
        </div>
        {
          !isMobile && <div className="flex md:flex-row flex-col gap-4 flex-shrink-0">
            <SaleButton text="Contact" />
            <TryButton />
          </div>
        }
      </div>
    </div>
  )
})