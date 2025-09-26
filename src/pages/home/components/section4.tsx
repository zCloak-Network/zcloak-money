import { clsx, formatClassName } from "@/utils";
import Title from "./title"
import MainIcon from '@@/images/home/section_4-1.png';
import LayerIcon1 from '@@/images/home/section_4-2.png';
import LayerIcon2 from '@@/images/home/section_4-3.png';
import LayerIcon3 from '@@/images/home/section_4-4.png';
import LayerIcon4 from '@@/images/home/section_4-5.png';
import pinIcon1 from '@@/images/home/section_4-6.svg';
import pinIcon2 from '@@/images/home/section_4-7.svg';
import pinIcon3 from '@@/images/home/section_4-8.svg';
import pinIcon4 from '@@/images/home/section_4-9.svg';
import { observer } from "mobx-react-lite";
import SpotlightCard from "@/components/spotlightCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type LayerProps = {
  title: string;
  descriptions: string[];
  icon: string;
  id: string;
  pinIcon: string;
  spotlightColor: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const Layer = (
  {
    title,
    descriptions,
    icon,
    id,
    spotlightColor
  }: LayerProps) => {
  const curClassName = formatClassName('home');
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div ref={ref} className={clsx(
      curClassName(['section4', `layer_${id}`]),
      'md:absolute md:z-30',
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <SpotlightCard
        className={clsx(
          "px-5 pt-6 pb-[30px] rounded-[20px] flex flex-col gap-[28px] relative z-30",
          "xl:max-w-[386px] lg:max-w-[356px] md:max-w-[316px]",
          curClassName('section4', 'layer'),
          'backdrop-blur-[4.5px]'
        )}
        spotlightColor={spotlightColor}
      >
        <img width={60} height={60} src={icon} alt="" />
        <div className="text-xl font-medium text-white">
          {title}
        </div>
        <div className="flex flex-col text-sm text-[#A0A1A8]">
          {descriptions.map((description, index) => (
            <div key={index} className={clsx(curClassName(['section4', 'description']))}>{description}</div>
          ))}
        </div>
      </SpotlightCard>
      {/* <img src={pinIcon} className="md:block pin hidden absolute z-20" alt="" /> */}
    </div>
  )
}

const layers: Omit<LayerProps, 'id'>[] = [
  {
    title: 'Governance Layer',
    descriptions: [
      'Multi-wallet governance: by entity, business unit, or project',
      'Policy-driven multisig: weighted voting, role-based thresholds, emergency fast-track',
      'Multi-chain & gasless: one deployment, wallets across all chains, daily ops without gas'
    ],
    icon: LayerIcon1,
    pinIcon: pinIcon1,
    spotlightColor: 'rgba(149, 220, 255, 0.3)'
  },
  {
    title: 'Privacy Layer',
    descriptions: [
      'vetKey encryption secures approval flows & metadata',
      'Audit-grade ledger with full traceability, exportable for ERP & compliance systems'
    ],
    icon: LayerIcon2,
    pinIcon: pinIcon2,
    spotlightColor: 'rgba(0, 225, 255, 0.3)'
  },
  {
    title: 'Interaction Layer',
    descriptions: [
      'Immutable frontend hosted on-chain — no blind signing',
      'Passkey-native login (biometric / hardware key) — no seed phrases',
      'End-to-end workflow — approvals go directly to smart contracts'
    ],
    icon: LayerIcon3,
    pinIcon: pinIcon3,
    spotlightColor: 'rgba(0, 144, 255, 0.3)'
  },
  {
    title: 'Security Layer',
    descriptions: [
      'Self-custodial key architecture',
      'Chain-key distributed signatures — no single point of failure',
      'Pre-execution risk controls: whitelists, thresholds, time windows, geo-restrictions, KYT screening'
    ],
    icon: LayerIcon4,
    pinIcon: pinIcon4,
    spotlightColor: 'rgba(242, 0, 255, 0.3)'
  },
]

export default observer(() => {
  const curClassName = formatClassName('home');
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div ref={ref} className={clsx(
      "px-4 py-[50px] bg-[#1C1C1E]",
      curClassName('section4'),
      isVisible ? curClassName('animation') : 'opacity-0'
    )}>
      <div className="flex flex-col justify-center items-center md:gap-[45px] gap-[42px]">
        <Title />
        <div className="md:text-[40px] text-2xl font-medium text-white">Core Capabilities</div>
      </div>
      <div className="relative md:max-w-7xl mx-auto flex flex-col justify-center items-center gap-[28px] mt-[45px] md:h-[1043px]">
        <div className={clsx("md:absolute xl:w-[426px] lg:w-[396px] md:w-[356px] w-[216px] md:top-[169px]", curClassName(['section4', 'main']))}>
          <img src={MainIcon} alt="" className="relative z-10" />
          <img src={pinIcon1} className={clsx(
            "md:block hidden absolute z-20 h-[17px] xl:top-[128px] xl:left-[-11px]",
            "lg:top-[128px] lg:left-[-12px]",
            "md:top-[118px] md:left-[-18px]"
          )} alt="" />
          <img src={pinIcon2} className={clsx(
            "md:block hidden absolute z-20 h-[17px] xl:top-[318px] xl:left-[-15px]",
            "lg:top-[300px] lg:left-[-15px]",
            "md:top-[270px] md:left-[-24px]"
          )} alt="" />
          <img src={pinIcon3} className={clsx(
            "md:block hidden absolute z-20 h-[17px] right-1/2 xl:translate-x-[calc(100%+126px)] xl:top-[210px]",
            "lg:translate-x-[calc(100%+118px)] lg:top-[200px]",
            "md:translate-x-[calc(100%+104px)] md:top-[170px]"
          )} alt="" />
          <img src={pinIcon4} className={clsx(
            "md:block hidden absolute z-20 h-[17px] right-1/2 xl:translate-x-[calc(100%+126px)] xl:top-[380px]",
            "lg:translate-x-[calc(100%+118px)] lg:top-[370px]",
            "md:translate-x-[calc(100%+104px)] md:top-[330px]"
          )} alt="" />
        </div>
        <div className="flex flex-col gap-6">
          {layers.map((layer, index) => (
            <Layer key={index} {...layer} id={String(index + 1)} />
          ))}
        </div>
      </div>
     </div>
  )
})