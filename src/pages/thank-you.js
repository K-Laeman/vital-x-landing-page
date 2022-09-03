const ThankYou = () => {
    return (
        <div className="flex w-full bg-gradient-to-b from-sky-300 via-white to-sky-100">
            <div className="flex flex-col min-h-screen justify-center items-center md:flex-row w-full px-4 md:px-12 py-12 bg">
                <div className="flex flex-col items-center justify-center w-full md:w-1/2">
                    <img src='/asset/hero-cover.webp' className="w-2/3" />
                </div>
                <div className="flex flex-col gap-8 md:w-1/2 bg-sky-50 px-6 py-6 rounded-2xl opacity-75 backdrop-blur-xl">
                    <div className="flex flex-col gap-4 justify-center items-center md:items-start ">
                        <span className="flex w-64 text-center justify-center rounded-full text-2xl font-bold text-white px-4 py-2 bg-sky-500">ถึง...คนไข้ทุกท่าน</span>
                        <div className="text-xl text-center text-sky-900">
                            <p>
                                ขอขอบคุณที่วางใจให้ Vital-X ได้เป็นส่วนหนึ่งในการดูแลสุขภาพ
                            </p>
                            <p>
                                และผิวพรรณของท่าน ซึ่งหมอได้วิจัยและพัฒนาตลอด 2 ปี
                            </p>
                            <p>
                                ภายใต้แนวคิด {`" The Best Version of You, is our Accountability"`}
                            </p>
                            <p>
                                เพื่อคัดสรรอาหารที่ช่วยชะลอความเสื่อมของเซลล์ สำหรับคุณโดยเฉพาะ
                            </p>
                            <br />
                            <p>
                                หมอและทีมงาน Vutalia Wellness Clinic และ Vital-X ทุกคน
                            </p>
                            <p>
                                อยากเห็นคนไข้และลูกค้าทุกท่าน สุขภาพดี อ่อนเยาว์
                            </p>
                            <p>
                                ผิวพรรณเปล่งประกายดูอ่อนกว่าวัยไปด้วยกันค่ะ
                            </p>
                        </div>
                        <div className="flex w-full justify-center items-center  bg-sky-500  px-4 py-4 rounded-xl">
                            <p className="text-lg text-white font-medium">เราขอขอบพระคุณอีกครั้งที่ไว้วางใจและเชื่อใจให้เราได้ดูแลเป็นอย่างดีเสมอมา</p>
                        </div>
                    </div>
                    <div>
                        <span className="flex bg-sky-500 px-4 py-8 rounded-2xl text-center justify-center text-white font-medium text-4xl outline-dashed outline-2 outline-sky-500 outline-offset-4">แสดงโค้ดส่วนลดตรงนี้</span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ThankYou