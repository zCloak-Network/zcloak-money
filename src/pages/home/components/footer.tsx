import { clsx, formatClassName } from '@/utils';
import ExtraLink from './extraLink';
import { APP_URL } from '@/utils/constants';

export default () => {
  const curClassName = formatClassName('home');

  return (
    <div className={clsx(
      'bg-[#0C0A10] text-[#928C97] text-[13px] leading-[24px]',
      curClassName('footer'),
      'px-4 md:px-6 pb-[50px]'
    )}>
      <div className="md:max-w-7xl mx-auto flex flex-col gap-[28px] md:flex-row-reverse justify-between">
        <div className="flex flex-col gap-3 md:gap-[28px] md:flex-row md:items-center items-start">
          <div className="flex flex-col gap-3 md:gap-[28px] md:flex-row">
            <a href={`${APP_URL}/terms`} target='_blank'>Terms of Use</a>
            <a href={`${APP_URL}/privacy`} target='_blank'>Privacy Policy</a>
            <a href="https://zcloak.network/" target='_blank'>About Us</a>
            {/* <a href="" target='_blank'>FAQ</a> */}
            <a href="mailto:sales@zcloak.network">Contact Us</a>
            {/* <a href="" target='_blank'>Docs</a> */}
          </div>
          <ExtraLink />
        </div>
        <div>
          © 2025 zcloak.money
        </div>
      </div>
    </div>
  )
}