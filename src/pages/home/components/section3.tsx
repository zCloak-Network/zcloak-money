import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clsx, formatClassName } from "@/utils"
import card1Icon from '@@/images/home/section_3-1.png';
import card2Icon from '@@/images/home/section_3-2.png';
import card3Icon from '@@/images/home/section_3-3.png';

const curClassName = formatClassName('home');

const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={clsx(
      'flex flex-col gap-6 flex-1 px-4 py-8 bg-[#F7F8FA] rounded-[20px]',
      'md:gap-8 md:px-[36px] md:py-[48px] md:gap-8',
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <img src={icon} alt="" />
      <div className="flex flex-col md:gap-4 gap-3">
        <p className="md:text-4xl text-2xl font-medium text-[#101010] leading-[125%]">{title}</p>
        <p className="text-base text-[#5A5A5A] leading-[130%]">{description}</p>
      </div>
    </div>
  )
}

export default () => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref}
      className={clsx(
        "px-4 md:px-6 pt-[80px] md:pt-[110px] pb-[42px] md:pb-[200px]",
        "md:max-w-7xl mx-auto",
        isVisible ? curClassName('animation') : 'opacity-0'
      )}
    >
      <div className={clsx("flex flex-col gap-6 items-center justify-center text-center")}>
        <p className="text-[#0098FD] text-xl font-medium">OUR SOLUTION</p>
        <p className="text-2xl md:text-[32px] font-medium text-[#041527] leading-[125%] max-w-[880px]">
          zCloak.money unifies governance, compliance, risk control, and privacy into one secure, on-chain architecture:
        </p>
      </div>
      <div className="pt-[60px] md:pt-[98px] flex flex-col gap-[36px] md:gap-[52px]">
        <div className={clsx(
          'flex flex-col gap-[36px] md:flex-row',
        )}>
          <Card
            title="Fully On-chain"
            description="All logic & frontend hosted directly on-chain. Tamper-proof, censorship-resistant, no centralized attack surface."
            icon={card1Icon}
          />
          <Card
            title="Real Self-Custody"
            description="Keys are always distributed; zCloak never touches your private keys or funds."
            icon={card2Icon}
          />
        </div>
        <Card
          title="Most Advanced Multisig"
          description="Weighted voting, percentage thresholds, role-based approvals, emergency fast-track — governance that mirrors your actual organization."
          icon={card3Icon}
        />
      </div>
    </div>
  )
}