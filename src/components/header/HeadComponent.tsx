"use client"

interface Props {
    icon: string,
    title: string,
    description: string
}

export default function HeadComponent({ icon, title, description }: Props) {
    return (
        <div className="flex items-center justify-center flex-col mb-[4%]">
            <span className="px-[14px] py-[6px] bg-white flex items-center justify-center gap-4 text-[#f46177] rounded-lg shadow leading-[21px] mb-2 text-[10px] md:text-[16px]">
                <img src={icon} />{title}
            </span>
            <div className="w-[90%]">
                <h2 className="2xl:text-[48px] md:text-[40px] text-[26px] 2xl:leading-[56px] md:leading-[52px] leading-[24px] text-[#1a1a1a] font-feature font-[700] text-center">{description}</h2>
            </div>
        </div>
    )
}