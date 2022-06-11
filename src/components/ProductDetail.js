
const ProductDetail = () => {
    return (
        <div className="flex flex-col max-w-7xl mx-auto w-full px-6 md:px-12 py-12 gap-12 md:mt-12">
            <div className="flex flex-col md:flex-row w-full gap-12">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex flex-col py-4 px-4 gap-2  items-end md:items-center md:w-1/2">
                        <div className="flex flex-col items-start md:items-center w-full">
                            <h1 className="text-4xl md:text-6xl font-medium text-sky-700 uppercase">vital-x protein</h1>
                            <span className="pl-2 text-xl md:text-4xl font-light text-sky-900">
                                Chocolate Flavour
                            </span>
                        </div>
                        <div className="flex md:flex-col gap-4 items-end mt-12">
                            <div className="flex flex-col text-sky-800 text-2xl md:text-4xl font-normal">
                                <span>โปรตีนจากพืชและ</span>
                                <span>สารอาหารที่สำคัญ</span>
                            </div>
                            <div className="flex items-baseline text-sky-700 md:mt-12">
                                <h1 className="text-6xl md:text-9xl font-semibold">
                                    29
                                </h1>
                                <span className="text-xl md:text-4xl"> ชนิด</span>
                            </div>
                        </div>
                        <div className="flex w-full justify-center text-center md:mt-12">
                            <p className="text-sky-600 md:text-3xl md:w-2/3">
                                {`เหมือนเข้าคอร์สรักษาที่คลินิค ดูแล แม้อยู่ที่บ้าน`}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:w-1/2">
                        <div className="flex flex-col py-4 px-4 bg-sky-50 gap-2">
                            <li className="text-sky-800 text-xl md:text-2xl font-normal">
                                โปรตีนคุณภาพสูงจาก 4 แหล่ง
                            </li>
                            <span className="text-xl font-light text-sky-900">
                                {`โปรตีนจากถั่วลันเตา ข้าวกล้องสีน้ำตาล และเมล็ดเจีย ปราศจากนมวัว ไข่ กลูเตน และยีสต์ ไม่ก่อให้เกิดอาการแพ้เสริมด้วยกรดอะมิโน`}
                            </span>
                        </div>

                        <div className="flex flex-col py-4 px-4 bg-sky-50 gap-2">
                            <li className="text-sky-800 text-xl md:text-2xl font-normal">
                                {`คอลลาเจน`}
                            </li>
                            <span className="text-xl md:2xl font-light text-sky-900">
                                {`จากปลาทะเลน้ำลึก ซึ่งเป็นคอลลาเจนที่ใกล้เคียงกันกับคอลลาเจนในร่างกาย ช่วยให้ดูดซึมได้ดี`}
                            </span>
                        </div>

                        <div className="flex flex-col py-4 px-4 bg-sky-50 gap-2">
                            <li className="text-sky-800 text-xl md:text-2xl font-normal">
                                {`พรีไบโอติก (Prebiotic)`}
                            </li>
                            <span className="text-xl font-light text-sky-900">
                                {`สารอาหารที่ช่วยในกระบวนการดูดซึมของลำไส้ ระบบย่อยอาหาร และการขับถ่าย`}
                            </span>
                        </div>

                        <div className="flex flex-col py-4 px-4 bg-sky-50 gap-2">
                            <li className="text-sky-800 text-xl md:text-2xl font-normal">
                                {`วิตามิน 7 ชนิด`}
                            </li>
                            <span className="text-xl font-light text-sky-900">
                                {`และสารต้านอนุมูลอิสระ ได้แก่ วิตามินซี วิตามินบีคอมแพล็กซ์ วิตามินบี 5 วิตามินอี วิตามินดี ซิงค์(Zinc) และ แมกนีเซียม`}
                            </span>
                        </div>

                        <div className="flex flex-col py-4 px-4 bg-sky-50 gap-2">
                            <li className="text-sky-800 text-xl md:text-2xl font-normal">
                                {`ซูเปอร์ฟู้ด (Super Food) 7 ชนิด`}
                            </li>
                            <span className="text-xl font-light text-sky-900">
                                {`สุดยอดอาหารที่มีคุณค่าทางโภชนาการสูง ช่วยต้านอนุมูลอิสระ ได้แก่ อะโวคาโด บร๊อคโคลี่ ขึ้นฉ่ายฝรั่ง แครนเบอรี่ อเชโลร่า เชอร์รี่ และอื่นๆ`}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex md:hidden">
                    <div className="flex bg-product-slide-background bg-cover md:w-[400px] md:h-[400px] px-16 py-16 rounded-xl">
                        <img src="/asset/product/Vital-x-2.png" className=" object-contain" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail