
import { LuCopyright } from "react-icons/lu"

export default function Copyright() {
    return (
        <div className="bg-black flex flex-row m-8 items-center justify-center">
            <h5 className="mr-2 ">
                Copyright
            </h5>
            <LuCopyright size={22} color="#E9A5C5" />
            <h5 className="ml-2 ">
                2024 Danielle Zror. All Rights Resereved.
            </h5>
        </div>
    )
}
