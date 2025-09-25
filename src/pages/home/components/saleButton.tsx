import ContactIcon from '@@/images/svg/contact.svg?react';

export default ({ text = 'Talk to Sales' }: { text?: string }) => {
  return (
    <a href="mailto:sales@zcloak.network">
      <div className="cursor-pointer hover:scale-102 md:hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2 w-full md:w-auto md:px-6 py-3 text-white rounded-lg border border-white">
        <ContactIcon />
        {text}
      </div>
    </a>
  )
}