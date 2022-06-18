
const VideoSection = () => {
    return (
        <div className="flex max-w-7xl mx-auto w-full py-12 px-6 md:px-12">
            <div className="flex flex-col flex-1 gap-4 md:gap-8">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl md:text-6xl font-medium text-sky-800">นวัตกรรมแห่งการ</h1>
                    <h2 className="text-xl md:text-3xl text-sky-700">ปรับสมดุลตามธรรมชาติ</h2>
                </div>
                <div className="w-full">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/watch?v=IQPuYNysOes"></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoSection