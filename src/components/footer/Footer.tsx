import { ItemsFooter } from "@/shared/constants";

export default function Footer() {
    return (
        <>
            <div className="md:hidden mt-[14%] mb-4 w-full flex items-center justify-center">
                <div className="w-full sm:w-[88%] px-4">
                    <div className="flex flex-col gap-2 w-full">
                        <div className="gap-2 grid grid-cols-2">
                            <div>
                                <p className="text-[11.2px] sm:text-[16px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">Platform</p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-[12px]">
                                    <li className="hover:text-[#f46177]">Voice AI Agent (Voicebot)</li>
                                    <li className="hover:text-[#f46177]">Chat AI Agent (Chatbot)</li>
                                    <li className="hover:text-[#f46177]">Real-Time Agent Assist</li>
                                    <li className="hover:text-[#f46177]">Live Chat with Co-Browsing</li>
                                    <li className="hover:text-[#f46177]">Floatbot UNO</li>
                                    <li className="hover:text-[#f46177]">Floatbot NEO</li>
                                    <li className="hover:text-[#f46177]">Floatbot Armor</li>
                                    <li className="hover:text-[#f46177]">Pricing</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-[16px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">Use cases</p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-[12px]">
                                    <li className="hover:text-[#f46177]">Increase Digital Sales</li>
                                    <li className="hover:text-[#f46177]">Automate Claim Submissions</li>
                                    <li className="hover:text-[#f46177]">Corporate Banking</li>
                                    <li className="hover:text-[#f46177]">Retail Banking</li>
                                    <li className="hover:text-[#f46177]">Automated Debt Collection</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-[14%]">
                            <div>
                                <p className="text-[11.2px] sm:text-[16px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">Industries</p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-[12px]">
                                    <li className="hover:text-[#f46177]">Insurance</li>
                                    <li className="hover:text-[#f46177]">Collections</li>
                                    <li className="hover:text-[#f46177]">Healthcare</li>
                                    <li className="hover:text-[#f46177]">Banking</li>
                                    <li className="hover:text-[#f46177]">Lending</li>
                                    <li className="hover:text-[#f46177]">BPO</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-[16px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">Company</p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-[12px]">
                                    <li className="hover:text-[#f46177]">Contact</li>
                                    <li className="hover:text-[#f46177]">Support</li>
                                    <li className="hover:text-[#f46177]">CareersHiring!</li>
                                    <li className="hover:text-[#f46177]">Partner</li>
                                    <li className="hover:text-[#f46177]">About</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-[11.2px] sm:text-[16px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">Resources</p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col text-[10px] sm:text-[12px]">
                                    <li className="hover:text-[#f46177]">Press</li>
                                    <li className="hover:text-[#f46177]">Blog</li>
                                    <li className="hover:text-[#f46177]">Tech</li>
                                    <li className="hover:text-[#f46177]">Case Studies</li>
                                    <li className="hover:text-[#f46177]">Dev Center</li>
                                    <li className="hover:text-[#f46177]">Academy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden mt-[7%] mb-4 w-full md:flex items-center  justify-center">
                <div className="md:w-[85%] lg:w-[76%] px-4">
                    <div className="flex justify-between gap-4 w-full">
                        {ItemsFooter.map((item, index) => (
                            <div key={index}>
                                <p className="md:text-[16px] text-[11.2px] mb-2 font-[600] leading-[19.2px] tracking-[0.75px] text-[#1a1a1a]">
                                    {item.title}
                                </p>
                                <ul className="leading-[24px] text-[#6c7278] font-[500] flex gap-3 flex-col md:text-[14px] text-[10px]">
                                    {item.items.map((subItem) => (
                                        <li key={subItem.id} className="hover:text-[#f46177]">
                                            {subItem.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[76%] flex md:justify-end mb-4">
                <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    <div className="flex items-center md:justify-end justify-between gap-4 w-full px-2">
                        <img alt="iso" className="w-20 h-20" src="https://floatbot.ai/images/ISO.png?v=1" />
                        <img alt="hipaa" className="w-20 h-20" src="https://floatbot.ai/images/hipaa.png?v=1" />
                        <img alt="GDPR" className="w-20 h-20" src="https://floatbot.ai/images/GDPR.png" />
                        <img alt="SOC" className="w-20 h-20" src="https://floatbot.ai/images/SOC.png?v=1" />
                    </div>
                    <div className="flex items-center flex-col text-[#6c7278] font-[700] text-[14px]">
                        <p>+1 (650) 679-4167</p>
                        <a href="mailto:test@gmail.com">connect@floatbot.ai</a>
                    </div>
                </div>
            </div>
            <hr className="h-[2px] mt-1 mb-1 w-[96%]" />
            <div className="w-[90%] xl:w-[76%] px-2 gap-4 flex items-center md:justify-between flex-col md:flex-row h-[72px] text-[12px] text-[#6c7278] leading-[18px] py-2">
                <p>© 2025 Floatbot All Rights Reserved</p>
                <div className="md:w-1/3 w-full flex items-center justify-between">
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Bug Bounty Program</p>
                </div>
                <div className="flex items-center justify-between gap-2 w-full md:w-1/6">
                    <a rel="noreferrer" href="https://discord.com/" target="_blank" aria-label="discord">
                        <img src="/logos/discord.svg" alt="icon" />
                    </a>
                    <a rel="noreferrer" href="https://facebook.com/" target="_blank" aria-label="discord">
                        <img src="/logos/facebook.svg" alt="icon" />
                    </a>
                    <a rel="noreferrer" href="https://x.com/" target="_blank" aria-label="discord">
                        <img src="/logos/x.svg" alt="icon" />
                    </a>
                    <a rel="noreferrer" href="https://linkedin.com/" target="_blank" aria-label="discord">
                        <img src="/logos/linkedin.svg" alt="icon" />
                    </a>
                    <a rel="noreferrer" href="https://instagram.com/" target="_blank" aria-label="discord">
                        <img src="/logos/instagram.svg" alt="icon" />
                    </a>
                    <a rel="noreferrer" href="https://youtube.com/" target="_blank" aria-label="discord">
                        <img src="/logos/youtube.svg" alt="icon" />
                    </a>
                </div>
            </div>
        </>
    )
}