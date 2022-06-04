
const Quote = () => {
    return (
        <div className="bg-gradient-to-l from-sky-400 to-sky-200">
            <div className="bg-quote-background bg-cover flex">
                <div className="flex justify-between items-center max-w-7xl mx-auto h-[620px]">
                    <div className="flex flex-col items-start justify-center gap-24 mt-12  w-3/5">
                        <div className="flex flex-col gap-4 mt-12">
                            <h1 className="text-5xl text-sky-700">
                                {`ปัจจัยที่เร่งให้เซลล์แก่`}
                            </h1>
                            <h1 className="text-5xl text-sky-700">
                                {`ไม่ใช่ “อายุ”`}
                            </h1>
                            <h1 className="text-5xl text-sky-700">
                                {`แต่เป็น “อาหาร"`}
                            </h1>
                        </div>
                        <div className="flex flex-col w-full justify-end items-end">
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
                    <div className="flex justify-end items-end align-bottom pl-24">
                        <img src="/asset/quote/doctor.png" className=" object-cover object-bottom h-[620px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote