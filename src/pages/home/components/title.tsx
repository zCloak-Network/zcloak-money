export default ({ title = 'ZCLOAK.MONEY' }: { title?: string }) => {
  return (
    <div className="inline-flex items-center justify-center md:text-2xl text-sm px-[22px] py-[6px] font-semibold md:leading-none leading-[24px] text-[#003294] tracking-[2px] font-bold rounded-[19px] bg-[linear-gradient(91deg,#C4E0FD_0%,#5EADFF_100%)]">
      {title}
    </div>
  )
}