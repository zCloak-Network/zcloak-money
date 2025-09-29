import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { clsx, formatClassName } from "@/utils"
import Lottie from "lottie-react";
import section_3_1_data from '../animation/section_3-1.json';
import section_3_2_data from '../animation/section_3-2.json';
import section_3_3_data from '../animation/section_3-3.json';
import section_3_4_data from '../animation/section_3-4.json';

const curClassName = formatClassName('home');

const Card = ({ title, description, icon, className = '' }: { title: string, description: string, icon: React.ReactNode, className?: string }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={clsx(
      'flex flex-col gap-6 flex-1 px-4 py-8 bg-[#F7F8FA] rounded-[20px]',
      'md:gap-8 md:px-[36px] md:py-[48px] md:gap-8',
      isVisible ? curClassName('animation') : 'opacity-0',
      className,
    )}>
      {typeof icon === 'string' ? <img src={icon} alt="" /> : icon}
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
        <div className="text-[#0098FD] text-xl font-medium">OUR SOLUTION</div>
        <div className="md:text-[32px] text-2xl md:text-[32px] font-medium text-[#041527] leading-[125%] max-w-[880px]">
          zCloak.Money was built from first principles for enterprises. 
          <p className="md:text-2xl text-base font-normal text-[rgba(4,21,39,0.80)] mt-2">
            We unified governance, compliance, risk control, and privacy into one unhackable, fully on-chain architecture—transforming multisig from cost center into value driver.
          </p>
        </div>
      </div>
      <div className="pt-[60px] md:pt-[98px] flex flex-col gap-[36px] md:gap-[52px]">
        <div className={clsx(
          'flex flex-col gap-[36px] md:flex-row',
        )}>
          <Card
            title="Fully On-chain"
            description="All logic, data and frontend hosted directly on-chain (ICP). Tamper-proof, censorship-resistant, no centralized attack surface."
            icon={<Lottie animationData={section_3_1_data} loop />}
          />
          <Card
            title="Real Self-Custody"
            description="Your passkey directly controls on-chain smart contracts. Even zCloak cannot touch your assets."
            icon={<Lottie animationData={section_3_2_data} loop />}
          />
        </div>
        <Card
          title="Most Advanced Multisig"
          description="Weighted voting, percentage thresholds, role-based approvals, emergency fast-track — governance that mirrors your actual organization."
          icon={
          <div className="bg-[url('@@/images/home/section_3-3.png')] bg-cover bg-center">
            <Lottie animationData={section_3_3_data} loop />
          </div>
          }
        />
        <Card
          title="Architecturally Immune to Most Hacker Attacks"
          description="By eliminating attack surfaces entirely—no seed phrases to steal, no frontend to hijack, no servers to exploit—we've made traditional attack vectors mathematically impossible."
          icon={
            <div className="bg-[url('@@/images/home/section_3-4.png')] bg-cover bg-center">
              <Lottie animationData={section_3_4_data} loop />
            </div>
          }
        />
      </div>
    </div>
  )
}