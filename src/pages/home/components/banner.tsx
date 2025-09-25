import { clsx, formatClassName } from '@/utils';
import { observer } from 'mobx-react-lite';
import SaleButton from './saleButton';
import TryButton from './tryButton';
import ExtraLink from './extraLink';
import GlobalStore from '@/stores';
import TextType from '@/components/textType';
import { useState } from 'react';
import GradientText from '@/components/gradientText';

export default observer(() => {
  const curClassName = formatClassName('home');
  const { isMobile } = GlobalStore;
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className={clsx(
      "px-4 md:pb-[183px] pb-[132px] relative overflow-hidden bg-[#0C0A10]",
      curClassName('banner'),
    )}>
      <div className={`max-w-7xl mx-auto relative z-20 pt-[118px] md:pt-[135px]`}>
        <div className="leading-[120%] text-[40px] md:text-[64px] font-bold">
          <GradientText
            colors={["#40ffaa", "#2E83FF", "#40ffaa", "#2E83FF", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
          >
            zCloak.Money
          </GradientText>
        </div>
        <div className="leading-[120%] text-[40px] md:text-[64px] font-bold text-white max-w-[550px]">
          <TextType 
            text={["The First Enterprise Passkey Wallet"]}
            typingSpeed={75}
            initialDelay={200}
            pauseDuration={1500}
            showCursor={showCursor}
            loop={false}
            hideCursorWhileTyping
            onSentenceComplete={() => setShowCursor(false)}
            cursorCharacter="|"
          />
        </div>
        <div className="leading-[120%] text-xl md:text-2xl text-white mt-[130px]">

          Sovereign-Grade Security. Built for Decision Makers.
        </div>
        <div className="flex align-center justify-between gap-4 mt-10 md:mt-16">
          <div className="flex md:flex-row flex-col gap-4 flex-1">
            <TryButton />
            <SaleButton />
          </div>
          {!isMobile && <ExtraLink className="flex-shrink-0 text-white" />}  
        </div>
      </div>
      <div className="absolute w-[656px] h-full top-0 md:right-[829px] right-[50%] bg-[linear-gradient(270deg,rgba(12,10,16,0.00)_0%,#0C0A10_60.99%)] z-10"></div>
      <div className="absolute w-[100vw] h-[183px] left-0 bottom-0 bg-[linear-gradient(180deg,rgba(12,10,16,0.00)_3.8%,#0C0A10_60.16%)] z-[11px]"></div>
    </div>
  )
})