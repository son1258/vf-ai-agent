"use client"

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ItemsConnect, ItemsContact, ItemsExperience, ItemsFloatbot, ItemsImpactMetric, ItemsKnowladge, ItemsPayer, ItemsPharmacies, ItemsSwiper } from "@/shared/constants";
import "../../globals.css";
import HeadComponent from "@/components/header/HeadComponent";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
    const swiperRef = useRef<any>(null);
    const [progress, setProgress] = useState(0);
    const [activeButton, setActiveButton] = useState<any>('contact');
    const [slidesPerView, setSlidesPerView] = useState(3);
    const [slidesPerViewInterGrations, setSlidesPerViewInterGrations] = useState(4);
    const [clipPathValue, setClipPathValue] = useState('inset(0 round 66px)');

    const handleIntergateChange = (buttonId: string) => {
        if (activeButton == buttonId) return;
        setActiveButton(buttonId)
    };

    const handleSlideChange = (swiper: any) => {
        const totalSlides = ItemsSwiper.length;
        const progress = ((swiper.realIndex + 1) / totalSlides) * 100;
        setProgress(progress);
    };

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setSlidesPerView(1);
                setSlidesPerViewInterGrations(1);
            } else if (width < 1280) {
                setSlidesPerView(2);
                setSlidesPerViewInterGrations(3);
            } else if (width < 1400) {
                setClipPathValue('inset(0 round 65px)');
            } else {
                setClipPathValue('inset(0 round 66px)');
                setSlidesPerView(3);
                setSlidesPerViewInterGrations(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full min-h-screen relative font-inter">
            <div>
                <div className="w-full h-[100vh] z-[-1] absolute bg-[linear-gradient(180deg,rgba(254,230,223,0.32)_0%,rgba(254,230,223,0)_104.24%),url(/logos/bg-img.svg)] bg-center bg-cover bg-no-repeat"></div>
                <div className="screen-1400:pt-[8%] pt-[7%] relative w-full flex items-center flex-col justify-center font-[400] leading-custom-21">
                    <div className="w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                        <div className="flex items-center justify-center w-full flex-col">
                            <div className="screen-1400:max-w-[91.66666667%] flex items-center justify-center">
                                <div className="px-3 flex items-center justify-center w-full flex-col">
                                    <div className="font-[400] not-italic inline-flex items-center text-[#f46177] mb-2 bg-white font-roboto tracking-custom-035 shadow-title-shadow border-[1px] border-[#fee6df]
                                    screen-1400:text-sm screen-992:text-xs text-custom-10 screen-1400:leading-custom-21 md:leading-custom-18 
                                    leading-custom-15 screen-1400:px-custom-14 screen-1400:py-custom-6 px-2 py-custom-5 rounded-[8px] uppercase">
                                        <img src="https://floatbot.ai/images/healthcare/TAB1 healthcare AI agent.svg" /><p>healthcare center</p>
                                    </div>
                                    <h1 className="font-feature screen-1400:text-[64px] font-[700] mb-2 text-[#1a1a1a] text-center
                                        screen-1140:text-[50px] screen-1140:leading-custom-64 screen-992:leading-custom-46 md:text-[45px]
                                        screen-992:tracking-[0.75px] leading-normal tracking-normal text-[34px]">
                                        Transform Core <span className="text-[#f46177]">Healthcare</span> Operations with Agentic AI
                                    </h1>
                                </div>
                            </div>
                            <div className="px-3">
                                <div className="max-w-[1071px]">
                                    <img src="https://floatbot.ai/images/healthcare/lexi svg.png?v=1" className="h-[auto] w-full" />
                                </div>
                                <div className="text-center text-[#f46177] font-[700] text-[22px] leading-custom-33 md:text-[28px] md:leading-custom-42
                                     screen-992:text-[32px] px-3 py-custom-4.8 screen-992:leading-custom-48">LEXI-Healthcare AI Agent</div>
                                <div className="font-inter flex items-center justify-center flex-wrap my-custom-15 md:flex-row flex-col w-full gap-[10px] 
                                    screen-600:gap-4 text-base screen-600:text-3xl screen-600:leading-[36.57px] leading-custom-22 text-center px-5 font-[700] text-white ">
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">Provider</div>
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">Payer</div>
                                    <div className="px-5 py-custom-3 bg-[#303145] rounded-[15px] w-full sm:w-[auto]">Pharmacy</div>
                                </div>
                            </div>
                            <div className="mt-[7%] flex items-center justify-center w-2/3">
                                <div className="px-3 relative after:absolute after:left-1/2 after:top-0 after:translate-x-[-50%] w-full h-5 overflow-hidden after:block after:mt-[-25px] after:w-[68%] after:h-custom-22 after:shadow-break-shadow after:rounded-[125px/12px]">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[14%] md:nt-[12%] screen-992:mt-[7%] w-full flex flex-col items-center justify-center">
                        <div className="px-3 w-full screen-1400:max-w-[1320px] screen-1200:max-w-[1140px] screen-992:max-w-[960px] md:max-w-[720px] screen-576:max-w-[540px]">
                            <div className="w-full flex items-center justify-center flex-col font-inter">
                                <div className="text-center font-[700]">
                                    <h2 className="mb-6 tracking-normal screen-992:tracking-custom-075 font-feature screen-1400:text-5xl screen-1400:leading-custom-56 md:text-custom-40 text-3xl screen-992:leading-custom-52 leading-normal mb-6">Experience Zone</h2>
                                </div>
                                <div className="block w-full flex items-center justify-center">
                                    <div className="screen-1400:p-[2%] screen-992:p-[1.5%] p-[2.5%] bg-[#1a1a1a] w-full md:rounded-[69px] rounded-3xl">
                                        <div className="screen-992:p-custom-3 screen-992:rounded-[65px] md:block md:p-[0.5%] md:rounded-[68px] rounded-[20px] bg-[#2c2c2c]
                                            flex items-center justify-center flex-col relative overflow-hidden transition duration-custom-400" style={{ WebkitClipPath: clipPathValue }}>
                                            <div className="screen-1400:mr-custom-1 pt-4 pb-8 relative z-1 bg-[#1a1a1a] w-full h-full opacity-1">
                                                <div className="relative">
                                                    <div className="flex items-center justify-center text-base">
                                                        <div className="min-w-40 bg-[#1a1a1a] relative before:absolute before:top-[30%] before:border-x-[4.5px] before:border-x-transparent before:border-b-[4.5px] before:right-4
                                                            after:absolute after:top-[45%] after:border-x-[4.5px] after:border-t-[4.5px] after:right-4 after:border-x-transparent">
                                                            <p className="w-[182px] pl-custom-56 pr-custom-64 py-2 rounded-[14px] border-[1px] border-[#caced1] text-white text-center mb-2 cursor-pointer leading-custom-24 tracking-normal">English</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex screen-992:flex-row flex-col items-center justify-center w-full">
                                                        <div className="screen-992:grid screen-992:grid-cols-2 screen-992:w-1/3 w-full flex flex-col py-2 pl-3 gap-2 leading-custom-21 text-sm mt-4">
                                                            {ItemsExperience.map((item, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="overflow-hidden flex items-center justify-center flex-col border-[1px] border-[#655255] rounded-[16px] h-[105px] bg-[#1a1a1a]"
                                                                >
                                                                    <img src={item.icon} alt={item.text} />
                                                                    <p className="text-white/50 min-h-[45px] flex items-center justify-center px-1 text-center">{item.text}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="flex items-center flex-col justify-center screen-992:w-1/3 w-full">
                                                            <div className="mt-12 w-[110px] h-[110px] rounded-[50%] bg-gradient-to-r from-[#f8f8f8] to-[#d0cfcc] flex items-center justify-center">
                                                                <img src="/logos/micro.svg" />
                                                            </div>
                                                            <div className="flex items-center justify-center w-full">
                                                                <div className="screen-1400:w-[343px] mx-auto mb-4 mt-10 h-[60px] overflow-hidden">
                                                                    <p className="w-[96%] font-[400] md:text-xl text-base text-white text-center p-[1%] md:leading-custom-30 leading-custom-24 font-inter">
                                                                        Tap the mic and try our Appointment AI Agent
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-center flex-col md:w-1/3 w-full text-[16px]">
                                                            <p className="font-[500] px-4 text-white text-center mb-4 text-[12px] md:text-[16px] leading-[18px] md:leading-[24px]">
                                                                Try Gen AI-powered Appointment bot by calling below number
                                                            </p>
                                                            <div className="cursor-pointer text-[#f46177] py-3 px-12 bg-white rounded-[14px]">
                                                                +91796-953-1108
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center justify-center font-[600] leading-[21px] font-[14px] py-4">
                                                        <p className="px-16 md:px-6 py-[15px] rounded-[14px] border-[1px] border-white text-[#1a1a1a] text-center bg-white">
                                                            Explore More
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center">
                            <div className="flex items-center justify-center leading-[21px] flex-col gap-2">
                                <p className="font-feature font-[700] 2xl:leading-[56px] md:leading-[52px] leading-[24px] 2xl:text-[48px] md:text-[40px] text-[30px] lg:w-[60%] md:w-[80%] w-[95%] text-center">
                                    Empower Clinical Staff, Claims Specialists, Agents, Sales Reps, & CSRs
                                </p>
                                <img src="https://floatbot.ai/images/healthcare/updated-spinner.png" alt="automation in INSAI" />
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center">
                            <div className="lg:w-[90%] w-[70%] bg-[url(/logos/roi-bg.png)] bg-no-repeat bg-cover bg-size[100%] p-16 md:rounded-[64px] rounded-[55px]">
                                <HeadComponent icon={"/logos/impact.svg"} title={"IMPACT METRICS"} description={"Improved Efficiency Guaranteed"} />
                                <div className="hidden lg:grid grid-cols-3 gap-4">
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full">
                                                <img src="/logos/setting.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-[32px] leading-[38px]">50%</p>
                                                <p className="w-[75%] text-[#6c7278] text-[14px]">Reduction in Patient Support Costs</p>
                                            </div>
                                        </div>
                                        <div className="p-12 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full">
                                                <img src="/logos/time.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-[32px] leading-[38px]">30%</p>
                                                <p className="w-[75%] text-[#6c7278] text-[14px]">Decrease in AHT (Average Handle Time)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full">
                                                <img src="/logos/phone.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-[32px] leading-[38px]">80%</p>
                                                <p className="w-[75%] text-[#6c7278] text-[14px]">Automation of Patient Engagement Calls</p>
                                            </div>
                                        </div>
                                        <div className="w-full relative">
                                            <img src="/logos/row-above.svg" className="absolute top-[1%] left-[50%]" />
                                            <div className="absolute top-[20%] left-[20%]">
                                                <img src="https://floatbot.ai/images/contact-center-voice-ai/roi-img.svg" alt="icon setting" />
                                            </div>
                                            <img src="/logos/row.svg" className="absolute left-[1%] top-[50%]" />
                                            <img src="/logos/row.svg" className="absolute right-[1%] top-[50%]" />
                                        </div>
                                    </div>
                                    <div className="w-1/3 w-full grid grid-rows-2 gap-6">
                                        <div className="p-12 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full">
                                                <img src="/logos/error.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-[32px] leading-[38px]">70%</p>
                                                <p className="w-[75%] text-[#6c7278] text-[14px]">Reduction in Compliance Risk</p>
                                            </div>
                                        </div>
                                        <div className="p-12 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full">
                                                <img src="/logos/cancel-phone.svg" alt="icon setting" />
                                                <p className="font-feature font-[700] text-[32px] leading-[38px]">90%</p>
                                                <p className="w-[75%] text-[#6c7278] text-[14px]">Decrease in After-Call Work (ACW)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:hidden flex flex-col gap-4 mt-8">
                                    {ItemsImpactMetric.map((item) => (
                                        <div key={item.title} className="p-4 w-full rounded-[24px] border-[#f46177] bg-white shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]">
                                            <div className="w-full flex items-center justify-center flex-col text-center">
                                                <img src={item.icon} alt={`${item.title} icon`} />
                                                <p className="font-[700] text-[32px] leading-[38px]">{item.title}</p>
                                                <p className="w-[80%] text-[#6c7278] text-[14px]">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                            <HeadComponent icon={"/logos/provider.svg"} title={"PROVIDERS"} description={"Simplify Patient Access"} />
                            <div className="px-1 w-full flex items-center flex-row justify-center">
                                <div className="w-full 2xl:w-[75%] border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#F8F9FC]">
                                    <div className="2xl:p-10 p-4 w-full">
                                        <div className="relative w-full">
                                            <Swiper
                                                slidesPerView={slidesPerView}
                                                spaceBetween={16}
                                                loop={true}
                                                freeMode={false}
                                                mousewheel={true}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                modules={[Autoplay, Navigation]}
                                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                onSlideChange={handleSlideChange}
                                                className="w-full"
                                            >
                                                {ItemsSwiper.map((item) => (
                                                    <SwiperSlide key={item.title}>
                                                        <div className="w-full h-[411px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-white 2xl:p-[30px] p-5">
                                                            <img src={item.icon} alt={item.title} className="w-[73px] h-[74px] mb-4" />
                                                            <p className="text-[22px] font-feature font-[600] leading-[26px] mb-4">
                                                                {item.title}
                                                            </p>
                                                            <p className="text-[16px] font-[400] leading-[27px] 2xl:leading-[24px] text-[#6c7278]">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className="w-full h-[2px] bg-gray-300 mt-4">
                                                <div
                                                    className="h-full bg-gray-600 transition-all duration-500 ease-linear"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                            <HeadComponent icon={"/logos/payer.svg"} title={"PAYERS"} description={"Reduce Complexity in Insurance Administration"} />
                            <div className="px-1 w-full flex items-center flex-row justify-center">
                                <div className="md:w-[76%] w-full">
                                    <div className="md:grid md:grid-cols-4 flex flex-col gap-6">
                                        {ItemsPayer.map((payer) => (
                                            <div className="w-full text-[16px]" key={payer.title}>
                                                <div className="p-6">
                                                    <img src={payer.icon} alt={`${payer.title} icon`} />
                                                    <p className="font-feature font-[700] leading-[19.2px] my-4">{payer.title}</p>
                                                    <p className="leading-[24px] mb-4 text-[#6c7278]">{payer.description}</p>
                                                </div>
                                                <div className="md:hidden block flex items-center justify-center">
                                                    <div className="w-2/3 h-[22px] rounded-[10px] shadow-xl shadow-[0_0_8px_#000] my-[-25px]"></div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <div className="w-1/3 h-5 bg-white shadow-xl shadow-[#fab7c1] mt-[60px] rounded-[10px]"></div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                            <HeadComponent icon={"/logos/pharmacies.svg"} title={"PHARMACIES"} description={"Streamline Pharmacy Workflows"} />
                            <div className="sm:w-[80%] md:w-[90%] xl:w-[76%] relative w-full px-2">
                                <div className="mt-6 md:px-12 px-10 md:py-16 py-10 bg-[#1a1a1a] rounded-[48px] bg-[url(/logos/black-bg.png)] bg-no-repeat bg-cover bg-[100%] flex items-center justify-center">
                                    <div className="md:py-[112px] px-2 md:px-16 bg-[#1a1a1a] border-[2px] border-black rounded-[42px] shadow w-full md:w-[75%] flex items-center justify-center">
                                        <div className="lg:max-w-4xl max-w-[450px] md:max-w-3xl">
                                            <Swiper
                                                slidesPerView={1}
                                                loop={true}
                                                navigation={{
                                                    nextEl: ".swiper-button-next",
                                                    prevEl: ".swiper-button-prev",
                                                }}
                                                modules={[Navigation]}
                                                onSwiper={(swiper) => {
                                                    swiperRef.current = swiper;
                                                }}
                                                className="relative w-full"
                                            >
                                                {ItemsPharmacies.map((pharmacies, index) => (
                                                    <SwiperSlide key={pharmacies.id}>
                                                        <div className="rounded-3xl py-4 flex items-center justify-center">
                                                            <div className="w-full md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[96%] px-12">
                                                                <div className="flex flex-row items-center mb-[3%] text-white md:text-[18px] text-[16px] md:leading-[27px] leading-[19px] gap-4">
                                                                    <div className="p-4 md:p-[18px] border-[1px] border-[#6c7278] rounded-[50%] text-[18px]">
                                                                        <strong>{`${index + 1}`}</strong><span className="text-[#6c7278]">{`/${ItemsPharmacies.length}`}</span>
                                                                    </div>
                                                                    <h3 className="text-xl font-feature font-[700] mb-2">{pharmacies.title}</h3>
                                                                </div>
                                                                <div className="text-white font-[500] text-[12px] sm:text-[14px] md:text-[16px] leading-[24px] mb-[1%]">
                                                                    <p>{pharmacies.description}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center flex-col">
                            <HeadComponent icon={"/logos/floatbox.svg"} title={"CHOOSE FLOATBOT.AI"} description={"What Makes Us the Right Fit for Healthcare"} />
                            <div className="md:w-[76%] w-full">
                                <div className="md:grid lg:grid-cols-4 sm:grid-cols-2 gap-4 flex flex-col w-full">
                                    {ItemsFloatbot.map((floatbot) => (
                                        <div key={floatbot.title} className="px-2">
                                            <div className="flex items-center gap-2">
                                                <img src={floatbot.icon} alt={`${floatbot.title} icon`} />
                                                <p className="font-feature font-[600] md:text-[20px] text-[16px] leading-[24px] mb-2">{floatbot.title}</p>
                                            </div>
                                            <p className="text-[14px] mb-4 text-[#6c7278]">{floatbot.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-full flex items-center justify-center px-2 flex-col">
                            <div className="sm:w-[74%] md:w-[90%] 2xl:w-[80%] w-full rounded-[64px] bg-[url(/logos/integration-bg.png)] bg-no-repeat bg-cover bg-size-[100%] text-[14px] md:px-[52px] md:py-[26px] py-2">
                                <HeadComponent icon={"/logos/pre-intergration.svg"} title={"PRE-INTERGRATIONS"} description={"Pre-Integrates with EHRs, CCaaSS (Dialer & Call Center Software), Knowledgebase Systems"} />

                                <div className="mt-[3%] w-full flex items-center justify-center flex-col">
                                    <div className="md:w-[60%] lg:w-[45%] xl:w-[35%] w-2/3 text-[13px] lg-[14px]">
                                        <div className="w-full md:flex-row flex-col flex items-center justify-between px-[12px] py-[5px] rounded-[16px] shadow bg-[#ffeee9] font-[600]">
                                            <button
                                                onClick={() => handleIntergateChange('contact')}
                                                className={`${activeButton === 'contact' ? 'bg-white rounded-[12px] shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]' : 'text-[#6c7278]'} h-10 px-[25px]`}>
                                                Contact Center
                                            </button>
                                            <button
                                                onClick={() => handleIntergateChange('knowledge')}
                                                className={`${activeButton === 'knowledge' ? 'bg-white rounded-[12px] shadow-[0_2px_0_0_#fff_inset,0_-4px_1px_0_#f8888E29_inset,0_0_0_0.6px_#f8888E52,0_4px_6px_-4px_#c34E5F29]' : 'text-[#6c7278]'} h-10 px-[25px]`}>
                                                Knowledge-Bases
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-[2%] w-full">
                                        <div>
                                            <div className="pt-[31px] px-10 md:px-[0]">
                                                {activeButton == 'contact' ? (
                                                    <Swiper
                                                        slidesPerView={slidesPerViewInterGrations}
                                                        spaceBetween={16}
                                                        loop={true}
                                                        freeMode={false}
                                                        mousewheel={true}
                                                        autoplay={{
                                                            delay: 3000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay, Navigation]}
                                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                        className="w-full"
                                                    >
                                                        {ItemsContact.map((item) => (
                                                            <SwiperSlide key={item.id}>
                                                                <div className="w-full mt-[48px] mb-[56px] md:mt-[30px] md:px-4 h-[136px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#f8f9fc]  flex items-center justify-center">
                                                                    <img src={item.icon} alt={item.icon} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                ) : (
                                                    <Swiper
                                                        slidesPerView={slidesPerViewInterGrations}
                                                        spaceBetween={16}
                                                        loop={true}
                                                        freeMode={false}
                                                        mousewheel={true}
                                                        autoplay={{
                                                            delay: 3000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay, Navigation]}
                                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                                        className="w-full"
                                                    >
                                                        {ItemsKnowladge.map((item) => (
                                                            <SwiperSlide key={item.id}>
                                                                <div className="w-full mt-[48px] mb-[56px] md:mt-[0] md:mb-[0] h-[136px] border-[1px] border-[#e4e7ec] rounded-[32px] bg-[#f8f9fc]  flex items-center justify-center">
                                                                    <img src={item.icon} alt={item.icon} />
                                                                </div>
                                                            </SwiperSlide>
                                                        ))}
                                                    </Swiper>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[14%] md:mt-[7%] w-[90%] xl:w-[76%] flex items-center justify-center flex-col">
                            <HeadComponent icon={"/logos/connect.svg"} title={"LET'S CONNECT"} description={"Make Healthcare Operations Seamless & Scalable with LEXI"} />
                            <div className="px-3 md:w-[90%] w-full mt-6">
                                <div className="flex lg:flex-row flex-col items-center justify-between w-full gap-8">
                                    {ItemsConnect.map((item) => (
                                        <div className="flex flex-col text-center" key={item.title}>
                                            <p className="text-[#6c7278] mb-2 md:text-[18px] text-[14px]">{item.title}</p>
                                            <p className="font-feature font-[700] 2xl:text-[40px] md:text-[32px] text-[26px] leading-[56px] tracking-[0.75px] text-[#1a1a1a] underline underline-offset-8 cursor-pointer">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full md:mt-[80px] mt-[7%]">
                            <div className="w-1/3 h-[22px] bg-white shadow-xl rounded-[10px]"></div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}