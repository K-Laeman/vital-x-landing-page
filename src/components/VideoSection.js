
const VideoSection = () => {
    return (
        <div className="flex max-w-7xl mx-auto w-full py-12 px-6 md:px-12">
            <div className="flex flex-col flex-1 gap-4 ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-medium text-sky-800">นวัตกรรมแห่งการ</h1>
                    <h2 className="text-xl text-sky-700">ปรับสมดุลตามธรรมชาติ</h2>
                </div>
                <div className="w-full">
                    <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/CWcsHUWUVIk"></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoSection