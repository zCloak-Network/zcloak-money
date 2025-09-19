import { MessageSquareMore } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-[url('/src/assets/images/hero.jpg')] bg-cover bg-center aspect-2/1">
      <div className="wrap flex flex-col justify-center h-full overflow-hidden">
        <div className="my-10 text-6xl font-medium leading-20 max-w-[800px]">
          <span className="text-blue-500 ">
            zCloak.Money
            <br />
          </span>
          <span className="text-white">
            The First Fully On-Chain Financial OS
          </span>
        </div>
        <div className=" text-white text-xl leading-loose my-8">
          Your keys. Your rules. Your future. 
        </div>
        <div className="flex gap-4">
          <button className="btn btn-bordered font-normal btn-sm px-8 py-5">
            Try Demo
          </button>
          <button className="btn btn-bordered bg-transparent text-white hover:bg-primary hover:border-primary font-normal btn-sm px-8 py-5">
            <MessageSquareMore className="w-4 h-4" />
            Talk to Sales
          </button>
        </div>
      </div>
    </div>
  );
};
