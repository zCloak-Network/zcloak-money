import XIcon from '@@/images/svg/icon-x.svg?react';
import VIcon from '@@/images/svg/icon-v.svg?react';
import MIcon from '@@/images/svg/icon_medium.svg?react';
import { clsx, formatClassName } from '@/utils';

export default ({ className = '' }: {className?: string}) => {
  const curClassName = formatClassName('home');
  
  return (
    <div className={clsx("flex gap-5 items-center", className, curClassName('extraLink'))}>
      <a href="https://x.com/zcloaknetwork" target='_blank' className="w-9 h-9 flex items-center justify-center">
        <XIcon />
      </a>
      <a href="https://www.youtube.com/channel/UCgV_B5uUS77928yHxNpobNQ" target='_blank' className="w-9 h-9 flex items-center justify-center">
        <VIcon />
      </a>
      <a href="https://zcloaknetwork.medium.com" target='_blank' className="w-9 h-9 flex items-center justify-center">
        <MIcon />
      </a>
    </div>
  )
}