import { clsx, formatClassName } from "@/utils"
import Title from "./title"
import mainImage from '@@/images/home/section_1-1.png';
import { observer } from "mobx-react-lite";
import GlobalStore from "@/stores";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default observer(() => {
  const { isMobile } = GlobalStore;
  const curClassName = formatClassName('home');
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div className={clsx(
      'bg-white relative overflow-hidden',
      'md:pt-[86px] md:px-[80px]',
      'md:gap-[105px]',
      'gap-[20px]',
      'pt-[62px]',
      'md:rounded-t-[50px] md:mt-[-50px]',
      'rounded-t-[24px] mt-[-24px]',
      'flex flex-col items-center justify-center',
      'z-10',
    )}
    >
      <Title />
      <div ref={ref} className={clsx(
        'bg-white relative',
        'md:max-w-7xl max-w-full w-full',
        'md:rounded-t-[50px]',
        'md:rounded-[20px]',
        'md:px-[50px] md:py-[45px]',
        'bg-[linear-gradient(180deg,rgba(243,249,255,0.00)_0%,#C4E0FD_100%)]',
        isMobile ? 'h-[395px] w-full' : '',
        isVisible ? curClassName('animation') : 'opacity-0'
      )}>
        <img
          src={mainImage}
          alt=""
          className={clsx(
            "md:mt-[-75px] md:relative md:w-auto md:h-auto md:w-full md:max-w-full md:top-0 md:left-0",
            "absolute top-4 left-6 w-[604px] max-w-[604px] h-[338px]",
          )}
        />
      </div>
    </div>
  )
})