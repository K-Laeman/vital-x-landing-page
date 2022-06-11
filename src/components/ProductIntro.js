import AddLine from "./buttons/AddLine"


const ProductIntro = () => {
    return (
        <div className="flex flex-col max-w-7xl mx-auto w-full py-12 gap-12">
            <div id="product" className="flex flex-col md:flex-row px-6 gap-12" >
                <div className="flex flex-col justify-center md:w-2/3 gap-4">
                    <h1 className="text-2xl md:text-4xl text-sky-700 font-normal">
                        {`ทำไมผู้หญิง`}<span className="text-5xl font-medium">{`  40+   `}</span><br />{`จึงต้องการสารอาหารมากกว่าคนวัยอื่น`}
                    </h1>
                    <p className="text-lg text-justify md:text-xl text-sky-900 font-light leading-8 first-letter:ml-12">
                        {`แม้ใครจะกล่าวว่าวัย 40 ขึ้นไป เป็นวัยที่ร่างกายเสื่อมถ่อยลงตามกาลเวลา แต่จากประสบการณ์การรักษาในคลินิมากกว่า 12 จาก 3,000 เคส ของ พญ.นภาพร ธรรมพัฒนากูล แพทย์ผู้เชี่ยวชาญด้านศาสตร์ชะลอวัย ทำให้ได้พบว่า ที่ภายนอกของเราดูแก่ลง
                      มาจากภายในที่เริ่มเสื่อมสภาพ หรือที่เรียกว่า`} <span className=" font-medium">{`"เซลล์แก่"`}</span>
                    </p>
                    <div className="flex items-center justify-center w-full md:px-12 md:mt-6">
                        <AddLine />
                    </div>
                </div>

                <div className="flex rounded-xl overflow-hidden">
                    <img src="/asset/product/vital-x-1.jpg" className=" object-cover" />
                </div>
            </div>
            {/* ------------------------------------------------------- */}
            <div className="flex flex-col md:flex-row px-6 gap-12 w-full md:mt-24" >

                <div className="flex flex-col gap-12 md:w-1/2 order-1 md:order-2">
                    <div className="flex flex-col md:gap-4">
                        <h1 className="text-4xl md:text-6xl text-sky-700 font-normal">
                            {`ให้สุขภาพดี`}
                        </h1>
                        <span className="text-2xl md:text-4xl text-left text-sky-600 font-normal">
                            {`เป็นเรื่องง่าย สร้างได้ทุกวัน`}
                        </span>
                        <p className="text-xl text-sky-900 font-light first-letter:ml-12 leading-8">
                            {`จากประสบการณ์การรักษา ทำให้เราได้พัฒนาสูตรผลิตภัณฑ์เสริมอาหาร VITAL-X PROTEIN ที่ตอบโจทย์ สำหรับผู้หญิงวัย 40+ โดยเฉพาะ`}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="flex w-3 h-3 bg-sky-700 rounded-full"></span>
                                <span className="text-lg md:text-xl font-medium text-sky-800">
                                    {`เหมาะสม`}
                                </span>
                            </div>
                            <div className="flex pl-5 text-lg md:text-xl font-light text-sky-800 leading-8">
                                {`คัดสรรและออกแบบสูตรอาหารที่เหมาะสมช่วยดูแลร่างกายได้ลึกถึงระดับเซลล์ ป้องกันการเสื่อมสภาพและไม่ก่อให้เกิดอาการแพ้`}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="flex w-3 h-3 bg-sky-700 rounded-full"></span>
                                <span className="text-lg md:text-xl font-medium text-sky-800">
                                    {`ครบถ้วน`}
                                </span>
                            </div>
                            <div className="flex pl-5 text-lg md:text-xl font-light text-sky-800 leading-8">
                                {`ได้รับสารอาหารที่ครบถ้วน ทั้งปริมาณที่พอดีและชนิดของสารอาหารครบถ้วนที่ผู้หญิงวัยนี้ต้องการ`}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="flex w-3 h-3 bg-sky-700 rounded-full"></span>
                                <span className="text-lg md:text-xl font-medium text-sky-800">
                                    {`สะดวก`}
                                </span>
                            </div>
                            <div className="pl-5">
                                <p className="flex text-lg md:text-xl font-light text-sky-800 leading-8">
                                    {`เพราะสุขภาพที่ดี ไม่ได้มาจากอาหารเพียงมื้อเดียว VITAL-X PROTEIN จึงได้่ออกแบบมาเพื่อช่วยให้การเลือกรับประทานอาหารมีความสะดวก สบายเพียงแค่ "ชง เชค ดื่ม"`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex md:w-1/2 overflow-hidden rounded-xl order-2 md:order-1">
                    <img src="/asset/product/Vital-x-2.jpg" className=" object-contain" />
                </div>

            </div>
        </div>
    )
}

export default ProductIntro