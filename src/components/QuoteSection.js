
const QouteSection = () => {
    return (
        <div className="flex max-w-7xl mx-auto justify-center items-center">
            <div className="relative w-full flex flex-col px-6 pt-12 gap-12 overflow-hidden md:hidden">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center text-center gap-4 md:mt-12">
                        <h1 className="text-4xl font-medium text-sky-700">
                            {`มื้อนี้.....ให้เราดูแล`}
                        </h1>
                        <p className="text-xl font-light text-sky-700">
                            {`"`}เพราะคุณคือคนสำคัญ <br /> {`ที่หมอใช้ประสบการณ์ด้าน ANTI AGING`} <br /> {`ออกแบบสิ่งนี้มาเพื่อคุณโดยเฉพาะ`}
                        </p>
                        <p className="text-xl font-light text-sky-700">
                            {`กินทุกวัน เหมือนมีหมอมาอยู่กับคุณทุกวัน`} <br /> {`สุขภาพและผิวของคุณก็จะดีขึ้นทุกวัน"`}
                        </p>

                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/asset/quote/doctor.png" className="w-4/6" />
                </div>
                <div className="absolute bottom-0 flex flex-col w-full items-center pt-24 pb-8 pr-20 bg-gradient-to-t from-white via-white ">
                    <span className="text-2xl font-medium text-sky-700">
                        {`หมอแชมป์`}
                    </span>
                    <span className="text-xl font-medium text-sky-700">
                        {`พญ.นภาพร ธรรมพัฒนากูล`}
                    </span>
                    <span className="text-xl mt-1 font-light text-sky-700">
                        {`แพทย์เวชศาสตร์ชะลอวัยและผิวหนัง`}
                    </span>
                    <span className=" text-xl font-light text-sky-700">
                        {`Vitalia Wellness Clinic`}
                    </span>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex mx-7-xl mx-auto w-full">
                <div className="flex w-full px-6 bg-sky-50 rounded-xl pt-12">
                    <div className="flex flex-col px-6 justify-center w-1/2 gap-4">
                        <h1 className="text-3xl md:text-7xl font-medium text-sky-700 mb-6">
                            {`มื้อนี้.....ให้เราดูแล`}
                        </h1>
                        <span className="text-3xl font-light text-sky-700 leading-10">
                            {`"`}เพราะคุณคือคนสำคัญที่หมอใช้ประสบการณ์ด้าน ANTI AGING ออกแบบสิ่งนี้มาเพื่อคุณโดยเฉพาะ{`"`}
                        </span>
                        <p className="text-3xl font-light text-sky-700 leading-10">
                            กินทุกวัน เหมือนมีหมอมาอยู่กับคุณทุกวัน สุขภาพและผิวของคุณก็จะดีขึ้นทุกวัน
                        </p>
                    </div>
                    <div className="relative flex flex-col w-1/2">
                        <div className="flex justify-center">
                            <img src="/asset/quote/doctor.png" className="w-3/6" />
                        </div>
                        <div className="absolute bottom-0 flex flex-col w-full items-center pt-24 pb-8 px-6 bg-gradient-to-t from-sky-50 via-sky-50 ">
                            <span className="text-3xl font-medium text-sky-700">
                                {`หมอแชมป์`}
                            </span>
                            <span className="text-3xl font-medium text-sky-700">
                                {`พญ.นภาพร ธรรมพัฒนากูล`}
                            </span>
                            <span className="text-2xl mt-1 font-light text-sky-700">
                                {`แพทย์เวชศาสตร์ชะลอวัยและผิวหนัง`}
                            </span>
                            <span className="text-2xl font-light text-sky-700">
                                {`Vitalia Wellness Clinic`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QouteSection