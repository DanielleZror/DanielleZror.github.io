import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi"
import { FiGithub } from "react-icons/fi"
import { RiLinkedinLine } from "react-icons/ri"

export default function ContactDetails() {
    return (
        <div className="flex gap-7 flex-wrap mt-auto max-lg:mt-14 max-sm:grid max-sm:grid-cols-2 max-sm:gap-0">
            <div className="flex gap-2 items-center max-sm:mb-6">
                <HiOutlinePhone size={22} color="#E9A5C5" />
                <h5>615-207-5367</h5>
            </div>
            <a className="flex gap-2 items-center max-sm:mb-6 max-sm:w-fit" href={`mailto:daniellezror@gmail.com`}>
                <HiOutlineMail size={22} color="#E9A5C5" />
                <h5>daniellezror@gmail.com</h5>
            </a>
            <div className="flex gap-2 items-center max-sm:mb-6">
                <HiOutlineLocationMarker size={22} color="#E9A5C5" />
                <h5>Nashville, TN</h5>
            </div>
            <a target="_blank" rel="noreferrer" className="flex gap-2 items-center max-sm:mb-6 max-sm:w-fit"
                href="https://github.com/DanielleZror">
                <FiGithub size={22} color="#E9A5C5" />
                <h5>Github Profile</h5>
            </a>
            <a target="_blank" rel="noreferrer" className="flex gap-2 items-center max-sm:mb-6 max-sm:w-fit"
                href="https://www.linkedin.com/in/danielle-zror-496b35189/">
                <RiLinkedinLine size={24} color="#E9A5C5" />
                <h5>Linkedin Profile</h5>
            </a>
        </div>
    )
}
