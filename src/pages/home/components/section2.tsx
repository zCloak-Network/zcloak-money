import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clsx, formatClassName } from "@/utils"
import toolIcon from '@@/images/home/section_2-2.png';
import arrowIcon from '@@/images/home/section_2-3.png';

export default () => {
  const curClassName = formatClassName('home');
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={isVisible ? curClassName('animation') : 'opacity-0'}>
      <div
      className={clsx(
        'flex flex-col items-center justify-center relative',
        curClassName('section2'),
        'md:pt-[220px] pb-[172px] pt-[110px] ',
        'bg-[linear-gradient(180deg,rgba(196,224,254,0.00)_7.41%,rgba(196,224,254,0.50)_55.44%,rgba(196,224,254,0.00)_94.77%)]'
      )}
    >
      <div className={clsx(
        'flex flex-col md:flex-row-reverse items-center justify-center',
        'gap-8 md:gap-[42px]',
        'md:max-w-7xl',
        )}
      >
        <img src={toolIcon} className="w-[91px] md:w-[178px]" alt="" />
        <div className={clsx('md:text-2xl text-base text-center px-6 md:max-w-[888px]')}>
          While most multisig wallets were never designed for enterprise needs. They fail in critical areas including 
          <span className="text-[#2488FA]">frontend risks, rigid governance, fragmented evidence, blurry roles & responsibilities, reactive risk control, approval gaps, high cost & complexity and privacy leakage.</span>
        </div>
      </div>
      <img
        src={arrowIcon}
        width={34}
        className={clsx("absolute bottom-[-20px] left-1/2 -translate-x-1/2")}
        alt=""
      />
    </div>
    </div>
    
  )
}