
const QuoteB = () => {
    return (
        <div className="flex max-w-7xl mx-auto w-full bg-gray-200">
            {/* <div className="md:bg-quote-background md:bg-contain bg-no-repeat flex w-full"> */}
            <div className="relative flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto md:h-[600px]">
                <div className=" flex flex-col items-start justify-center gap-12 md:gap-24 py-12  md:w-3/5">
                    <div className="flex flex-col justify-center gap-4 md:mt-12">
                        <h1 className="text-4xl md:text-5xl text-sky-700">
                            {`ปัจจัยที่เร่งให้เซลล์แก่`}
                        </h1>
                        <h1 className="text-5xl text-sky-700">
                            {`ไม่ใช่ “อายุ”`}
                        </h1>
                        <h1 className="text-5xl text-sky-700">
                            {`แต่เป็น “อาหาร"`}
                        </h1>
                    </div>
                    <div className="absolute w-full bottom-0  bg-gradient-to-b from-white">
                        <div className="flex flex-col  justify-end items-end">
                            <span className="text-2xl text-sky-700">
                                หมอแชมป์
                            </span>
                            <span className="text-2xl text-sky-700">
                                พญ.นภาพร ธรรมพัฒนากูล
                            </span>
                            <span className="font-light text-sky-700">
                                แพทย์เวชศาสตร์ชะลอวัยและผิวหนัง
                            </span>
                            <span className="font-light text-sky-700">
                                Vitalia Wellness Clinic
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end items-end align-bottom px-12 md:pl-24">
                    <img src="/asset/quote/doctor.png" className="object-cover object-bottom  w-full md:h-[600px]" />
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default QuoteB