import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi"

export default function ContactDetails({ className = '' }: { className: string }) {
    return (
        <div className={`flex flex-row gap-6 ${className}`}>
            <div className="flex gap-2 items-center">
                <HiOutlinePhone size={22} color="#E9A5C5" />
                <h5>615-207-5367</h5>
            </div>
            <a className="flex gap-2 items-center" href={`mailto:daniellezror@gmail.com`}>
                <HiOutlineMail size={22} color="#E9A5C5" />
                <h5>daniellezror@gmail.com</h5>
            </a>
            <div className="flex gap-2 items-center">
                <HiOutlineLocationMarker size={22} color="#E9A5C5" />
                <h5>Nashville, TN</h5>
            </div>
        </div>
    )
}
