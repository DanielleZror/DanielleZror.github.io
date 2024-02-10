
import { LuCopyright } from "react-icons/lu"

export default function Copyright() {
    return (
        <div className="dark:bg-black bg-white-300 m-8">
            <h5 className="flex flex-row items-center justify-center">
                Copyright <LuCopyright className="ml-2 mr-2" size={22} color="#E9A5C5" /> 2024 Danielle Zror. All Rights Resereved.
            </h5>
        </div>
    )
}
