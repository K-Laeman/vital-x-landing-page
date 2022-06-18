import AddLine from "./buttons/AddLine"

const Hero = () => {
    return (
        <div className="flex w-full  md:h-[720px] bg-gradient-to-t from-sky-400 to-sky-100">
            <div className="flex flex-col md:flex-row max-w-7xl mx-auto w-full">
                <div className="flex md:w-7/12 bg-hero-background bg-cover md:bg-contain bg-left bg-no-repeat order-2 md:order-1">
                    <div className="relative flex w-full justify-center items-center  md:mt-24">
                        <div className="flex items-center justify-center object-center w-4/6 md:w-[460px] h-full">
                            <img src="/asset/hero-cover.webp" className="object-cover md:object-contain object-bottom" />
                        </div>
                        <img src="/asset/png/bubble-e.png" className="absolute top-24 left-4 md:left-12 w-16 md:w-24 animate-blob animation-delay-2000" />
                        <img src="/asset/png/bubble-a.png" className="absolute top-4 left-40 md:left-60 w-12 md:w-16 animate-blobr animation-delay-4000" />
                        <img src="/asset/png/bubble-c.png" className="absolute bottom-16 md:bottom-24 right-32 md:right-12 w-14 md:w-24 animate-blob animation-delay-1000" />
                        <img src="/asset/png/bubble-q.png" className="absolute top-16 md:top-36 right-4 md:right-0 w-24 md:w-32 animate-blobr animation-delay-3000" />
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center md:w-5/12 mt-8 py-24 px-6 order-1 md:order-2">
                    <div className="flex flex-col md:items-start gap-4 md:gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <h1 className="text-5xl  md:text-start md:text-7xl font-medium text-sky-600">
                                อายุเซลล์ลดลง
                            </h1>
                            <h2 className="text-4xl md:text-start md:text-5xl font-light text-sky-600">
                                ภายใน 3 เดือน*
                            </h2>
                        </div>

                        <div className="flex md:flex-col md:justify-start md:items-start w-full">
                            <p className="text-xl w-full px-8 md:px-0 text-center md:text-start md:text-3xl font-light text-sky-700">
                                ด้วยนวัตกรรมแห่งการปรับสมดุลตามธรรมชาติ
                            </p>
                        </div>

                        <div className="hidden md:block font-thin text-gray-800 md:text-2xl">
                            <p>
                                {`สุขภาพภายในสมดุลแข็งแรงขึ้น`}
                            </p>
                            <p>
                                {`ผิวกระจ่างใส นุ่มชุ่มชื้นขึ้น`}
                            </p>
                            <p>
                                {`จนสามารถสังเกตุ`}
                            </p>
                            <p>
                                {`ได้อย่างชัดเจน`}
                            </p>
                        </div>
                        {/* <div className="flex w-full gap-4">
                            <img src="/asset/SVG/svg/a1.svg" className="w-10" />
                            <img src="/asset/SVG/svg/a2.svg" className="w-10" />
                            <img src="/asset/SVG/svg/a3.svg" className="w-10" />
                            <img src="/asset/SVG/svg/a4.svg" className="w-10" />
                        </div> */}
                        <div className="flex w-full justify-center md:justify-start">
                            <AddLine />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero