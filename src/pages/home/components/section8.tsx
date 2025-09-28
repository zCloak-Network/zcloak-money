import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clsx, formatClassName } from "@/utils";
import LogoLoop from "@/components/logoLoop";
import { observer } from "mobx-react-lite";
import GlobalStore from "@/stores";

import logo_1_1 from '@@/images/home/logo/logo_1_1.svg';
import logo_1_2 from '@@/images/home/logo/logo_1_2.svg';
import logo_1_3 from '@@/images/home/logo/logo_1_3.svg';
import logo_1_4 from '@@/images/home/logo/logo_1_4.svg';
import logo_1_5 from '@@/images/home/logo/logo_1_5.svg';
import logo_1_6 from '@@/images/home/logo/logo_1_6.svg';
import logo_1_7 from '@@/images/home/logo/logo_1_7.svg';
import logo_1_8 from '@@/images/home/logo/logo_1_8.svg';
import logo_1_9 from '@@/images/home/logo/logo_1_9.svg';
import logo_1_10 from '@@/images/home/logo/logo_1_10.svg';
import logo_1_11 from '@@/images/home/logo/logo_1_11.svg';
import logo_1_12 from '@@/images/home/logo/logo_1_12.svg';
import logo_1_13 from '@@/images/home/logo/logo_1_13.svg';

import logo_2_1 from '@@/images/home/logo/logo_2_1.svg';
import logo_2_2 from '@@/images/home/logo/logo_2_2.svg';
import logo_2_3 from '@@/images/home/logo/logo_2_3.svg';
import logo_2_4 from '@@/images/home/logo/logo_2_4.svg';
import logo_2_5 from '@@/images/home/logo/logo_2_5.svg';
import logo_2_6 from '@@/images/home/logo/logo_2_6.svg';
import logo_2_7 from '@@/images/home/logo/logo_2_7.svg';
import logo_2_8 from '@@/images/home/logo/logo_2_8.svg';
import logo_2_9 from '@@/images/home/logo/logo_2_9.svg';
import logo_2_10 from '@@/images/home/logo/logo_2_10.svg';
import logo_2_11 from '@@/images/home/logo/logo_2_11.svg';
import logo_2_12 from '@@/images/home/logo/logo_2_12.svg';
import logo_2_13 from '@@/images/home/logo/logo_2_13.svg';
import logo_2_14 from '@@/images/home/logo/logo_2_14.svg';


const logoLine1 = [
  {
    src: logo_1_1,
  },
  {
    src: logo_1_2,
  },
  {
    src: logo_1_3,
  },
  {
    src: logo_1_4,
  },
  {
    src: logo_1_5,
  },
  {
    src: logo_1_6,
  },
  {
    src: logo_1_7,
  },
  {
    src: logo_1_8,
  },
  {
    src: logo_1_9,
  },
  {
    src: logo_1_10,
  },
  {
    src: logo_1_11,
  },
  {
    src: logo_1_12,
  },
  {
    src: logo_1_13,
  }
];

const logoLine2 = [
  {
    src: logo_2_1,
  },
  {
    src: logo_2_2,
  },
  {
    src: logo_2_3,
  },
  {
    src: logo_2_4,
  },
  {
    src: logo_2_5,
  },
  {
    src: logo_2_6,
  },
  {
    src: logo_2_7,
  },
  {
    src: logo_2_8,
  },
  {
    src: logo_2_9,
  },
  {
    src: logo_2_10,
  },
  {
    src: logo_2_11,
  },
  {
    src: logo_2_12,
  },
  {
    src: logo_2_13,
  },
  {
    src: logo_2_14,
  }
]

export default observer(() => {
  const [ref, isVisible] = useScrollAnimation();
  const curClassName = formatClassName('home');

  const { isMobile } = GlobalStore;

  return (
    <div ref={ref} className={clsx(
      'flex flex-col md:gap-[72px] gap-[42px] items-center',
      'md:max-w-7xl mx-auto w-full',
      'px-4 md:px-6 md:pb-[120px] pt-3 pb-[50px]',
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <div className="md:text-[40px] text-2xl font-medium text-black leading-[60px]">
        Our Investors
      </div>
      <div className="flex flex-col w-full md:gap-[36px] gap-6">
        <LogoLoop logos={logoLine1} pauseOnHover={false} fadeOut speed={isMobile ? 60 : 120} logoHeight={isMobile ? 40 : 76} gap={isMobile ? 16 : 32} />
        <LogoLoop logos={logoLine2} pauseOnHover={false} fadeOut direction='right' speed={isMobile ? 60 : 120} logoHeight={isMobile ? 40 : 76} gap={isMobile ? 16 : 32} />
      </div>
    </div>
  )
})