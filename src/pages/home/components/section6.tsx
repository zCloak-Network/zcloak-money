import { clsx, formatClassName } from "@/utils"
import sectionImg1 from '@@/images/home/section_6-1.png';
import sectionImg2 from '@@/images/home/section_6-2.png';
import sectionImg3 from '@@/images/home/section_6-3.png';
import sectionImg32 from '@@/images/home/section_6-3-2.png';
import sectionImg4 from '@@/images/home/section_6-4.png';
import sectionImg5 from '@@/images/home/section_6-5.png';
import { observer } from "mobx-react-lite";
import GlobalStore from "@/stores";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const curClassName = formatClassName('home');

const Card1 = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref}
      className={clsx(
        "flex w-full flex-col gap-5 items-center",
        "md:flex-row md:gap-6",
        isVisible ? curClassName('animation') : 'opacity-0'
      )}
    >
      <div className={clsx('md:flex-[63%] flex flex-col justify-between self-stretch rounded-[20px] bg-[#F5F5F7]')}>
        <div className={clsx(
          'md:px-[40px] px-5 pt-[40px] pb-[30px]'
        )}
        >
          <div className="text-2xl md:text-[32px] font-medium text-[#101010]">
            100% Self-Custody
          </div>
          <div className="text-base md:text-lg text-[#5A5A5A] leading-[150%]">
            Your keys, your control, your funds
          </div>
        </div>
        <div className={clsx(
          "overflow-hidden flex items-center justify-center",
          "md:h-[312px] h-[233px]"
        )}
        >
          <img src={sectionImg1} className="max-w-full max-h-full object-contain" alt="" />
        </div>
      </div>

      <div className={clsx('md:flex-[37%] self-stretch rounded-[20px] bg-[linear-gradient(199deg,#C6E5FF_1.91%,#137FFD_58.47%)]')}>
        <div className="md:h-[376px] h-[282px] flex items-center justify-center">
          <img src={sectionImg2} width={298} className="max-w-full max-h-full object-contain" alt="" />
        </div>
        <div className="md:px-[40px] px-5 pb-[50px]">
          <div className="text-2xl md:text-[32px] font-medium text-white">
            Compliance-Ready
          </div>
          <div className="text-base md:text-lg text-white leading-[150%]">
            Audit-grade ledger, ERP<br />integration, KYT built-in.
          </div>
        </div>
      </div>
    </div>
  )
}

const Card2 = () => {
  const [ref, isVisible] = useScrollAnimation();
  const { isMobile } = GlobalStore;
  return (
    <div ref={ref} className={clsx(
      "w-full relative overflow-hidden bg-[#CCD8E6] rounded-[20px] md:h-[432px] h-[392px]",
      "flex flex-col md:justify-center",
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <div className="md:px-[50px] px-5 pt-[40px] md:pt-0 relative z-20 ">
        <div className="text-2xl md:text-[32px] font-medium text-[#101010] mb-2">
          No Blind Signing
        </div>
        <div className="text-base md:text-lg text-[#5A5A5A] leading-[150%]">
          <p className="md:block hidden">passkey-native, seedless, tamper-proof frontend</p>
          <p className="md:hidden block">passkey-native, seedless,<br />tamper-proof frontend</p>
        </div>
      </div>

      <div className={clsx(
        "absolute",
        "md:w-[584px] w-[343px] lg:right-[110px] md:right-0 bottom-0 right-0",
        curClassName(['section6', 'block3'])
      )}
      >
        <img src={isMobile ? sectionImg32 : sectionImg3} alt="" className="w-full" />
      </div>
    </div>
  )
}

const Card3 = () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref}
      className={clsx(
        "flex w-full flex-col gap-5 items-center",
        "md:flex-row md:gap-6",
        isVisible ? curClassName('animation') : 'opacity-0'
      )}
    >
      <div className={clsx('md:flex-1 flex flex-col justify-between self-stretch rounded-[20px] bg-[#F5F5F7] overflow-hidden')}>
        <div className="overflow-hidden flex items-center justify-center">
          <img src={sectionImg4} alt="" className="object-contain h-[330px] max-w-none" />
        </div>
        <div className="flex flex-col md:w-[80%] gap-2 pb-[50px] px-5 md:px-[50px] md:mt-8 -mt-12">
          <div className="text-2xl md:text-[32px] font-medium text-[#101010]">
            Multi-Chain Unification
          </div>
          <div className="text-base md:text-lg text-[#5A5A5A] leading-[150%]">
            Deploy once, manage across Bitcoin, Ethereum, Solana & more
          </div>
        </div>
      </div>

      <div className={clsx('md:flex-1 flex flex-col justify-between self-stretch rounded-[20px] bg-[#F5F5F7] overflow-hidden')}>
        <div className="overflow-hidden flex items-center justify-center">
          <img src={sectionImg5} alt="" className="object-contain h-[330px] max-w-none" />
        </div>
        <div className="flex flex-col md:w-[80%] gap-2 pb-[50px] px-5 md:px-[50px] md:mt-8 mt-2">
          <div className="text-2xl md:text-[32px] font-medium text-[#101010]">
            Enterprise Privacy
          </div>
          <div className="text-base md:text-lg text-[#5A5A5A] leading-[150%]">
            vetKey-encrypted workflows, invisible to external analysis
          </div>
        </div>
      </div>
    </div>
  )
}


export default observer(() => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={clsx(
      'flex flex-col md:max-w-7xl mx-auto items-center',
      'md:px-6 md:py-[105px] md:pb-[210px] px-4 py-[50px]',
      'md:gap-[64px] gap-[42px]',
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <div className={clsx(
        'bg-[linear-gradient(315deg,#1426EF_0%,#30C4FE_100%)] bg-clip-text text-transparent',
        'text-2xl md:text-[40px] font-semibold leading-[88px]'
      )}>
        Why Choose Us?
      </div>
      <div className="flex w-full flex-col gap-5 md:gap-8">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </div>
  )
})