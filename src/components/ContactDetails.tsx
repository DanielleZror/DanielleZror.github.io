import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"

export default function ContactDetails({ className }: { className: string }) {
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
            <a target="_blank" rel="noreferrer" className="flex gap-2 items-center"
                href="https://github.com/DanielleZror">
                <FiGithub size={22} color="#E9A5C5" />
                <h5>Github Profile</h5>
            </a>
            <a target="_blank" rel="noreferrer" className="flex gap-2 items-center"
                href="https://www.linkedin.com/in/danielle-zror-496b35189/">
                <FaLinkedinIn size={22} color="#E9A5C5" />
                <h5>Linkedin Profile</h5>
            </a>
        </div>
    )
}
