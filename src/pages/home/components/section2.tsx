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
          <div className={clsx('md:text-2xl text-base md:text-left text-center font-semibold px-6 md:max-w-[888px]')}>
            Most multisig wallets are consumer tools pretending to be enterprise infrastructure.&nbsp;
            <span className="text-[#2488FA]">
              They fail with hackable frontends, rigid governance, and fragmented operations that create managament nightmares.
            </span>
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