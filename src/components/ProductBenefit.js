

const ProductBenefit = () => {
    return (
        <div id="benefit" className="flex w-full md:bg-product-benefit-background bg-cover">
            <div className="flex flex-col max-w-7xl mx-auto w-full gap-4  py-12 px-6 md:px-12">
                <p className="text-start md:text-center text-2xl md:text-4xl font-medium text-sky-800 uppercase">
                    {`vital-x protein`}
                </p>
                <div className="flex flex-col md:flex-row w-full md:justify-center md:gap-4 md:items-baseline">
                    <p className="text-start text-xl md:text-2xl font-light text-sky-800">
                        <span className="text-xl md:text-2xl font-medium text-sky-800">{`ปรับ`}</span> {`สุขภาพให้ดีจากภายใน`}
                    </p>
                    <p className="text-xl md:text-2xl font-light text-sky-800">
                        <span className="text-xl md:text-2xl font-medium text-sky-800">{`เปลี่ยน`}</span> {`ให้คุณสวยเปล่งประกายสู่ภายนอก`}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row w-full gap-12 items-start md:mt-12">
                    <div className="flex flex-col gap-4 justify-start items-center md:px-4 md:w-1/3">
                        <img src="/asset/product/icon-2.png" className="w-14 md:w-16" />
                        <h1 className="text-xl font-medium">ขจัดพิษและปรับสมดุล</h1>
                        <p className="font-light text-lg md:text-xl">{`เตรียมความพร้อมของร่างกาย เพื่อประสิทธิภาพสูงสุดในการรับสารอาหารที่มีประโยชน์ เริ่มจากการปรับสมดุลในลำไส้ ซึ่งถือเป็นสมองแห่งที่ 2 ของร่างกาย เพื่อประสิทธิภาพในการดูดซึมที่ดี และขจัดสารพิษที่สะสมในร่างกาย (Detox) ด้วยสุดยอดสารอาหารต้านอนุมูลอิสระจากหลายแหล่ง`}</p>

                    </div>
                    <div className="flex flex-col gap-4 justify-start items-center  md:px-4 md:w-1/3">
                        <img src="/asset/product/icon-3.png" className="w-14 md:w-16" />
                        <h1 className="text-xl font-medium">เสริมสร้างและฟื้นฟูได้ตรงจุด</h1>
                        <p className="font-light text-lg md:text-xl">{`ด้วยส่วนผสมของโปรตีน ซึ่งเป็นองค์ประกอบพื้นฐานของเซลล์ในร่างกาย กลุ่มสารอาหารวิตามิน สารต้านอนุมูลอิสระที่สำคัญ และคอลลาเจน ที่ช่วยในการซ่อม สร้าง เสริม และฟื้นฟูร่างกายได้ตั้งแต่ระดับเซลล์สู่ภายนอกที่ดูดี`}</p>

                    </div>
                    <div className="flex flex-col gap-4 justify-start items-center md:px-4 md:w-1/3">
                        <img src="/asset/product/icon-1.png" className=" w-12 md:w-14" />
                        <h1 className="text-xl font-medium">บำรุงให้สวย แลดูอ่อนวัย</h1>
                        <p className="font-light text-lg md:text-xl">
                            {`สุขภาพดีขึ้นอย่างยั่งยืน ด้วยสารต้านอนุมูลอิสระ ที่ช่วยป้องกันปัจจัยที่สร้างความเสื่อมแก่ร่างกาย คอลลาเจนที่ช่วยบำรุงเข่าและข้อ วิตามิน D3 
                            ที่ช่วยปรับปรุงคุณภาพการนอนหลับของคุณให้ดีขึ้น และช่วยให้ผิวแข็งแรง ไม่ไวต่อแสง ลดการหมองคล้ำจากแดด ตามด้วยสังกะสี สุดยอดสารต้านอนุมูลอิสระสำหรับคุณผู้หญิงโดยเฉพาะ ที่ช่วยบำรุงผม-ผิว-เล็บ ให้ดูสวยอ่อนเยาว์`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBenefit

