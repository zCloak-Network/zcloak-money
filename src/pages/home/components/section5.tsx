import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clsx, formatClassName } from "@/utils"
import cardIcon1 from '@@/images/home/section_5-1.png';
import cardIcon2 from '@@/images/home/section_5-2.png';
import cardIcon3 from '@@/images/home/section_5-3.png';
import cardIcon4 from '@@/images/home/section_5-4.png';

type SectionCardProps = {
  title: string;
  icon: string;
  isReverse?: boolean;
}

const SectionCard = ({ title, icon, isReverse }: SectionCardProps) => {
  return (
    <div className={clsx(
      'flex flex-col pt-8 px-5 w-full gap-3 self-stretch justify-between',
      'md:px-6 md:flex-1 md:w-auto',
      isReverse ? 'md:flex-col-reverse md:pb-8 md:pt-0' : 'md:pt-8',
      'rounded-[20px] border border-[#D3D5D8] bg-[linear-gradient(180deg,rgba(243,249,255,0.00)_0%,#C4E0FD_100%)]',
    )}>
      <div className="flex flex-col gap-3">
        <div className="text-2xl font-medium text-[#041527]">{title}</div>
      </div>
      <img src={icon} alt="" width={138} className="self-end" />
    </div>
  )
}

const cards: Omit<SectionCardProps, 'isReverse'>[] = [
  {
    title: 'Cross-Border Enterprises & Trading Companies',
    icon: cardIcon1,
  },
  {
    title: 'Funds & Payroll Platforms',
    icon: cardIcon2,
  },
  {
    title: 'Social & Gaming Platforms',
    icon: cardIcon3,
  },
  {
    title: 'Web3 Companies & DAOs',
    icon: cardIcon4,
  }
]

export default () => {
  const curClassName = formatClassName('home');
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={clsx("bg-[#F5F5F7]", isVisible ? curClassName('animation') : 'opacity-0')}>
      <div className={clsx(
        'px-4 py-[50px]',
        'md:px-6 md:pt-[92px] md:pb-[160px] md:max-w-7xl mx-auto',
        'flex flex-col gap-[42px] md:gap-[62px]'
      )}>
        <div className="text-black font-medium md:text-[40px] text-2xl text-center">Who Do We Servce?</div>
        <div
          className={clsx(
            'md:flex md:flex-row gap-5 md:items-center ',
            'grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr]',
          )}
        >
          {cards.map((card, index) => (
            <SectionCard key={index} {...card} isReverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  )
}