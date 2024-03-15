import { Clock, PhoneIcon } from "lucide-react"
import Link from "next/link"

export const NavBar = () => {







    return (
        <div className=" h-72 w-screen text-white overflow-hidden center-col">
            <div className="h-3/4 p-2 lg:h-1/2 w-full flex-col lg:flex justify-between  item-center">
                <Link href={'/'} className="text-7xl font-extrabold w-1/2">IKCO Cabinets</Link>
                <div className="font-bold h-fit relative">
                    <div className="center w-1/2 gap-2">
                        <PhoneIcon />
                        <h1>(516)-4012923</h1>
                    </div>
                    <div className="center w-1/2 gap-2">
                        <Clock />
                        <h1>Mon-Fri 9-6pm</h1>
                    </div>

                </div>

            </div>
            <div className="lg:h-1/2 h-1/4 overflow-hidden bg-black w-full">
                <video className="object-cover relative bottom-32" autoPlay loop playsInline muted src={'/Videos/navVideo.mp4'} />
            </div>
        </div>
    )
}