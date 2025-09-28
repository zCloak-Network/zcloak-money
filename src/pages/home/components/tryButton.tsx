export default ({ text = 'Try Demo' }: { text?: string }) => {
  return (
    <a href="https://app.zcloak.money" target='_blank'>
      <div className="cursor-pointer hover:scale-102 md:hover:scale-105 transition-transform duration-300 flex items-center justify-center w-full md:w-36 py-3 bg-white text-black rounded-lg border-[3px] border-black/20">
        {text}
      </div>
    </a>
  )
}