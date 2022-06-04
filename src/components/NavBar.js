
const NavBar = () => {

    const menuItems = [
        { title: 'product', link: '/#product' },
        { title: 'benefit', link: '/#benefit' },
        { title: 'how to', link: '/#howto' },
        { title: 'review', link: '/#review' },
    ]
    return (
        <div className="absolute flex w-full top-0">
            <div className="flex justify-between items-baseline max-w-7xl mx-auto w-full py-4">
                <div className="flex flex-col justify-center items-center gap-0">
                    <span className="text-3xl text-sky-700 font-light uppercase mb-0 py-0">
                        vitalia
                    </span>
                    <span className=" text-xs text-sky-700 font-thin mt-0 py-0">
                        supplements
                    </span>
                </div>
                <div className="flex w-full justify-end gap-12 uppercase font-thin text-sm text-sky-700">
                    {
                        menuItems.map((item, key) => {
                            return (
                                <a key={key} href={item.link} className="hover:opacity-50">
                                    {item.title}
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar