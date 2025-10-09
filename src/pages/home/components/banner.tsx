import { clsx, formatClassName } from '@/utils';
import { observer } from 'mobx-react-lite';
import SaleButton from './saleButton';
import TryButton from './tryButton';
import ExtraLink from './extraLink';
import GlobalStore from '@/stores';
import TextType from '@/components/textType';
import { useRef, useState } from 'react';
import GradientText from '@/components/gradientText';
import bannerPreview from '@@/images/home/banner.webp';

const bannerVideo = "https://d3c47asw5uot17.cloudfront.net/zcloakmoney.mp4";
export default observer(() => {
  const curClassName = formatClassName('home');
  const { isMobile } = GlobalStore;
  const [showCursor, setShowCursor] = useState(true);
  // const [videoLoaded, setVideoLoaded] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     setVideoLoaded(false);
  //     videoRef.current.addEventListener('canplaythrough', () => {
  //       setVideoLoaded(true);
  //     });
  //   }
  // }, []);

  return (
    <div className={clsx(
      "px-4 md:pb-[290px] pb-[170px] relative overflow-hidden bg-[#0C0A10]",
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
        <div className="leading-[120%] text-[40px] md:text-[64px] font-bold text-white md:max-w-[550px] max-w-[350px] md:min-h-[153px] min-h-[96px]">
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
        <div className="leading-[120%] text-xl md:text-2xl text-white md:mt-[40px] mt-[52px]">
          Architecturally Secure. Built for Decision Makers.
        </div>
        <div className="flex md:flex-row flex-col gap-4  mt-10 md:mt-16">
          <TryButton />
          <SaleButton />
        </div>
        {!isMobile && <ExtraLink className="flex-shrink-0 text-white absolute top-[640px] right-0" />}  
      </div>
      {/* {
        !videoLoaded &&(
          <div className={curClassName(['banner', 'video-poster'])}></div>
        )
      } */}
      <video
        ref={videoRef}
        poster={bannerPreview}
        src={bannerVideo}
        autoPlay 
        loop 
        muted 
        playsInline
        controls={false} 
        className={curClassName(['banner', 'video'], 'object-cover')} 
      />
      {/* {!videoLoaded && <div className="absolute w-[656px] h-full top-0 md:right-[829px] right-[50%] bg-[linear-gradient(270deg,rgba(12,10,16,0.00)_0%,#0C0A10_60.99%)] z-10"></div>}
      {!videoLoaded && <div className="absolute w-[100vw] h-[183px] left-0 bottom-0 bg-[linear-gradient(180deg,rgba(12,10,16,0.00)_3.8%,#0C0A10_60.16%)] z-[11px]"></div>} */}
    </div>
  )
})