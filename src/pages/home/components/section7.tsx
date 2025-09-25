import { clsx, formatClassName } from "@/utils"
import TryButton from "./tryButton";
import SaleButton from "./saleButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default () => {
  const [ref, isVisible] = useScrollAnimation();
  const curClassName = formatClassName('home');

  return (
    <div ref={ref} className={clsx(
      'bg-[#0C0A10] md:rounded-t-[50px] rounded-t-[32px]',
      'px-4 md:px-6 py-[50px] md:pt-[150px] md:pb-[75px]',
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <div className="md:max-w-7xl mx-auto flex flex-col gap-[50px]">
        <div className={clsx(
          'md:text-[60px] md:leading-[84px]',
          'text-[28px] leading-[150%] text-white',
        )}>
          <span className="text-[#4A86FE]">With zCloak, </span>enterprises achieve secure, compliant, and private asset governance — without friction
        </div>

        <div className="flex md:flex-row flex-col gap-4 mt-10 md:mt-16">
          <TryButton />
          <SaleButton />
        </div>
      </div>
    </div>
  )
}