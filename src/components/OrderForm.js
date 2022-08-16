import { useState } from "react"

export default function OrderForm() {
    const [name, setName] = useState("customer name");
    const [addr, setAddr] = useState("customer address");

    const handleOrderSubmit = async (e) => {
        e.preventDefault();

        let message = [`name: ${name}, \n address: ${addr}`]

        await fetch('https://notify-api.line.me/api/notify', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Authorization': 'Bearer ZPKZbpeeqxVgUVP6PHoGpihjZUGxZzKUn6ExCuEayIj',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: {
                'type': 'text',
                'message': message,
            }

        }).then((res) => {
            if (res.status == 200) {
                console.log('successfully')
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="flex max-w-2xl mx-auto justify-center items-center">
            <form onSubmit={handleOrderSubmit} className="flex flex-col gap-4 px-6 py-6 bg-slate-100">
                <div className="flex flex-col w-full justify-between gap-2">
                    <label className="text-xl">
                        Name:
                    </label>
                    <input onChange={e => setName(e.target.value)} type={'text'} required className="px-4 py-2" />
                </div>
                <div className="flex flex-col w-full justify-between gap-2">
                    <label className="text-xl">
                        Address:
                    </label>
                    <input onChange={e => setAddr(e.target.value)} type={'text'} required className="px-4 py-2" />
                </div>
                {/* <div className="flex w-full justify-between gap-2">
                    <label>
                        slip:
                    </label>
                    <input type={'file'} />
                </div> */}
                <div className="flex w-full ">
                    <button type={'submit'} className="flex w-full bg-slate-500 py-2 rounded justify-center text-lg text-white uppercase">
                        Notify me
                    </button>
                </div>
            </form>
        </div>
    )
}