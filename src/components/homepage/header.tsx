import Logo from "@/assets/logo.svg?react";
import { MessageSquareMore } from "lucide-react";

export const Header = () => {
  return (
    <div className="wrap fixed top-0 left-0 right-0 z-50 flex items-center text-white gap-3 py-4">
      <Logo />
      <div className="flex-1"></div>
      <a href="###" className="btn btn-ghost font-normal btn-sm">
        Docs
      </a>

      <button className="btn btn-bordered bg-transparent text-white hover:bg-primary hover:border-primary font-normal btn-sm ">
        <MessageSquareMore className="w-4 h-4" />
        Contact
      </button>
      <button className="btn btn-bordered font-normal btn-sm">Try Demo</button>
    </div>
  );
};
